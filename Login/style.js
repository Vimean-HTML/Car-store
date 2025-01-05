const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEvenListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEvenListener('click', () => {
    container.classList.remove("active");
});
