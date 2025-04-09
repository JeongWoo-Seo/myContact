import express from 'express';
import contractsRoutes from './routes/contactsRoutes.js';
import methodOverRide from 'method-override'

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('./public'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverRide('_method'));

app.use('/',contractsRoutes);

app.listen(3000,() => {
    console.log("server start");
})