import 'dotenv/config';
import cors from 'cors';
import express from 'express';

//import models from './models';
import routes from './routes';

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//app.use((req, res, next) => {
//  req.context = {
//    models,
//    me: models.users[1],
//  };
//  next();
//});

// API ROUTES //

app.use('/locations', routes.locations)

// SERVER START //

app.listen(process.env.PORT, () =>
  console.log("deine-Landschaft"),
  console.log(""),
  console.log(`Server listening on: http://localhost:${process.env.PORT}`),
);