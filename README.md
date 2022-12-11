# Vanilla Redux

## Redux Basic
Doucment : https://receptive-ping-b41.notion.site/redux-bfb6250dd376423e9c190c04875320bb<br/><br/>
<b>state</b> : application 에서 변경되는 데이터<br/>
<b>store</b> : 데이터의 저장소<br/>
<b>reducer</b> : data를 Modify해주는 함수로 reducer 가 return하는것은 application에 있는 데이터가 된다<br/>
<b>action</b> : redux에서 function을 부를때 쓰는 두번째 파라미터 혹은 argument로 reducer와 소통하기 위한 방법<br/>
<b>Reducer에게 Action을 보내는 방법</b> : store.dispatch({type:type}}<br/>
<b>subscribe</b> : store 안에 있는 데이터 변화 감지<br/>


### Redux Single source of truth
state는 single source of truth 이며 read-only입니다<br/>
store를 수정할 수 있는 유일한 방법은 action을 보내는 방법뿐입니다<br/>
절때로 state를 mutate 해서는 안됩니다<br/>
mutating state하는 대신 new state objects(새로운 배열,새로운 객체)를 반환해야 합니다
