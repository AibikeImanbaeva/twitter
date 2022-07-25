let API = 'http://localhost:8000';
let btn_twit = document.querySelector('#btn_twit');
let modal_nav = document.querySelector('#modal_nav')
let btn_close =  document.querySelector('.btn_close')
let btn_edit = document.querySelector('.btn_edit')


btn_twit.addEventListener('click', ()=> {
    modal_nav.style.display = 'block'
})


btn_close.addEventListener('click',() => 
    {
        modal_nav.style.display = 'none'
    }
)





// twit();
// list.innerHTML = "";


// document.addEventListener('click', (e)=> {
//     if (e.target.classList.contains('btn-twit')){
//         let newElem = document.createElement("div");
//         newElem.innerHTML = `<div class="modal" tabindex="-1">
//         <div class="modal-dialog">
//           <div class="modal-content">
//             <div class="modal-header">
//               <h5 class="modal-title">Добавить твит</h5>
//               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
//             </div>
//             <div class="modal-body">
//               <p>Что у вас происходит?</p>
//             </div>
//             <div class="modal-footer">
//               <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
//               <button type="button" class="btn btn-primary">Твинуть</button>
//             </div>
//           </div>
//         </div>
//       </div>`;
//         list.append(newElem);
//         twit()
  
//     }
//   })



