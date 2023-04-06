import mysql from 'promise-mysql';
import config from '../config';

const dbSettings ={
    host:config.HOST,
    database:config.DATABASE,
    user:config.USER,
    password:config.PASSWORD
};

export const getConnection = async() => {
    try {
        const connection = await mysql.createConnection(dbSettings);
        return connection;
    } catch (error) {
        console.error(error);
    }
}