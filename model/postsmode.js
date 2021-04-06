const express = require('express')
const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    auth:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('blog',postSchema)