import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import routes from './routes/soccerRoutes';

const app = express();
const PORT = 3000;

// mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/soccerDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// bodyparser setup
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

// register routes
routes(app);

app.get('/', (req, res) => 
  res.send(`Our soccer application is running on port ${PORT}.`)
);

app.listen(PORT, () =>
  console.log(`Your soccer server is running on port ${PORT}.`)
);