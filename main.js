const button = document.querySelector('.switch');
const body = document.querySelector('body')

button.addEventListener('click', (e)=>{
  body.classList.add('mode');
  console.log('hello archana');
})
