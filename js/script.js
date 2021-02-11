


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

    const removeBtn = newTask.querySelector(".remove-btn")
    removeBtn.addEventListener("click", function(){
        removeTask(this)
    })


    console.log(newTask);
})

function removeTask(task){
    task.parentNode.remove()
}