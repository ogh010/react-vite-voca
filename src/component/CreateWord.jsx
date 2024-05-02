import { useRef, useState } from "react";
import useFetch from "../hooks/useFetch" // useFetch 커스텀 훅
import { useNavigate } from "react-router-dom"; // useNavigate 훅

export default function CreateWord() {
    const [isLoading, setIsLoading] = useState(false);
    const days = useFetch("http://localhost:3001/days"); // 서버에서 날짜 데이터를 가져옴
    const navigate = useNavigate(); // React router를 사용하여 페이지 이동을 위한 navigate 함수를 가져옴

    // useRef를 사용하여 입력 요소에 대한 참조를 생성
    const engRef = useRef(null); // 영어 입력 참조
    const korRef = useRef(null); // 한글 입력 참조
    const dayRef = useRef(null); // 날짜 선택 참조 

    // 폼 제출 핸들러
    function onSubmit(e) {
        if(!isLoading) {
            setIsLoading(true)
            e.preventDefault(); // 기본 제출 동작 방지
            fetch("http://localhost:3001/words/",{ // 서버에 새로운 단어를 등록하는 post 요청 보내기
                method:"POST", //post 메서드 사용
                headers:{"Content-Type":"application/json"}, // 요청 헤더 설정
                body:JSON.stringify({ // 요청 바디에 json 형식의 데이터 전송
                    // id:99, 
                    eng : engRef.current.value, // 영어단어
                    kor : korRef.current.value, // 한글 뜻
                    day : dayRef.current.value, // 날짜
                    isDone : false, // 완료 여부 초기값은 false로 설정
                })
            })
            .then(res=>{
                if(res.ok){ // 성공적인 응답
                    alert("등록되었습니다💌"); // 알림 메시지 
                    navigate(`/day/${dayRef.current.value}`); // 선택한 날짜로 페이지 이동
                    setIsLoading(false)
                }
            })  
        }
    }
  return (
    <>
        <form onSubmit={onSubmit}>
            <div className="mb-4">
                <label className="block mb-2"> eng </label>
                <input className="shadow border rounded w-full p-2 " 
                type="text" 
                placeholder="apple" 
                ref={engRef}/>
            </div>
            <div className="mb-4">
                <label className="block mb-2"> kor </label>
                <input className="shadow border rounded w-full p-2" 
                type="text" 
                placeholder="사과" 
                ref={korRef}/>
            </div>
            <div className="mb-4">
                <label className="block mb-2"> Day </label>
                <select className="shadow w-full border p-3 rounded" ref={dayRef}>
                    {days.map(day => (
                        <option key={day.id} value={day.day}>{day.day}</option>
                    ))}
                </select>
            </div>
            <button className={isLoading ? 'load' : ''}>
                <a >{isLoading ? 'Saving..' : '등록'}</a>
            </button>
        </form>
    </>
  )
}
