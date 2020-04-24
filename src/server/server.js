let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
let database = require('./database/db');


const userRoute = require('../server/routes/user.routes')
const eventRoute = require('../server/routes/event.routes')


const connectionString = 'mongodb://shafinr:Pj8cAO8d9DJJQ8io@cluster0-shard-00-00-xljxs.mongodb.net:27017,cluster0-shard-00-01-xljxs.mongodb.net:27017,cluster0-shard-00-02-xljxs.mongodb.net:27017/ChatApp?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority';

mongoose
  .connect(connectionString, { useNewUrlParser: true } )
  .then( () => {console.log("Mongoose connected Successfully");},
  error => {console.log("Mongoose could not be connected to database: " + error);}
  );

mongoose.Promise = global.Promise;
mongoose.connect(database.db, {
    useNewUrlParser: true
}).then(() => {
    console.log('Database connected sucessfully !')
},
    error => {
        console.log('Database could not be connected : ' + error)
    }
)

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.use('/messages', userRoute) //changed 'users' to 'messages'
app.use('/events', eventRoute)


const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})

// Error Handling
app.use((req, res, next) => {
    next(createError(404));
});

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});