// let div = document.createElement("div");
// div.setAttribute("id","div-by-js");
// div.innerText="I am a div"
// document.body.appendChild(div);


// adding an Item

function addTaskHandler(){
    let newTaskName = document.getElementById("task-name").value;
    let newTaskDate = document.getElementById("task-date").value;

    // console.log(newTaskName,newTaskDate);

    let newTaskItem = document.createElement("li");
    newTaskItem.innerHTML = `<div id="tasks">
            <input type="checkbox" id="complete-checkbox" onchange="isCompleted(event)">
            <span id="list-content"> ${newTaskName} </span>
            <span> ${newTaskDate} </span>
            <button id="save-button"  onclick="editTask(event)" > Edit </button>
            <button id="delete-button" onclick="deleteTask(event)" > X </button>
        </div>`;
    
    document.getElementById("tasks-list-box").append(newTaskItem);

    document.getElementById("task-name").value = "";
    document.getElementById("task-date").value = "";
}

// deleting an Item

function deleteTask(event){
    let parentNodeOfItem = event.target.parentNode;
    // console.log(parentNodeOfItem.parentNode);

    if(parentNodeOfItem.parentNode)
    {
        parentNodeOfItem.parentNode.remove();
    }
}

// updating an Item
function editTask(event){
    let currentItem = event.target.parentNode;
    let completeCheckbox = currentItem.children[0];
    let isChecked = currentItem.children[0].checked;
    let currentItemTaskName = currentItem.children[1];
    let currentItemTaskDate = currentItem.children[2];

    // console.log(completeCheckbox.checked);


    currentItem.innerHTML = `<input type="checkbox" id="complete-checkbox" style="display:none" onchange="isCompleted(event)">
    <span id="list-content"> ${currentItem.children[1].innerText} </span> 
    <span> ${currentItem.children[2].innerText} </span> 
    <input id="current-task-name" type="text" placeholder=${currentItemTaskName.innerText}>
    <input id="current-task-date" type="date" placeholder=${currentItemTaskDate.innerText}> 
    <button id="save-button" onclick="saveTask(event)" > Save </button> 
    <button id="delete-button" onclick="deleteTask(event)" > X </button>`;

    currentItemTaskName = currentItem.children[1];
    currentItemTaskDate = currentItem.children[2];

    currentItemTaskName.style.display = 'none';
    currentItemTaskDate.style.display = 'none';
    // completeCheckbox.style.display = 'none';
    // console.log(completeCheckbox.checked);
    // completeCheckbox.checked = isChecked;

}

function saveTask(event){
    let currentItem = event.target.parentNode;

    let completeCheckbox = currentItem.children[0];
    // console.log(completeCheckbox.checked);

    let currentItemTaskName = currentItem.children[1];
    let currentItemTaskDate = currentItem.children[2];

    // console.log(currentItemTaskName.innerText);
    
    let editedTaskName = currentItem.children[3];
    let editedTaskDate = currentItem.children[4];
    
    currentItemTaskName.innerText = editedTaskName.value;
    currentItemTaskDate.innerText = editedTaskDate.value;
    
    editedTaskName.remove();
    editedTaskDate.remove();

    currentItemTaskName.style.display = 'inline';
    currentItemTaskDate.style.display = 'inline';
    completeCheckbox.style.display = 'inline';

    currentItem.children[3].setAttribute("onclick","editTask(event)");
    currentItem.children[3].innerText = "Edit";
}

function isCompleted(event){
    let completeCheckbox = event.target;
    let currentItem = event.target.parentNode;

    if(completeCheckbox.checked)
    {
        document.getElementById("completed-list-box").append(currentItem.parentNode);
        currentItem.children[1].style.textDecoration = 'line-through';
    }
    else
    {
        document.getElementById("tasks-list-box").append(currentItem.parentNode);
        currentItem.children[1].style.textDecoration = 'none';
    }
}