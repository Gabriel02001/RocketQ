const Database = require("../db/config")
module.exports = {
   // form question modal
    async index(req, res){
        const db = await Database()
        const roomId = req.params.room // :room/:question/:action
        const questionId = req.params.question
        const action = req.params.action
        const password = req.body.password

        // Verifica se a senha está correta
        verifyRoom =await db.get(`SELECT * FROM rooms WHERE  id = ${roomId}`)
        if(verifyRoom.pass == password){
           if(action == "delete"){
                 await db.run(`DELETE FROM questions WHERE id = ${questionId}`)
           }
           else if(action == "check"){
                 await db.run(`UPDATE questions SET read = 1 WHERE id = ${questionId}`)
           }
           console.log(`room = ${roomId}, questionId = ${questionId}, action = ${action}, password = ${password}`)
           res.redirect(`/room/${roomId}`)  
        } else{
            res.render('passIncorrect', {roomId: roomId})
        }
        


    },
       
    // form question
    async create(req, res){
         const db = await Database()
         const question = req.body.question
         const roomId = req.params.room // se pega pelo formulario ou pela url n importa, mas facil pela url bo pega
         
         await db.run(`INSERT INTO  questions(
             title,
             room,
             read
         )VALUES(
             "${question}",
             ${roomId},
             0
         )`)

         res.redirect(`/room/${roomId}`)  // o que ele vai redirecionar 
    }

    
}