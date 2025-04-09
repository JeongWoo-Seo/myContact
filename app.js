import express from 'express';
import contractsRoutes from './routes/contactsRoutes.js';

const app = express();


app.use('/',contractsRoutes);

app.listen(3000,() => {
    console.log("server start");
})