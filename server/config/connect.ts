import { createConnection } from 'mongoose';
import { config } from './index'
const db = config.mongo.uri, options = config.mongo.options;
const connection = {};

export const dbConn = function(dbName: any) {

    if(connection[dbName]) {
        return connection[dbName];
    } else {
        connection[dbName] = createConnection(db + dbName, options);
        return connection[dbName];
    }
}