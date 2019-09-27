import { Database } from "./model";
import * as async from 'async';
import { dbConn } from "../../../config/connect";

export class DataBaseController {

    public Database = new Database();

    
    async onCreateDataBaseAdmin(db: any, cb: any) {
        console.log('Criou Database Admin');
        await db.model("Database").find((err: any, data: any) => {
            if (data.length < 1) {
                db.model("Database").create({
                    name: "Administrador",
                    cpf: "000000000-00",
                    database: "administracao",
                    acessos: Array({
                        nome: "admin",
                        email: "admin@email.com.br",
                        senha: "admin123",
                    })
                })
            }
            cb((data.length > 0) ? true : false)
        })
    }

    async registraConta(req: any, res: any) {
        console.log('Chegou no controller!');
        async.waterfall([
            (done) => {
                console.log(req.body)
                dbConn('projetoWeb').model("Database").create(req.body, 
                    () => done());
                console.log('Criou registro do usuário!');
            }
        ], (err: any) => {
            if (err) {
                console.log(err);
            }
            console.log('Conta criada com sucesso!');
            return res.status(200).json({ msg: 'Conta criada com sucesso!' })
        })
    }
}