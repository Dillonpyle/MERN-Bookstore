import dotenv from 'dotenv';
dotenv.config();

export const PORT = 5555;


export const mongoDBURL = `mongodb+srv://root:${process.env.MONGO_DB_PASSWORD}@mern-bookstore.14cdo.mongodb.net/?retryWrites=true&w=majority&appName=MERN-BOOKSTORE`