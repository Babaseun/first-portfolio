function animateFunction() {
 const upArrow = document.querySelector('.arrow-icon-up');
 const downArrow = document.querySelector('.arrow-icon-down');

 upArrow.classList.add('disappear');
 downArrow.classList.remove('disappear');
 setTimeout(() => {
  nextFunction();
 }, 1000);
}

function nextFunction() {
 const upArrow = document.querySelector('.arrow-icon-up');
 const downArrow = document.querySelector('.arrow-icon-down');

 upArrow.classList.remove('disappear');
 downArrow.classList.add('disappear');
}
setInterval(() => {
 animateFunction();
}, 2000);
