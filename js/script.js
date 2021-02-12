


const btn = document.querySelector("#add-button")
btn.addEventListener("click", function(event){
    event.preventDefault()
    const taskTitle = document.getElementById("task-title").value

    const tamplate = document.querySelector(".tamplate")
    const newTask = tamplate.cloneNode(true)

    newTask.querySelector("span").innerHTML = taskTitle

    newTask.classList.remove("tamplate","hide")
    const ul = document.querySelector("#task-list")
    ul.append(newTask)

    document.getElementById("task-title").value = ""
    document.getElementById("task-title").focus()

    //adicionar evento para remover a tarefa
    const removeBtn = newTask.querySelector(".remove-btn")
    removeBtn.addEventListener("click", function(){
        removeTask(this)
    })

    //adicionar evento para marcar tarefa como feita
    const doneBtn = newTask.querySelector(".done-btn")
    doneBtn.addEventListener("click", function(){
        completeTask(this)
    })

})

function removeTask(task){
    task.parentNode.remove()
}

function completeTask(task){
    task.parentNode.classList.toggle("done")
}