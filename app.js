import express from 'express'
import dotenv from 'dotenv';
dotenv.config();
import morgan from 'morgan';
import cors from 'cors';
import user  from './routes/user.js';
import * as database from './db/database.js'
const app = express();

//DB connection setup 
database.initialize();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/user', user);

const port = 3000;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});

export default app
