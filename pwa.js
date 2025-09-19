if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js')
    .then(() => console.log('Service Worker зареєстрований'))
    .catch((err) => console.log('Service Worker не зареєстрований', err));
}

// кнопка встановлення PWA
const installBtn = document.createElement('button');
installBtn.textContent = 'Встановити додаток';
installBtn.style.position = 'fixed';
installBtn.style.bottom = '20px';
installBtn.style.right = '20px';
installBtn.style.display = 'none';
installBtn.style.padding = '10px 20px';
installBtn.style.background = '#317EFB';
installBtn.style.color = '#fff';
installBtn.style.border = 'none';
installBtn.style.borderRadius = '8px';
installBtn.style.cursor = 'pointer';
installBtn.style.zIndex = '9999';
document.body.appendChild(installBtn);

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.style.display = 'block';
});

installBtn.addEventListener('click', async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  const choice = await deferredPrompt.userChoice;
  console.log('Вибір користувача:', choice.outcome);
  deferredPrompt = null;
  installBtn.style.display = 'none';
});
