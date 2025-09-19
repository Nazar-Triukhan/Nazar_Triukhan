// Реєстрація Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js')
    .then(() => console.log('Service Worker зареєстрований'))
    .catch((err) => console.log('Service Worker не зареєстрований', err));
}

// Створюємо кнопку "Встановити додаток"
const installBtn = document.createElement('button');
installBtn.textContent = 'Встановити додаток';
installBtn.style.position = 'fixed';
installBtn.style.bottom = '20px';
installBtn.style.right = '20px';
installBtn.style.display = 'none'; // спочатку ховаємо
installBtn.style.padding = '10px 20px';
installBtn.style.background = '#317EFB';
installBtn.style.color = '#fff';
installBtn.style.border = 'none';
installBtn.style.borderRadius = '8px';
installBtn.style.cursor = 'pointer';
installBtn.style.zIndex = '9999';
document.body.appendChild(installBtn);

let deferredPrompt;

// Подія браузера перед встановленням PWA
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault(); // блокуємо автоматичне спливаюче вікно
  deferredPrompt = e;
  installBtn.style.display = 'block'; // показуємо кнопку
});

// Обробка кліку на кнопку
installBtn.addEventListener('click', async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt(); // показуємо діалог встановлення
  const choice = await deferredPrompt.userChoice;
  console.log('Вибір користувача:', choice.outcome);
  deferredPrompt = null;
  installBtn.style.display = 'none'; // ховаємо кнопку після встановлення
});
// service-worker.js

// Встановлення Service Worker
self.addEventListener('install', (event) => {
  console.log('Service Worker встановлено');
});

// Перехоплення запитів і відповіді (fetch)
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
