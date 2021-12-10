/* eslint-disable no-undef */
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');
const userGeneral = require('./routes/general');
// const userServerData = require('./routes/server_data');

mongoose.set('useCreateIndex', true);
// mongoose.connect('mongodb+srv://user-01:pass1@clustertestocc.evqsk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
mongoose.connect('mongodb+srv://UserNameTest1:Pass1@clustertest.gdc2q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);
app.use('/api/travian/', userGeneral);
// app.use('/api/server/', userServerData);


const userServerData = require('./routes/server_data');
app.use('/api/server/', userServerData);

// const userServerData = require('./routes/server_data');
// app.use('/sql/data/', userServerData);

// const userServerDatats3 = require('./routes/server_data_ts3');
// app.use('/api/server/ts3.travian.com/', userServerDatats3);

module.exports = app;