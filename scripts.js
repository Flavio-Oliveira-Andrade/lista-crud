const createTask = document.querySelector("#inputNewTask")
const btnCreateTask = document.querySelector("#btnCreate")
const listaTask = document.querySelector("#listaTask")

const winEdit = document.querySelector("#winEdit")
const winEditFundo = document.querySelector("#winEditFundo")
const winEditBtnClose = document.querySelector("#winEditBtnClose")
const btnUpdateTtask = document.querySelector("#btnUpdateTtask")
const idtaskUpdate = document.querySelector("#idtaskUpdate")
const inputTaskEdit = document.querySelector("#inputTaskEdit")


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

btnUpdateTtask.addEventListener('click', (event)=>{
  event.preventDefault();
  let idTask = idtaskUpdate.innerHTML.replace('#', '')

    let task ={
      name: inputTaskEdit.value,
      id: idTask,
    }
    let taskEdit = document.getElementById(''+idTask+'');
      if(taskEdit){
        let li = createTagLi(task)
        listaTask.replaceChild(li, taskEdit)
        tuggleWinEdit()
      }else{
        alert("Please select a task")
      }
})


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
  li.id = task.id;

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

  let li = document.getElementById(""+taskId+"")
    if(li){
      idtaskUpdate.innerHTML = "#" + taskId
      inputTaskEdit.value = li.innerText
      tuggleWinEdit();
    }else{
      alert("Please select a task")
    }
}

const deleteItem = (taskId) => {
  let confirm = window.confirm('Are you sure')
  if(confirm) {
    let li = document.getElementById(""+taskId+"")
      if(li){
        listaTask.removeChild(li)
      }
  }
}

const tuggleWinEdit =() => {
  winEdit.classList.toggle('open')
  winEditFundo.classList.toggle('open')
}

