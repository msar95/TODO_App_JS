let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("clicked btn");

    formValidation();

});

let validateToDo = (data) => {
    const regex = /[a-zA-Z0-9]{3,}/;
    const check = (regex.test(data)) ?  false : true;
    return check;
};

let formValidation = () => {
    
    if (input.value === "") {
        msg.innerHTML = "To-Do input cannot be empty";
    } else if (validateToDo(input.value)) {
        msg.innerHTML = "To-Do is not accepted"
    } else {
        msg.innerHTML = "";
        acceptData();
        createPostHTML();
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
            <i onClick="editPost(this)" class="fas fa-edit"></i>
            <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
        </span>
    </div>`
    posts.innerHTML += boilerPlate;
    input.value = "";
}

let deletePost = (e) => {
    e.parentElement.parentElement.remove();
}

let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}