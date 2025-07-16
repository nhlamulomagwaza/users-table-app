require('dotenv').config(); //I'm basically importing the .env file
const express = require('express'); //I'm using the express framework instead of the default http from node
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000; //Will either get the port from the .env file or will use port 3000
const corsOptions = require('./config/corsOptions')

const routes= require('./routes/routes');
const authenticationMiddleWare= require('./config/authenticateMiddleware');
/* MIDDLEWARES */
app.use(cors(corsOptions)); 
app.use(express.json());

//ROUTES

app.use('/api/users', authenticationMiddleWare, routes);






app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});