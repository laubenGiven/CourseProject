const mongoose  = require('mongoose');
const express = require('express');
require('dotenv').config();

const Port = process.env.PORT;

const mongoConn = process.env.Mongo_url;

mongoose.connect(mongoConn,{useNewUrlparser:true,useUnifiedToplogy:true});

mongoose.connection.on('error', err=>{
    console.log(err);
})

mongoose.connection.on('connected',res=>{
    console.log('database connected successfully!');
})
