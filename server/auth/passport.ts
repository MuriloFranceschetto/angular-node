import * as async from 'async';
import { utils } from '../utils/index';
import { Database } from '../config/database';

const mongoose = new Database;
export class Passport {
    public autenticacao = (req, res) => {
        console.log('Entrou');
        this.auth(req.body, (err: any, usuarioSession: UsuarioSession) => {
            if (usuarioSession) {
                console.log('DEU BOA')
                return utils.sendResponse(null, usuarioSession, res);
            } else {
                console.log('DEU RUIM')
                return utils.sendResponse(err, null, res);
            }
        });
    }

    auth(body: any, cb: Function) {
        // async.waterfall([
        //     (done: any) => {
        //         if (body) { // Ajustar para pegar o email do parametro
        //             mongoose('projetoCerto').model("Database").findOne({ 'acessos.email': body.usuario }, (err: any, user: any) => {
        //                 if (err) {
        //                     return done(err, user);
        //                 }
        //                 this.validaCredenciais(user, body, (err: string, retorno: any) => {
        //                     if (err) {
        //                         return done(err, retorno);
        //                     }
        //                     return done(err, retorno);
        //                 });
        //             })
        //         }
        //     }
        // ], (err: any, result: any) => {
        //     cb(err, result);
        // });
    }
}

export interface UsuarioSession {
    login: number,
    nome: string,
    token: string
}