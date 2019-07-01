// // VARS
const menuBtn = document.querySelector('#menu-btn');
const dots = document.querySelectorAll('.page-number-section');
const menuModal = document.querySelector('#menu-modal');
const menuModalXbtn = document.querySelector('#menu-modal-x-btn');

// // FUNCTIONAL VARS:
let activeId = 1;
menuIsOn = false;

// EVENT LISTENERS
menuBtn.addEventListener('click', openMenuModal);
menuModalXbtn.addEventListener('click', closeMenuModal);

// FUNCTIONS
function whereIsActive() {
  // console.log(dots);
}

function openMenuModal() {
  menuModal.classList.add('menu-modal-open');
  menuModal.classList.remove('menu-modal-close-a');
  menuModal.classList.remove('menu-modal-close-d');
}

function closeMenuModal() {
  menuModal.classList.add('menu-modal-close-a');
  menuModal.classList.remove('menu-modal-open');
  setTimeout(() => {
    menuModal.classList.add('menu-modal-close-d');
  },500);
}

// FUNCTIONS TO RUNB ON PAGE LOAD:
whereIsActive(1);

// TEMP
const hamid = 'hamid';

document.addEventListener('scroll', (event) => {
  // console.log(event.type)
});

$('.pagenav a').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();
    console.log('ha,mid')

    const hash = this.hash;

    $('html, body')
      .animate({
        scrollTop: $(hash).offset().top
      },3000);
  }
});

// COMMENTS
// add overflow hidden to body when modal is open
// width font size and height: vh vw