import express, { request, response } from "express";
import dotenv from 'dotenv';
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';



const app =  express();

//Middleware for parsing request body
app.use(express.json());

//Middleware for handling CORS policy
app.use(cors());
//Second option for cors
//app.use(
//    cors({
//        origin: 'http://localhost:3000',
//        methods: ['GET', 'POST', 'Put', 'DELETE'],
//        allowedHeaders: ['Content-Type']
//    })
//);

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Welome to MERN Stack')
});

app.use('/books', booksRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to data base');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });