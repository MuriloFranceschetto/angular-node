import { Database } from "./model";

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
}