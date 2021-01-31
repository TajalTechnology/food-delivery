// Project Name:Book
// Developer Name:Md Tajal Islam
// Start Date:23/01/2021
// End Date:


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~project setup~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const env = require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// database configurations
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


// customize routers
const indexRouter = require('./routes/index')
const orderRouter = require('./routes/orders')
const menuRouter = require('./routes/menus')
const userRouter = require('./routes/users')


// end-point roots
app.use('/', indexRouter)
app.use('/api', orderRouter)
app.use('/api', menuRouter)
app.use('/api', userRouter)


// port
app.listen(process.env.PORT || 3005)