document.getElementById("year").textContent = new Date().getFullYear();

function sendLead(e){
  e.preventDefault();
  document.getElementById("ok").hidden = false;

  // Тут можна підключити Telegram bot / email
  // Поки що просто показуємо "успішно"
  return false;
}
