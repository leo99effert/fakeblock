import mongoose from 'mongoose';

global.mongoose = {
  conn: null,
  promise: null
}

export async function dbConnect(){
  if(global.mongoose && global.mongoose.conn){
    console.log('already connected to db');
    return global.mongoose.conn;
  } else {
    const conString = process.env.MONGO_URI;
    const promise = mongoose.connect(conString, {
      autoIndex: true
    });
    global.mongoose = {
      conn: await promise,
      promise
    };
    console.log('connected to db');
    return await promise;
  }
}