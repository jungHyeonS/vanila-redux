import {createStore} from "redux"
const form = document.querySelector("form")
const input = document.querySelector("input");
const ul = document.querySelector("ul")


//action type 변수화
const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETE_TODO"


//리듀서 생성
const reducer = (state = [],action) => {
  switch(action.type){
    case ADD_TODO:
      //절때로 state를 mutate해서는 안되기에 새로운 state를 생성하고 리턴해준다
      return [...state,{text:action.text,id:action.id}]
    case DELETE_TODO:
      return []
    default:
      return state 
  }
}

//스토어 생성
const store = createStore(reducer);


//스토어 값 변화 감지
store.subscribe(()=>{
  console.log(store.getState())
})

const createTodo = toDo => {
  const li = document.createElement("li");
  li.innerText = toDo;
  ul.appendChild(li);
}

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  // createTodo(toDo)
  //디스패치를 통해서 액션에 타입과 페이로드 값들을 보낸다
  store.dispatch({type:ADD_TODO,text:toDo,id:Date.now()})
}

form.addEventListener("submit",onSubmit)