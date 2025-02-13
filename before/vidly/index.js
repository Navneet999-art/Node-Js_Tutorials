const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
const genres = require('./routes/genres');
const customers = require('./routes/customers');
const user= require('./routes/user')
const movies = require('./routes/movies');
const rentals = require('./routes/rentals');
const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost/vidly')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/customers', customers);
app.use('/api/movies', movies);
app.use('/api/rentals', rentals);
app.use('api/users',user);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));







// const Joi = require('joi');
// Joi.objectId = require('joi-objectid')(Joi);
// const mongoose = require('mongoose');
// const genres = require('./routes/genres');
// const customers = require('./routes/customers');
// const user = require('./routes/user');
// const movies = require('./routes/movies');
// const rentals = require('./routes/rentals');
// const express = require('express');
// const Fawn = require('fawn');
// const app = express();

// mongoose.connect('mongodb://localhost/vidly')
//   .then(() => {
//     console.log('Connected to MongoDB...');
//     // Initialize Fawn after successful connection
//     Fawn.init(mongoose);
//   })
//   .catch(err => console.error('Could not connect to MongoDB...', err));

// app.use(express.json());
// app.use('/api/genres', genres);
// app.use('/api/customers', customers);
// app.use('/api/movies', movies);
// app.use('/api/rentals', rentals);
// app.use('/api/users', user);

// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`Listening on port ${port}...`));
