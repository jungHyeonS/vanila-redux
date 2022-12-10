import { createStore } from "redux";


//state : application 변경되는 데이터
//store : 데이터 저장소
//reducer : data를 modify해주는 함수로 reducer가 return하는것을 application에 있는 데이터가 된다
//action : redux에서 function을 부를때 쓰는 두번째 파라미터 혹은 argument로 reducer와 소통하기 위한 방법
//Reducer에게 Action을 보내는 방법 : store.dispatch({key:value})

const add = document.getElementById("add")
const minus = document.getElementById("minus")
const number = document.querySelector("span");


const countModifer = (count = 0,action) => {
  //리듀서만 데이터를 수정할수있다

  if(action.type == "ADD"){
    count++;
  }else if(action.type == "MINUS"){
    count--;
  }
  return count;
}

const countStore = createStore(countModifer);

countStore.dispatch({type:"ADD"})
countStore.dispatch({type:"ADD"})
countStore.dispatch({type:"ADD"})
countStore.dispatch({type:"ADD"})
countStore.dispatch({type:"MINUS"})
console.log(countStore.getState())