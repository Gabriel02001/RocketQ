const Database = require("../db/config")

module.exports = {
   // cria a sala 
   async create(req, res){
  
   const db = await Database()
   const pass = req.body.password
   let roomId
   let isRoom = true
   
   // laço permanece enquanto o novo roomid gerado for igual a um roomid já existente na base de dados, assim gerando o roomid novamente até atender a condicional
   while(isRoom)
  {
   console.log(isRoom)
   // Gera o numero da sala
   for(var i = 0; i < 6; i++)
    {
    i == 0 ? roomId = Math.floor(Math.random() * 10).toString() :
    roomId += Math.floor(Math.random() * 10).toString()
    }
   // Verifica se esse numero já existe 
   const roomsExistIds = await db.all('SELECT id FROM rooms')
   console.log(roomId)
   console.log(roomsExistIds)
    isRoom = roomsExistIds.some(roomsExistIds => roomsExistIds === roomId)  // return true quando encontrar um id que já existe 
   console.log(isRoom)
   console.log(roomsExistIds)
   if(!isRoom) // atende a condição se o resultado de roomsExistIds for false, significa que o novo id gerado ainda não foi cadastrado no banco
   {
   //isRoom = false
   console.log("dentro do if")
    // Insere a sala no banco
    await db.run(`INSERT INTO rooms (
    id,
    pass
    ) VALUES (
    ${parseInt(roomId)},
    ${pass}
    )`)
    
   }
   
  }

    

     await db.close()


     res.redirect(`/room/${roomId}`)
     
   },

  async open(req, res){
      const db = await Database()
      const roomId = req.params.room

      const verifyQuestions = await db.all(`SELECT * FROM questions WHERE room = ${roomId}`)
      let isEmptyQuestions = !verifyQuestions.length   // 0 false  1  true    !  0 true  1 false

      // busca uma sala especifica no banco de dados e retorna as questions lidas e não lidas
      const questions = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 0`)
      const questionsRead = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 1`)
      console.log(req)
      res.render("room", { roomId: roomId, questions: questions, questionsRead: questionsRead, isEmptyQuestions: isEmptyQuestions })

   },

   enter(req, res){
     const roomId = req.body.roomId
     res.redirect(`/room/${roomId}`)
   }

}