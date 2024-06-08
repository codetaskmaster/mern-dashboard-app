import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import mongoose from 'mongoose';
import morgan from 'morgan';

import clientRoute from './routes/client.js';
import generalRoute from './routes/general.js';
import managementRoute from './routes/management.js';
import salesRoute from './routes/sales.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* Routes */
app.use('/client', clientRoute);
app.use('/general', generalRoute);
app.use('/management', managementRoute);
app.use('/sales', salesRoute);

const PORT = process.env.PORT;

const dbConn = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
  } catch (error) {
    console.log(error);
  }
};

dbConn();

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
