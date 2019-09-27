import { createConnection } from 'mongoose';
import { config } from './index'
const db = config.mongo.uri, options = config.mongo.options;
let connection: any;

export const dbConn = function(dbName: any) {
    
    connection = createConnection(db + dbName, options);
    console.log('chegou na conexão');
    return connection;

    // if(connection[dbName]) {
    //     return connection[dbName];
    // } else {
    // }
}