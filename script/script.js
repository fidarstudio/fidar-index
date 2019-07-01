// // VARS
const cornerDots = document.querySelectorAll('.dot');
const menuBtn = document.querySelector('#menu-btn');
const dots = document.querySelectorAll('.page-number-section');
const callUs = document.querySelector('#call-us');
const callUsModal = document.querySelector('#call-us-modal');
const menuModal = document.querySelector('#menu-modal');
const xBtns = document.querySelectorAll('.x-btn');
const mountModal = document.querySelector('#mount-modal');

// // FUNCTIONAL VARS:
let activeId = 1;
let menuIsOn = false;

// EVENT LISTENERS
menuBtn.addEventListener('click', openMenuModal);
callUs.addEventListener('click', showCallUs);
for(let x of xBtns) {
  x.addEventListener('click', close);
}
for(let dot of cornerDots) {
  dot.addEventListener('click', showMount);
}

// FUNCTIONS
function whereIsActive() {
  // console.log(dots);
}

function openMenuModal() {
  menuModal.classList.add('menu-modal-on');
  menuModal.classList.remove('menu-modal-off-a');
  menuModal.classList.remove('menu-modal-off-d');
}

function close() {
  menuModal.classList.add('menu-modal-off-a');
  menuModal.classList.remove('menu-modal-on');
  mountModal.classList.add('mount-off-a');
  mountModal.classList.remove('mount-on');
  callUsModal.classList.add('call-us-off-a');
  callUsModal.classList.remove('call-us-on');
  setTimeout(() => {
    menuModal.classList.add('menu-modal-off-d');
    mountModal.classList.add('mount-off-d');
    callUsModal.classList.add('call-us-off-d');
},500);
}

function showMount() {
  mountModal.classList.add('mount-on');
  mountModal.classList.remove('mount-off-d');
  mountModal.classList.remove('mount-off-a');
}

function showCallUs() {
  callUsModal.classList.add('call-us-on');
  callUsModal.classList.remove('call-us-off-a');
  callUsModal.classList.remove('call-us-off-d');
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

setTimeout(() =>{
  document.querySelector('#section-' + activeId).classList.remove('deactive-section');
  document.querySelector('#section-' + activeId).classList.add('active-section');
}, 2000);

// COMMENTS
// add overflow hidden to body when modal is open
// width font size and height: vh vw