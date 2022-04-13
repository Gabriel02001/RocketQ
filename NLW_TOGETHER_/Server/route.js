const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')


const route = express.Router()

// direcionamento das paginas iniciais 
route.get('/', (req,res) => res.render("index", {page: 'enter-room'}))
route.get('/create-pass', (req,res)=> res.render("index", {page: 'create-pass'}))

// room
route.post('/create-room', RoomController.create)  // 
route.get('/room/:room', RoomController.open) // recupera as perguntas do banco de dados
route.post('/enterroom', RoomController.enter)

// questions
//question form  textarea
 route.post('/question/create/:room', QuestionController.create)
// Formato que o formulario de dentro da MODAL tem que passar a informação - //route.post('/question/:room/:question/:action')
route.post('/question/:room/:question/:action', QuestionController.index) // implicitamente o index está recebendo req e res 


module.exports = route