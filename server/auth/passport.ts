// import { model } from 'mongoose';
// import { async } from '@angular/core/testing';
// import { Usuario } from '../cadastros/usuarios/models/Usuario';
import { config } from './../config/index';
import { dbConn } from './../config/connect';
import { IUsuario } from './../cadastros/usuarios/usuario.interface';
import * as async from 'async';
import * as jwt from 'jwt-simple'


export class Passport {

    public autenticacao = (req: any, res: any) => {
        this.auth(req.body, (err: any, usuarioSession: UsuarioSession) => {
            if (usuarioSession) {
                console.log('Retornou usuarioSession');
                return res.send(usuarioSession);
            } else {
                return res.send(err);
            }
        });
    }

    auth(body: any, cb: Function) {
        async.waterfall([
            (done: any) => {
                if (body) {
                    dbConn('projetoWeb').model("Database").findOne({ 'acessos.email': body.usuario }, (err: any, user: any) => {
                        console.log('Buscou Database no banco');
                        if (err) {
                            return done(err, user);
                        }
                        this.validaCredenciais(user, body, (err: string, retorno: any) => {
                            console.log('Valida credenciais recebeu a busca');
                            if (err) {
                                return done(err, retorno);
                            }
                            return done(err, retorno);
                        });
                    })
                }
            }
        ], (err: any, result: any) => {
            cb(err, result);
        });
    }

    validaCredenciais(params: any, body: any, cb: Function) {
        if (params) {
            // conecta ao usuario na database
            dbConn(params.database).model("Usuario").findOne({ "email": body.usuario }, (err: any, usuario: IUsuario) => {
                console.log('Buscou Usuário no banco');
                if (usuario) {
                    if (usuario.senha.toString() == body.senha.toString()) {
                        usuario.database = params.database;
                        var encode = jwt.encode(usuario, config.secrets.session);
                        return cb(null, {
                            login: usuario.login,
                            nome: usuario.nome,
                            token: encode
                        });
                    } else {
                        return cb('Usuário ou senha inválida!', null);
                    }
                } else {
                    return cb('Usuário não encontrado!', null);
                }
            })
        } else {
            return cb('Usuário não encontrado!', null);
        }
    }
}


export interface UsuarioSession {
    login: number, // pq number?
    nome: string,
    token: string
}