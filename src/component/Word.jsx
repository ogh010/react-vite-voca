import { useState } from "react"

// word 단어컴포넌트 정의
export default function Word({word:w}) {
    const [word,setWord] = useState(w);  // 초기값으로 w(prop으로 받은 word)를 설정
    const [isShow,setIsShow] = useState(false);
    const [isDone,setIsDone] = useState(word.isDone)

    // 뜻 보기/숨기기 함수
    function toggleShow() {
        setIsShow(!isShow);
    }

    // 단어 완료 여부 토글 함수
    function toggleDone() {
        // 서버에 put 요청을 보내서 단어 완료 여부를 업데이트
        fetch(`http://localhost:3001/words/${word.id}`,{
            method:"PUT", // put 메서드 사용하여 업데이트 요청 전송 
            headers:{
                "Content-Type":"application/json" // 요청 헤더에 Json 형식으로 데이터를 전송 
            },
            body: JSON.stringify({ // 요청 바디에 JSON 형식의 데이터를 전송 
                ...word, // 기존 단어 객체를 복사 
                isDone:!isDone// 완료 상태를 토글하여 업데이트 한다 .
            }) // ex) {id: '1', day: 1, eng: 'book', kor: '책', isDone: true}
        })
        .then(res=>{
            if(res.ok){ // 응답이 성공적으로 받아졌을 경우
                // return res.json()
                setIsDone(!isDone); // 상태를 업데이트하여 완료 여부를 반전시킴
            }
        })
        .then(data => {
            console.log(data);
        })
    }

    function del() {
        if(window.confirm("삭제 하시겠습니까?")){
            fetch(`http://localhost:3001/words/${word.id}`,{
                method:"DELETE" // delete 메서드를 사용하여 해당 단어를 삭제
            })
            .then(res => {
                if(res.ok){
                    setWord({id:0}) // 삭제가 성공하면 word state를 초기화
                }
            })
        }
    }

    if(word.id === 0) return null; // 단어의 id가 0인 경우 null을 반환하여 해당 컴포넌트를 렌더링 하지 않음

  return (
    
    <tr className={isDone ? 'default line-through text-slate-400' : 'default'}>
        <td className='border border-slate-300 py-2'>
            <input type="checkbox" defaultChecked={word.isDone} onChange={toggleDone}/>
        </td>
        <td className='border border-slate-300 py-2'>{word.eng}</td>
        <td className='border border-slate-300 py-2'>{isShow && word.kor}</td>
        <td className='border border-slate-300 py-2'>
            <button className="bg-violet-200 mr-4" onClick={toggleShow}>
                뜻 {isShow ? '숨기기' : '보기'}
            </button>
            <button className="bg-red-200" onClick={del}>삭제</button>
        </td>
    </tr>
  )
}
