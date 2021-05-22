const inputs = document.querySelectorAll('.form-control input');
const labels = document.querySelectorAll('.form-control label');
var modal = document.querySelector('.modal');
var modalButton = document.getElementById('modal-button');
var modalClose = document.querySelector('.modal-close');
var modalCancel = document.querySelector('#cancel');
var modalDelete = document.querySelector('#delete');

//Handling input animation
labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split('')
    .map(
      (letter, idx) => `<span style="
				transition-delay: ${idx * 50}ms
			">${letter}</span>`
    )
    .join('');
});

//Handling modal functionality
modalButton.onclick = function () {
  modal.style.display = 'flex';
};

modalClose.onclick = function () {
  modal.style.display = 'none';
};

modalCancel.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
