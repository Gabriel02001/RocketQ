const express = require('express')
const route = require('./route')
const path = require('path')

const server = express()   // parentes incia o express / obs: se não iniciar o express ou seja 
                            // o createhttpserver por baixo dos panos e tentar rodar o projeto 
                             // dárá erro de não definido
server.set('view engine', 'ejs')
server.set('views', path.join(__dirname, 'views'))                                  // a gente precisa passar o caminho que a view está,pois o ejs não consegue encotrar ela 
server.use(express.static("public"))

server.use(express.urlencoded({extended: true}))  // middle precisa ser configurado antes da rota, pois ele é o intermedio 
server.use(route)                                                                  

server.listen(5500, () => console.log("rodando na porta 5500"))  // 