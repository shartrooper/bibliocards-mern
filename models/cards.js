/* eslint-disable no-undef */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Biblio card Schema
const cardSchema= new Schema({
	title: {type:String, required: true},
	author:  {type:String, required: true},
	genre: {type:String, required: true},
	avatar: Buffer,
	created:{ type: Date, default: Date.now },
	release: {type: String}
});

//Card's model

const Card= mongoose.model('card',cardSchema);

module.exports= Card;