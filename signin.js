const signinButton = document.getElementById("sign-in-button");
const modal = document.querySelector("modal");
const overlay = modal.querySelector("md_overlay");
const closeButton = modal.querySelector("X-button");

const openModal = () => {
    modal.classList.remove('hidden');
  }
  
  const closeModal = () => {
    modal.classList.add('hidden');
  }
  signinButton.addEventListener('click', openModal);
  //onModal
  
  closeButton.addEventListener('click', closeModal);
  //모달창 내부의 닫기 버튼
  
  overlay.addEventListener('click', closeModal);


