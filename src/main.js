let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("clicked btn");

    formValidation();
    acceptData();
    createPostHTML();
})

let formValidation = () => {
    if (input.value === "") {
        msg.innerHTML = "To-Do input cannot be empty";
    } else {
        msg.innerHTML = "";
    }
};

let data = {};

let acceptData = () => {
    data["text"] = input.value;
    console.log(data)
}

let createPostHTML = () => {
    const boilerPlate = 
    `<div>
        <p>${data.text}</p>
        <span class="options">
            <i class="fas fa-edit"></i>
            <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
        </span>
    </div>`
    posts.innerHTML += boilerPlate;
    input.value = "";
}

let deletePost = (e) => {
    e.parentElement.parentElement.remove();
}