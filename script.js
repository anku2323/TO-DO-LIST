function displayTime() {
    let d = new Date();
    let hour = d.getHours(); 
    let min = d.getMinutes(); 
    let sec = d.getSeconds(); 
    let amOrPm = "AM";
    if (hour >= 12) {
        amOrPm = "PM";
    }
    if (hour > 12) {
        hour = hour - 12;
    }
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }
    document.getElementById("clock").innerHTML = hour + ":" + min + ":" + sec + " " + amOrPm;

    let monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let month = monthNames[d.getMonth()];
    let date = d.getDate();
    let year = d.getFullYear();
    let day = dayNames[d.getDay()];

    document.getElementById("date").innerHTML = day + ", " + month + " " + date + ", " + year;
}

displayTime();
setInterval(displayTime, 1000);






let input = document.getElementById("toDo");
let list = document.getElementById("taskList");
let Total_Task=document.querySelector(".count");
let Total_task_increase=parseInt(Total_Task.textContent)
let Completed_Task=document.querySelector(".count3");
let complete_task_increase=parseInt(Completed_Task.textContent)
let Remaining_Task=document.querySelector(".count2");
let Remaining_task_increase=parseInt(Completed_Task.textContent)



const Add=()=> {
    if (input.value === "") {
        alert('Please Enter Task');

    } else {
        let newTask = document.createElement('li');
        newTask.style.fontSize = "1.6em";

        let taskText = document.createElement('div');
        taskText.textContent = input.value;
        newTask.appendChild(taskText);

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = '❌'; 
        deleteBtn.classList.add('delete-btn');

        deleteBtn.onclick = function() {
            list.removeChild(newTask);
        };  


        let editBtn = document.createElement('button');
        editBtn.textContent = '✏'; 

        editBtn.classList.add('edit-btn');


        editBtn.onclick = function() {
            let editedTask = prompt("Edit Task", taskText.textContent);
            if (editedTask !== null) {
                taskText.textContent = editedTask;
            }
        };



        let completeBtn = document.createElement('button');
        completeBtn.textContent = '✔'; 
        completeBtn.classList.add('complete-btn');
        completeBtn.onclick = function() {
            const work=newTask.classList.toggle('completed');
            if(work===true){
                complete_task_increase+=1
                Completed_Task.textContent=complete_task_increase
                Remaining_task_increase-=1
                Remaining_Task.textContent=Remaining_task_increase
            }
            else{
                complete_task_increase-=1
                Completed_Task.textContent=complete_task_increase
                Remaining_task_increase+=1
                Remaining_Task.textContent=Remaining_task_increase
            }

        };



        newTask.appendChild(deleteBtn);
        newTask.appendChild(editBtn);
        newTask.appendChild(completeBtn);

        list.appendChild(newTask);
        input.value = "";
        Total_task_increase+=1
        Total_Task.textContent=Total_task_increase
        Remaining_task_increase+=1
        Remaining_Task.textContent=Remaining_task_increase


    }
}



let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.querySelector(".close");
let addBtn = document.getElementById("todo-button");

btn.onclick = function () {
    modal.style.display = "block";
    textField.focus();
};

span.onclick = function () {
    modal.style.display = "none";
};

addBtn.onclick = function () {
    modal.style.display = "none";
};

modal.style.display = "none";


addBtn.addEventListener("click",()=>{
    Add()
})