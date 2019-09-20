import { createConnection } from 'mongoose';
import { config } from './index'
const db = config.mongo.uri, options = config.mongo.options;

export const dbConn = function(dbName: any): any {

    createConnection(db + dbName, options);
}