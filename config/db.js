const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://Srujana_x7:Blue-hat004@in-aws.80dcf.mongodb.net/cw?retryWrites=true&w=majority&appName=In-AWS")
const connection = mongoose.connection;

connection.on('connected', () => (console.log("DB Connected")))
connection.on('error', () => (console.log("DB Error")))

module.exports = mongoose

// const db = require('./config/db')