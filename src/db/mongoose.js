
//const mongoose = require('mongoose');
import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://iosramzi:ys6BkMJFwqIXvA32@firstapi.mwmdsbo.mongodb.net/?retryWrites=true&w=majority', {
    //useNewUrlParser: true,
    //useCreateIndex: true,
   // useFinAndModify: false
   useNewUrlParser: true, useUnifiedTopology: true, 
   
  // useCreateIndex: true,
    //useFindAndModify: false
    //ys6BkMJFwqIXvA32 
});

