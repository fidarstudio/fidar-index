// // VARS
const dots = document.querySelectorAll('.page-number-section');

// // FUNCTIONAL VARS:
let activeId = 1;

document.addEventListener('scroll', (event) => {
  // console.log(event.type)
});

function whereIsActive() {
  // console.log(dots);
}

// // FUNCTIONS TO RUNB ON PAGE LOAD:
whereIsActive(1);

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