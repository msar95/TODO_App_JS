let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("clicked btn");

    formValidation();
})

let formValidation = () => {
    if (input.value === "") {
        msg.innerHTML = "To-Do darf nicht leer sein";
    } else {
        msg.innerHTML = "";
    }
};