const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');
const wrapper = document.getElementById('wrapper');

openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  wrapper.style.position = 'fixed';
}

function closeModal(modal) {
  if (modal == null) return;
  $('.yt-iframe').each(function(){
    this.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
  });
  
  modal.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
  const scrollY = wrapper.style.top;
  wrapper.style.position = '';
  wrapper.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
}
