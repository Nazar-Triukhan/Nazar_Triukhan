  const form = document.querySelector(".register__form");
  const nameInput = document.querySelector('input[type="text"]');
  const emailInput = document.querySelector('#email');
  const messageInput = document.querySelector('textarea');
  const sendBtn = document.querySelector(".register__btn");

  // твої дані
  const BOT_TOKEN = "8424685966:AAETjOVGmP58MQfWv5xkUONx4Vu56YbvSvs";
  const CHAT_ID = "1519562594";
  const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  sendBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // Перевірка імені
    if (name.length < 3) {
      alert("Ім'я має містити мінімум 3 символи!");
      return;
    }

    // Перевірка email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Введіть коректний email!");
      return;
    }

    // Перевірка повідомлення
    if (message.length < 5) {
      alert("Повідомлення має містити мінімум 5 символів!");
      return;
    }

    // Формуємо текст для Telegram
    const text = `📩 Нова заявка з форми:\n\n👤 Ім'я: ${name}\n📧 Email: ${email}\n💬 Повідомлення: ${message}`;

    // Відправка через fetch
    fetch(TELEGRAM_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text,
      }),
    })
      .then((res) => {
        if (res.ok) {
          alert("Повідомлення успішно надіслано ✅");
          form.reset();
        } else {
          alert("Помилка при відправленні ❌");
        }
      })
      .catch((err) => {
        alert("Сталася помилка: " + err);
      });
  });

