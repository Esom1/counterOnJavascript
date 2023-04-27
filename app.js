// const header = document.querySelector('h2')
// header.innerText = 'christy'
// document.body.style.backgroundColor = 'green';

// let btn = document.querySelector('.dec');
// let heading = document.querySelector('h2');

// function changeColor(){
//   let withClass = heading.classList.contains('red')
//   console.log(withClass);
//   withClass ? heading.classList.remove('red') : heading.classList.add('red')
// }
// btn.addEventListener('click',changeColor)

// selecting the elements
let head = document.querySelector('h2')
let res = document.querySelector('.res')
let inc = document.querySelector('.inc')
let dec = document.querySelector('.dec')
let headingTag = 0

function decrease(){
  // head.innerText--
  headingTag--
  head.innerText = headingTag
  if( head.innerText < 0){
    document.body.style.backgroundColor = 'red';
  }

}dec.addEventListener('click',decrease)

function increase(){
  headingTag++
  head.innerText = headingTag
  if( head.innerText > 0){
    document.body.style.backgroundColor = 'green';
  }
 
}inc.addEventListener('click',increase)

function reset(){
  headingTag = 0
  head.innerText = headingTag
    document.body.style.backgroundColor = 'yellow';
 
}res.addEventListener('click',reset)




