const shareActiveState=document.querySelector('.share-active-state');
const shareBtn=document.querySelector('.share-btn');
shareBtn.addEventListener('click', ()=>{
    shareActiveState.classList.toggle('show')
    shareBtn.classList.toggle('btn-active')
})