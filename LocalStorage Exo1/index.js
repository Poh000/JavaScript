const inscr = document.getElementById("inscription");

inscr.addEventListener("submit", function (event) {
    event.preventDefault();
    const login = document.getElementById("login2").value;
    const mdp = document.getElementById("mdp2").value;
    localStorage.setItem("login", login);
    localStorage.setItem("password", mdp);
    alert("Inscription réussie");
});

const connex = document.getElementById("connexion");

connex.addEventListener("submit", function (event) {
    event.preventDefault();
    const login = document.getElementById("login").value;
    const mdp = document.getElementById("mdp").value;
    const localLogin = localStorage.getItem("login");
    const localMdp = localStorage.getItem("password");
    if (login !== localLogin) {
        alert("Mauvais login");
    } else if (mdp !== localMdp) {
        alert("Mauvais mot de passe");
    } else {
        document.querySelector("h2").style.display = "block";
    }
})
