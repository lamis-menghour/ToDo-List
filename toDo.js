document.getElementById("addToDo").addEventListener("click",
    function () {
        var inputToDo = prompt("What do you want to add to your ToDo list?");

        var ToDo = document.createElement("div");
        ToDo.classList.add("ToDo");
        
        var createToDo = document.createElement("div");
        createToDo.classList.add("createToDo");

        var checkToDo = document.createElement("div");
        checkToDo.classList.add("checkToDo");

        var checkBoxToDo = document.createElement("input");
        checkBoxToDo.classList.add("checkBoxToDo");
        checkBoxToDo.setAttribute("type", "checkbox");

        checkToDo.appendChild(checkBoxToDo);

        var whatToDo = document.createElement("div");
        whatToDo.classList.add("whatToDo");

        var whatToDoText = document.createElement("input");
        whatToDoText.classList.add("whatToDoText");
        whatToDoText.setAttribute("type", "text");
        whatToDoText.setAttribute("value", inputToDo);

        whatToDo.appendChild(whatToDoText);
        createToDo.appendChild(checkToDo);
        createToDo.appendChild(whatToDo);

        var removeToDo = document.createElement("div");
        removeToDo.classList.add("removeToDo");

        var trash = document.createElement("i");
        trash.setAttribute("class", "bx bxs-trash bx-sm");
        
        removeToDo.appendChild(trash);
        ToDo.appendChild(createToDo);
        ToDo.appendChild(removeToDo);
        document.getElementById("parent").appendChild(ToDo);

        checkBoxToDo.addEventListener("click",
            function () {
                if (checkBoxToDo.checked == true) {
                    whatToDoText.classList.add("completed");
                    whatToDoText.setAttribute("disabled", "");
                }
                else {
                    whatToDoText.classList.remove("completed");
                    whatToDoText.removeAttribute("disabled", "");
                };
            });

        trash.addEventListener("click",
            function () {
                // ToDo.remove();
                var deleteToDo = prompt("Are you sure you want to delete this task?");
                if (deleteToDo == "yes") {
                    ToDo.remove();
                }
                else if (deleteToDo == "no") {
                    return ;
                };
            }
        );
    }
);

// ------------------------------ End of code ------------------------------ 
