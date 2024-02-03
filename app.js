let inputBox = document.querySelector('#inputBox');
let list = document.querySelector('#List');

inputBox.addEventListener("keyup", (event) => {
    if (event.key == "Enter") {
        addItem(inputBox);
        inputBox.value = "";
    }
});

let addItem = (inputBox) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = `${inputBox.value}<i></i>`;

    listItem.addEventListener("click", () => {
        listItem.classList.toggle('done')
    })

    listItem.querySelector('i').addEventListener("click", () => {
        listItem.remove()
    })

    list.appendChild(listItem);
};
