import { useNavigate } from "react-router-dom"; // React Router의 useNavigate훅을 가져옴
import useFetch from "../hooks/useFetch" // useFetch 커스텀 훅을 가져옴 

export default function CreateDay() {
    const days = useFetch("http://localhost:3001/days"); // 서버에서 날짜 데이터를 가져옴
    const navigate = useNavigate(); // 페이지 이동을 위한 navigate 함수를 가져온다
    function addDay(){ // 날짜를 추가하는 함수
        fetch('http://localhost:3001/days',{
            method:'POST', // 서버에 post 요청을 보내서 새로운 날짜를 추가
            headers:{"Content-Type":"application/json"}, // 요청 헤더 설정
            body:JSON.stringify({ // 요청 바디에 json 형식의 데이터를 전송
                day : days.length+1 // 현재 날짜 수에 1을 더하여 새로운 날짜 설정
            })
        })
        .then(res=>{
            if(res.ok){ // 성공적인 응답이 도착한 경우
                if(confirm("등록하시겠습니까⁉️")){ 
                    alert("등록되었습니다💌");
                    navigate("/"); // 페이지 이동 
                }
                else return;
            }
        })
    }
  return (
    <>
        <p className="createWord text-2xl mb-10 mt-10 border-2 p-10 rounded-lg">
            현재 일수 : <span style={{ color: '#646cff' }}>{days.length}</span> 일
        </p>
        <button onClick={addDay}><a href="#">Day 추가</a></button>
    </>
  )
}