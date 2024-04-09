function showModal() {
    var element = document.getElementById("modal");
    element.classList.add("show-modal");
  }
  
  function closeModal() {
    var element = document.getElementById("modal");
    element.classList.remove("show-modal");
  }
  
  const loginText = document.querySelector(".title-text .login");
  const loginForm = document.querySelector("form.login");
  const loginBtn = document.querySelector("label.login");
  const signupBtn = document.querySelector("label.signup");
  const signupLink = document.querySelector("form .signup-link a");
  
  // Funcionalidades relacionadas à alternância entre formulários de login e cadastro
  signupBtn.onclick = () => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
  };
  
  loginBtn.onclick = () => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
  };
  
  signupLink.onclick = () => {
    signupBtn.click(); // Simula um clique no botão de inscrição
    return false; // Impede o comportamento padrão de seguir o link
};