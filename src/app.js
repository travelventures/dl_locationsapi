import 'dotenv/config';
import cors from 'cors';
import express from 'express';

//import models from './models';
import routes from './routes';

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use('/getAllLocations', routes.getAllLocations)
app.use('/location', routes.location)
app.use('/getAllDataByCountry', routes.getALlDataByCountry)

// server start
app.listen(process.env.PORT, () =>
  console.log("deine-Landschaft locations API"),
  console.log(""),
  console.log(`Server listening on: http://localhost:${process.env.PORT}`),
);