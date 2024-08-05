const url = "https://live.univercity.com.br/lista-de-espera"

document.addEventListener("DOMContentLoaded", function() {
    const a_univercity = document.querySelectorAll(".univercity-url");
    
    for(let i = 0; i < a_univercity.length; i++) {
        a_univercity[i].href = url;
    }
});