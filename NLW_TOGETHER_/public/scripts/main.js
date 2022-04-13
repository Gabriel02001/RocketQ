import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

// pegar todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach( button => {
    button.addEventListener("click", handleClick)
})

const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false))
    
})

function handleClick(event, check = true){
  event.preventDefault()
  const text = check ? "Marcar como lida" : "Excluir"
  const slug = check ? "check" : "delete"

  const roomid = document.querySelector("#room-id").dataset.id
  const questionId = event.target.dataset.id
 
  // infors form modal
  const form = document.querySelector(".modal form")
  form.setAttribute("action", `/question/${roomid}/${questionId}/${slug}`)

  modalTitle.innerHTML = `${text} esta pergunta`
  modalDescription.innerHTML = `Tem certeza que deseja ${text.toLocaleLowerCase()} esta pergunta`
  modalButton.innerHTML = `Sim, ${text.toLocaleLowerCase()}`
  check ? modalButton.classList.remove("red") : modalButton.classList.add("red")
  // abrir modal
  modal.open()
}





//////// sem handle function 

// // pegar todos os botões que existe com a classe check
// const checkButtons = document.querySelectorAll(".actions a.check")

// checkButtons.forEach( button => {
//     // adicionar a escuta 
//     button.addEventListener("click", event => {
        
//         modalTitle.innerHTML = "Marcar como lida"

//         //Abrir modal
//         modal.open()
        
//     })
// })

// const deleteButton = document.querySelectorAll(".actions a.delete")

// deleteButton.forEach(button => {
//     button.addEventListener("click", event =>{
//     modalTitle.innerHTML = "Excluir essa pergunta"
//     modal.open()
//     })
    
// })
