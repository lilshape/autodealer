const loginForm = document.getElementById("loginForm");
const errorDiv = document.getElementById("error");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Предотвращаем стандартную отправку формы

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Имитация проверки данных в базе данных
  // В реальной ситуации вам нужно взаимодействовать с базой данных
  const users = {
    "user1": "pass1",
    "user2": "pass2"
  };

  if (users[username] === password) {
    // Успешная авторизация
    errorDiv.textContent = "Авторизация успешна!";
    errorDiv.style.color = "green";
    // Перенаправление на главную страницу или другую защищенную страницу
    window.location.href = "home.html";
  } else {
    // Ошибка авторизации
    errorDiv.textContent = "Неверные имя пользователя или пароль.";
    errorDiv.style.color = "red";
  }
});