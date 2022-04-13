export default function Modal(){

  const modalWrapper = document.querySelector('.modal-wrapper')
  const cancelButton = document.querySelector('.button.cancel')

  cancelButton.addEventListener("click", close)

   //funcionadalidade de atribuir a classe active para a modal
   function open(){
   document.querySelector('.modal-wrapper').classList.add("active")
   } 
   // funcionalidade de remover a classe active da modal
   function close(){
    document.querySelector('.modal-wrapper').classList.remove("active")
   }

   return{
      open,
      close
   }

}





// function Modal(){
//    const $modal =  document.querySelector(".modal-wrapper")
//    $modal.classList.toggle('active')
// }

// document.querySelectorAll('.delete').addEventListener('click', Modal )
// document.querySelector('.button.grey').addEventListener('click', Modal )