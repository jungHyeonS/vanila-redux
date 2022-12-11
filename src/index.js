import {createStore} from "redux"
const form = document.querySelector("form")
const input = document.querySelector("input");
const ul = document.querySelector("ul")


//action type 변수화
const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETE_TODO"


//액션 모듈화
const addTodo = (text)=>{
  return {
    type:ADD_TODO,
    text,
    id:Date.now()
  }
}

const deletTodo = (id) => {
  return {
    type : DELETE_TODO,
    id
  }
}

//리듀서 생성
const reducer = (state = [],action) => {
  switch(action.type){
    case ADD_TODO:
      //절때로 state를 mutate해서는 안되기에 새로운 state를 생성하고 리턴해준다
      return [{text:action.text,id:action.id},...state]
    case DELETE_TODO:
      return state.filter(toDo => toDo.id !== parseInt(action.id))
    default:
      return state 
  }
}

//스토어 생성
const store = createStore(reducer);


const dispatchAddToDo = (text) => {
  //디스패치를 통해서 액션에 타입과 페이로드 값들을 보낸다
  store.dispatch(addTodo(text))
}


const dispatchDeleteToDo = (e) => {
  const id = e.target.parentNode.id;
  store.dispatch(deletTodo(id))
}

//스토어 값 변화 감지
store.subscribe(()=>{
  console.log(store.getState())
})


//todo list 그리기
const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = '';
  toDos.forEach(toDo => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL"
    btn.addEventListener("click",dispatchDeleteToDo)
    li.id = toDo.id
    li.innerText = toDo.text
    li.appendChild(btn)
    ul.appendChild(li);
  })
}

store.subscribe(paintToDos)


const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo)
  
}

form.addEventListener("submit",onSubmit)