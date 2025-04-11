import express from 'express';
import methodOverRide from 'method-override'
import cookieParser from 'cookie-parser';
import dbConnect from './config/dbConnect.js';
import loginRoutes from './routes/loginRoutes.js';
import contractsRoutes from './routes/contactsRoutes.js';

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('./public'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverRide('_method'));

app.use(cookieParser());

app.use('/contacts',contractsRoutes);
app.use('/', loginRoutes);

dbConnect();

app.listen(3000,() => {
    console.log("server start");
})