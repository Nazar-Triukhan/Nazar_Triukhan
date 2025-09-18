// Перемикання між Hard / Tools / Soft
const btnSwitches = document.querySelectorAll('.btn-switch');
const skillLists = document.querySelectorAll('.about__list');

btnSwitches.forEach(btn => {
  btn.addEventListener('click', () => {
    // Активна кнопка
    btnSwitches.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Показати відповідний список
    const target = btn.dataset.target;
    skillLists.forEach(list => {
      if(list.id === target){
        list.classList.add('active');
      } else {
        list.classList.remove('active');
      }
    });
  });
});
