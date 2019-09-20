import { Response } from 'express';

export class Utils {
    sendResponse(err, result, res: Response, status?) {
        if (res.headersSent) {
            console.log('Ja enviou a resposta!');
            return;
        }
        if (err) {
            console.log(err);
            return res.status((status ? status : 500)).send(err);
        }
        return res.status((status ? status : 200)).json(result);
    }
} 

export const utils = new Utils