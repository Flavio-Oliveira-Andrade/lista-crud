const createTask = document.querySelector("#inputNewTask")
const btnCreateTask = document.querySelector("#btnCreate")
const listaTask = document.querySelector("#listaTask")


createTask.addEventListener("keypress",(event) => {
  if(event.keyCode == 13){
    let task = {
      name: createTask.value,
      id: creatId(),
    }
    addTask(task)
  }
});

btnCreateTask.addEventListener('click', (event)=>{

    let task = {
      name: createTask.value,
      id: creatId(),
    }
    addTask(task)
});


const creatId = ()=> {
  return Math.floor(Math.random()*5000);
}

const addTask = (task)=> {
  let li = createTagLi(task)
  listaTask.appendChild(li)
  createTask.value = ""
}


const createTagLi = (task)=> {

  let li = document.createElement("li")

  let span = document.createElement("span")
  span.classList.add("textoTarefa")
  span.innerHTML = task.name

  let div = document.createElement("div")

  let btnUpdate = document.createElement("button")
  btnUpdate.classList.add("btnAction")
  btnUpdate.innerHTML = '<i class="fa fa-pencil"></i>'
  btnUpdate.setAttribute('onclick', 'updateItem('+task.id+')' )

  let btnDelete = document.createElement("button")
  btnDelete.classList.add("btnAction")
  btnDelete.innerHTML = ' <i class="fa fa-trash"></i>'
  btnDelete.setAttribute('onclick', 'deleteItem('+task.id+')' )


  div.appendChild(btnUpdate)
  div.appendChild(btnDelete)

  li.appendChild(span)
  li.appendChild(div)

  return li;
}

const updateItem =(taskId) => {
  alert(taskId)
}

const deleteItem = (taskId) => {
  alert(taskId)
}

