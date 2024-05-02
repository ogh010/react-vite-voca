import { useEffect, useState } from 'react' // React 와 useEffect, useState를 import 한다
// 스타일 파일을 import 
import '../App.css' 
import '../Helper.scss'
// Hello 와 Welcome 컴포넌트를 import 
import Hello from '../component/Hello'
import Welcome from '../component/Welcome'
// axios 를 import 
import axios from 'axios'

// Ch6 함수형 컴포넌트를 정의
function Ch6() {
  // useEffect 를 사용하여 컴포넌트가 마운트 될 때 axios 를 통해 api 를 호출하고 응답을 콘솔에 출력
  useEffect(()=>{
    axios.get('https://reqres.in/api/users?page=2')
    .then(res => console.log(res))
    .catch(err => console.log(err))
  },[])

  // 함수들을 정의한다.
  function showName() {
    console.log("이름보여주기")
  }

  function showAge(e) {
    console.log(e.target.value);
  }

  function showText(e) {
    const txt = e.target.value;
    console.log(txt);
  }

  // 버튼 클릭 시 알림창을 띄우는 함수를 선언
  const buttonClick = function() {
    alert('버튼을 클릭했읍니까?')
  }

  // 화살표 함수로 버튼 클릭 시 알림창을 띄우는 함수를 선언
  const buttonClickArrow = () => {
    alert('화살표함수로 바꿔봄');
  }

  // 마우스 오버 시 콘솔에 메시지를 출력하는 함수
  const handleMouseOver = function() {
    console.log("마우스 올려봄");
  }

  // 인풋 값이 변경 될 때 콘솔에 입력한 값을 출력하는 함수
  const handleChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  }

  // useState를 사용하여 상태를 정의한다
  const [value,setValue] = useState("123");
  const formSubmit = (e) => {
    e.preventDefault();
    alert('폼이 제출되었습니다')
  }
  const conditional = 1;
  const [condition, setCondition] = useState("1")
  const conditionalButton = () => {
    if(conditional) {
      console.log(conditional);
      setCondition(condition + 1);
      console.log(condition);
    }
    else console.log('흠냐잉');
  }
  const handleKeyDown = (e) => {
    if(e.key == 'Enter') {
      console.log("엔터키를 눌렀습니다.");
    }
  }

  // 컴포넌트 마운트와 언마운트 시에 콘솔에 메시지를 출력하는 useEffect를 사용
  useEffect(()=>{
    console.log('컴포넌트가 마운트됐습니당');
    return()=>{
      console.log('컴포넌트가 언마운트되었습니다아');
    }
  },[]); // 빈 배열을 전달하여 컴포넌트가 마운트도리 때 한번만 실행되도록 설정
  const handleMouseMove = (event) => {
    console.log(`마우스 위치 ${event.clientX} , ${event.clientY}`);
  }
  const [timeText, setTimeText] = useState(0);
  setTimeout(() => {
    setTimeText(timeText+3)
  }, 3000);
  const [visible,setVisible] = useState(false);
  setTimeout(()=>{
    setVisible(true);
  },5000)

  // JSX를 반환한다
  return (
    <div>
      <Hello/>
      <Welcome />
      {/* 이벤트 처리 방법 */}
      <button onClick={showName}>show Name</button>
      <button onClick={()=>showAge}>show Age</button>
      <input type="text" onChange={showText} />
      <input type="text" onChange={e=>console.log(e.target.value)}/>
      <button onClick={buttonClick}>클릭하지마세요</button>
      <button onClick={buttonClickArrow}>화살표</button>
      <p onMouseOver={handleMouseOver}>마우스를 여기에 올려보세용</p>
      <form onSubmit={formSubmit}>
        <input type="text" onChange={handleChange} value={value}/>
        <button type='submit'>폼 제출</button>
      </form>
      <button onClick={conditionalButton}>조건부 클릭</button>
      <input type="text" placeholder='엔터키를 눌러보세용~' onKeyDown={handleKeyDown}/>
      <div style={{width:'200px', height:'200px', backgroundColor:'greenyellow'}} onMouseMove={handleMouseMove}></div>
      <div>{timeText}</div>
      <div>
        {visible == true ? <p >이거는... visible이 setTimeout으로 인해 setVisivle이 실행돼서 보여지는 div 입니다</p> : null}
      </div>
    </div>
  )
}
export default Ch6
