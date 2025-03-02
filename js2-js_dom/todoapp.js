
'use strict';
/*
görüntüleme
ekleme
silme
güncelleme
*/ 



let gorevListesi = [
    {"id": 1, "gorevAdi": "Task 1"},
    {"id": 2, "gorevAdi": "Task 2"},
    {"id": 3, "gorevAdi": "Task 3"},
    {"id": 4, "gorevAdi": "Task 4"}
];

//görüntüle display

function displayTasks() {
    let ul = document.getElementById("task-list");
    ul.innerHTML = "";

    for(let gorev of gorevListesi) {

        let li = `
            <li class="task list-group-item">
                <div class="form-check">
                    <input type="checkbox" id="${gorev.id}" class="form-check-input">
                    <label for="${gorev.id}" class="form-check-label">${gorev.gorevAdi}</label>
                </div>
                <div class="dropdown">
                    <button class="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fa-solid fa-ellipsis"></i>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a onclick="deleteTask(${gorev.id})" class="dropdown-item" href="#"><i class="fa-solid fa-trash-can"></i> Sil</a></li>
                        <li><a onclick='editTask(${gorev.id}, "${gorev.gorevAdi}")' class="dropdown-item" href="#"><i class="fa-solid fa-pen"></i> Düzenle</a></li>
                    </ul>
                </div>
            </li>
        `;  // editTask() metodu için "" değil '' kullandık çünkü içerdeki string ifadeyi "" ile belirtmemiz gerekiyordu.
        
        ul.insertAdjacentHTML("beforeend", li);           

    }
}

displayTasks();

//ekle add
btnadd = getElementById("btnAddNewTask");
btnadd.addEventListener("click", function(){
    task_name = getElementById("txtTaskName");
    if (task_name != ""){
        addTask(task_name.value);
    }
    else{
        alert("Please enter a task name");
    }
});
function addTask(taskname){
    tasks.push({"id": tasks.length + 1, "name": taskname});
    display();
}






