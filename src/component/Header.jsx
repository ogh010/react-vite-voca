import { useState } from 'react';
import {Link} from 'react-router-dom'

export default function Header({ onDeleteDayList }) {
  const handleDeleteClick = () => {
    onDeleteDayList(); // 삭제 이벤트 처리 함수 호출
    setIsClick(true)
  };
  const [isClick,setIsClick] = useState(false)
  return (
    <div className="header flex justify-start items-center">
        <Link to={"/"}>  <span className="logoimg"></span> </Link>
        <>
        <Link to={"/"}>
           <p>토익 영단어</p> 
        </Link>
        </>
       
        <button type='button' className="mr-4 ml-4">
          <Link to={"/create_word"}>영어단어추가</Link>
        </button>
        <button type='button' className="mr-4 ml-4">
          <Link to={"/create_day"}> Day추가 </Link>
        </button>
        <button type='button' 
        className='del' 
        onClick={handleDeleteClick}
        style={{opacity: isClick ? 0.5 : 1}}>
          <a href="#">Day 삭제</a>
        </button>
    </div>
  )
}
