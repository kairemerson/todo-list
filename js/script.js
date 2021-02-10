


const btn = document.querySelector("#add-button")
btn.addEventListener("click", function(event){
    event.preventDefault()
    const taskTitle = document.getElementById("task-title").value

    const tamplate = document.querySelector(".tamplate")
    const newTask = tamplate.cloneNode(true)

    const title = newTask.querySelector("span")
    title.innerHTML = taskTitle

    newTask.classList.remove("tamplate","hide")
    const ul = document.querySelector("#task-list")
    ul.append(newTask)

    

    console.log(newTask);
})