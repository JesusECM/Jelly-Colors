const openModal = document.querySelector('.btn_mision');
const Modal = document.querySelector('.modal_mision');
const closeModal = document.querySelector('.modal_close');

openModal.addEventListener('click', (e)=>{
	e.preventDefault();
	Modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e)=>{
	e.preventDefault();
	Modal.classList.remove('modal--show');
});

const openModal2 = document.querySelector('.btn_vision');
const Modal2 = document.querySelector('.modal_vision');
const closeModal2 = document.querySelector('.modal_close2');

openModal2.addEventListener('click', (e)=>{
	e.preventDefault();
	Modal2.classList.add('modal--show');
});

closeModal2.addEventListener('click', (e)=>{
	e.preventDefault();
	Modal2.classList.remove('modal--show');
});

const openModal3 = document.querySelector('.btn_gansito');
const Modal3 = document.querySelector('.modal_gansito');
const closeModal3 = document.querySelector('.modal_close3');

openModal3.addEventListener('click', (e)=>{
	e.preventDefault();
	Modal3.classList.add('modal--show');
});

closeModal3.addEventListener('click', (e)=>{
	e.preventDefault();
	Modal3.classList.remove('modal--show');
});

const openModal4 = document.querySelector('.btn_mazapan');
const Modal4 = document.querySelector('.modal_mazapan');
const closeModal4 = document.querySelector('.modal_close4');

openModal4.addEventListener('click', (e)=>{
	e.preventDefault();
	Modal4.classList.add('modal--show');
});

closeModal4.addEventListener('click', (e)=>{
	e.preventDefault();
	Modal4.classList.remove('modal--show');
});