import { createStore } from "redux";


//state : application 변경되는 데이터
//store : 데이터 저장소
//reducer : data를 modify해주는 함수로 reducer가 return하는것을 application에 있는 데이터가 된다

const add = document.getElementById("add")
const minus = document.getElementById("minus")
const number = document.querySelector("span");


const countModifer = (count = 0) => {
  //리듀서만 데이터를 수정할수있다
  return count;
}

const countStore = createStore(countModifer);

console.log(countStore.getState())
