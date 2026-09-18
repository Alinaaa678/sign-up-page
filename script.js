const form = document.getElementById("registration-form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

// 提交时校验所有字段
form.addEventListener("submit", function (e) {
  e.preventDefault(); // 阻止表单默认提交刷新页面

  let valid = true;

  if (username.value.trim().length < 3) {
    showError(username, "Username must be at least 3 characters");
    valid = false;
  } else {
    showSuccess(username);
  }

  if (!isValidEmail(email.value.trim())) {
    showError(email, "Please enter a valid email");
    valid = false;
  } else {
    showSuccess(email);
  }

  if (password.value.length < 6) {
    showError(password, "Password must be at least 6 characters");
    valid = false;
  } else {
    showSuccess(password);
  }

  if (confirmPassword.value !== password.value || confirmPassword.value === "") {
    showError(confirmPassword, "Passwords do not match");
    valid = false;
  } else {
    showSuccess(confirmPassword);
  }

  if (valid) {
    alert("Register successfully! 🎉");
    form.reset();
    // 成功后清除所有颜色状态
    document.querySelectorAll(".form-group").forEach(function (group) {
      group.classList.remove("success", "error");
    });
  }
});

// 输入时实时重新校验，纠正后红框立刻消失
[username, email, password, confirmPassword].forEach(function (input) {
  input.addEventListener("input", function () {
    input.closest(".form-group").classList.remove("error", "success");
  });
});

function showError(input, message) {
  const group = input.closest(".form-group");
  group.classList.add("error");
  group.classList.remove("success");
  group.querySelector("small").innerText = message;
}

function showSuccess(input) {
  const group = input.closest(".form-group");
  group.classList.add("success");
  group.classList.remove("error");
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
