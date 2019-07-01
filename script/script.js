// // VARS
const dots = document.querySelectorAll('.page-number-section');

const menuModalXbtn = document.querySelector('#menu-modal-x-btn');

// // FUNCTIONAL VARS:
let activeId = 1;
menuIsOn = false;

// EVENT LISTENERS
menuModalXbtn.addEventListener('click', closeMenuModal);

// FUNCTIONS
function whereIsActive() {
  // console.log(dots);
}

function closeMenuModal() {
  console.log(hamid);

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