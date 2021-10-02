alert("ola meu to-do-list")

const createTask = document.querySelector("inputNewTask")
const btnCreateTask = document.querySelector("btnCreate")
const listaTask = document.querySelector("listaTask")

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

  let btnDelete = document.createElement("button")
  btnDelete.classList.add("btnAction")
  btnDelete.innerHTML = ' <i class="fa fa-trash"></i>'

  div.appendChild(btnUpdate)
  div.appendChild(btnDelete)

  li.appendChild(span)
  li.appendChild(div)

  return li;
}

createTask.addEventListener('keypress',(event) => {
  if(event.keyCode == 13){
    let task = {
      nome: createTask.value,
      id: creatId(),
    }
    addTask(task)
  }
});

btnCreateTask.addEventListener('click', (event)=>{

  if(event.keyCode == 13){
    let task = {
      name: createTask.value,
      id: creatId(),
    }
    addTask(task)
  }
});

// document.addEventListener ('keypress', (event) => {
//   const keyName = event.key;
//   alert ('keypress event \ n \ n' + 'chave:' + keyName);
// });

