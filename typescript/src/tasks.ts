const taskForm=document.querySelector<HTMLFormElement>('.form');

const formInput=document.querySelector<HTMLInputElement>('.form-input');

const taskListElement=document.querySelector<HTMLUListElement>('.list');

type Task={
    description:string;
    isCompleted:boolean;

}

const tasks:Task[]=loadTasks();
tasks.forEach(renderTask);

function loadTasks():Task[]{
    const storedTasks=localStorage.getItem('tasks');
    return storedTasks?JSON.parse(storedTasks):[]
}

taskForm?.addEventListener('submit',e=>{
     e.preventDefault();
    const taskDescription=formInput?.value;
    if(taskDescription){
        //add task
        const task:Task={
            description:taskDescription,
            isCompleted:false
        }
        addTask(task);
        //render task
        renderTask(task);
        //update local storage
        updateStorage();
        formInput.value='';
        return;
    }
    alert('enter task description');

})

function addTask(task:Task):void{
    tasks.push(task);
    console.log(tasks);
}

function renderTask(task:Task):void{
    const taskElement=document.createElement('li');
    taskElement.textContent=task.description;
    //checkBox
    const taskCheckbox=document.createElement('input');
    taskCheckbox.type='checkbox';
    taskCheckbox.checked=task.isCompleted;
    //toggle checkbox
    taskCheckbox.addEventListener("change",()=>{
        task.isCompleted=!task.isCompleted;
        updateStorage();
    });

    taskElement.appendChild(taskCheckbox);
    taskListElement?.appendChild(taskElement);

}

function updateStorage():void{
    localStorage.setItem('tasks',JSON.stringify(tasks));

}