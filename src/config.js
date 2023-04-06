import { config } from "dotenv";
config();

export default {
    PORT: process.env.PORT || 3001,
    HOST: process.env.HOST || 'localhost',
    USER: process.env.USER || 'root',
    PASSWORD: process.env.PASSWORD || '',
    DATABASE: process.env.DATABASE || 'test'
};