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
            <span id="list-content"> ${newTaskName} </span>
            <span> ${newTaskDate} </span>
            <button id="save-button"  onclick="editTask(event)" > Edit </button>
            <button id="delete-button" onclick="deleteTask(event)" > X </button>
        <div>`;
    
    document.getElementById("tasks-list-box").append(newTaskItem);

    document.getElementById("task-name").value = "";
    document.getElementById("task-date").value = "";
}

// deleting an Item

function deleteTask(event){
    let parentNodeOfItem = event.target.parentNode;
    console.log(parentNodeOfItem.parentNode);

    if(parentNodeOfItem.parentNode)
    {
        parentNodeOfItem.parentNode.remove();
    }
}

// updating an Item
function editTask(event){
    let currentItem = event.target.parentNode;
    let currentItemTaskName = currentItem.children[0];
    let currentItemTaskDate = currentItem.children[1];

    // console.log(currentItemTaskName.innerText);

    currentItem.innerHTML = `<span id="list-content"> ${currentItem.children[0].innerText} </span> 
    <span> ${currentItem.children[1].innerText} </span> 
    <input id="current-task-name" type="text" placeholder=${currentItemTaskName.innerText}>
    <input id="current-task-date" type="date" placeholder=${currentItemTaskDate.innerText}> 
    <button id="save-button" onclick="saveTask(event)" > Save </button> 
    <button id="delete-button" onclick="deleteTask(event)" > X </button>`;

    currentItemTaskName = currentItem.children[0];
    currentItemTaskDate = currentItem.children[1];

    currentItemTaskName.style.display = 'none';
    currentItemTaskDate.style.display = 'none';

}

function saveTask(event){
    let currentItem = event.target.parentNode;

    let currentItemTaskName = currentItem.children[0];
    let currentItemTaskDate = currentItem.children[1];

    let editedTaskName = currentItem.children[2];
    let editedTaskDate = currentItem.children[3];

    currentItemTaskName.innerText = editedTaskName.value;
    currentItemTaskDate.innerText = editedTaskDate.value;
    
    editedTaskName.remove();
    editedTaskDate.remove();

    currentItemTaskName.style.display = 'inline';
    currentItemTaskDate.style.display = 'inline';

    currentItem.children[2].setAttribute("onclick","editTask(event)");
    currentItem.children[2].innerText = "Edit";
}