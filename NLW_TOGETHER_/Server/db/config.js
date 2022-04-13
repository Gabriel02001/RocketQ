const sqlite3 = require("sqlite3")
const { open } = require("sqlite")

module.exports = () => 
    open({  // abre a conexão com o banco de dados
      filename: 'Server/db/rocketq.sqlite',  // caminho do banco de dados
      driver: sqlite3.Database,  // 
    })
