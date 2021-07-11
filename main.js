const input = document.querySelector("input");
const message = document.querySelector(".message");
const passwords = ["JeDen", "bLYATYful", "rEEEEeeeE"];
const answers = ["dwa", "vodka", "REEEEEEEEEEEEE"];

input.addEventListener('input', function(e) {
    const value = e.target.value.toLowerCase();
    message.textContent = "";
    passwords.forEach((pass, i) =>{
        if (value === pass.toLowerCase()) {
            message.textContent = answers[i];
            input.value = "";
        }

    })
})