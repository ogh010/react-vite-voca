import { useState, useEffect } from "react";
// 커스텀 훅 useFetch 정의
export default function useFetch(url) {
    // 상태 변수 data 와 해당 상태를 업데이트 하는 setData 함수를 선언
    const [data,setData] = useState([]); 

    // useEffect 훅을 사용하여 특정 url 데이터를 가져옴
    useEffect(()=>{
        fetch(url) 
        .then(res => { 
            return res.json(); // 서버 응답을 json 형식으로 파싱한다
        })
        .then(data => { // 파싱된 데이터를 상태변수 data 에 설정하여 컴포넌트 상태를 업데이트 한다
            setData(data)
        })
    },[url]); // url 이 변경될 때마다 useEffect 훅이 실행

    return data; // 데이터를 반환
}