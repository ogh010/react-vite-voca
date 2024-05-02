import { useNavigate, useParams } from 'react-router-dom'// react-router-dom에서 useParams를 가져옴
import Word from './Word' // 단어 컴포넌트
import useFetch from '../hooks/useFetch'; // 데이터를 가져오는데 사용할 커스텀 훅
import NoData from './NoData'; // 조회 데이터가 없을 때 보여주는 컴포넌트
import { useEffect, useState } from 'react';
import Loading from './Loading';

export default function Day() {
    const [isLoding, setIsLoading] = useState(true);
    const {day} = useParams(); // useParams를 사용하여 URL 파라미터(현재 일, day)를 가져옴
    const [maxDay, setMaxDay] = useState(null); // 날짜 길이 가져오는 상태 변수
    const [currentDay, setCurrentDay] = useState(parseInt(day)); // 현재 일(day)을 저장할 상태 변수
    
    const days = useFetch(`http://localhost:3001/words?day=${currentDay}`); // 현재 일에 해당하는 단어 목록을 가져오는 훅
    const navigate = useNavigate();// 페이지 이동을 수행하는 함수
    useEffect(() => { // useEffect를 사용하여 컴포넌트가 마운트될때 날짜 길이를 가져오는 작업 수행
        async function fetchMaxDays() {
            try {
                const response = await fetch("http://localhost:3001/days");
                const data = await response.json(); // 응답 데이터를 JSON 형식으로 변환
                setMaxDay(data); // 가져온 데이터를 상태 변수에 설정
            } catch (error) {
                console.error('Error fetching max days:', error);
            }
            setIsLoading(false)
        }
        fetchMaxDays(); //fetchMaxDays 함수를 호출하여 날짜 길이를 가져옴
    }, []);

    // 이전 일자로 이동하는 함수
    const moveLeft = () => {
        const newDay = currentDay - 1; // 현재 일자에서 1을 빼서 이전 일자를 계산
        if (newDay > 0) { // 이동 가능한 경우에만 이동
            setCurrentDay(newDay); // 새로운 일자 설정
            navigate(`/day/${newDay}`); // 새로운 일자로 페이지 이동
        }
    }

    // 다음 일자로 이동하는 함수
    const moveRight = () => {
        const newDay = currentDay + 1; // 현재 일자에 1을 더해서 다음 일자를 계산
        if (newDay <= maxDay.length) { // 이동 가능한 경우에만 이동
            setCurrentDay(newDay); // 새로운 일자 설정
            navigate(`/day/${newDay}`); // 새로운 일자로 페이지 이동
        }
    }
    if(isLoding) {
        return (<Loading />)
    }
  return (
    <>
    <p className='title'> 🍀 day {day} </p>
    <div className="fg">
        <p className='left' onClick={moveLeft}>⏪</p>
        {/* 데이터가 없을 경우 NoData 컴포넌트를 표시한다 */}
        {days.length === 0 && <NoData />}
        {/* 데이터가 있을 경우에만 단어 목록을 표시하는 테이블을 렌더링한다 */}
        {days.length !== 0 && (
            <table className='border-collapse border border-slate-400'>
                <thead>
                    <tr>
                        <td className='border border-slate-300'>체크</td>
                        <td className='border border-slate-300'>영어</td>
                        <td className='border border-slate-300'>한글</td>
                        <td className='border border-slate-300'></td>
                    </tr>
                </thead> 
                <tbody>
                    {/* 단어 목록을 매핑하여 각 단어에 대한 Word 컴포넌트를 렌더링 */}
                    {days.map(word=> 
                        <Word word={word} key={word.id}/> 
                    )}
                </tbody>
            </table>
        )}
        <p className='right' onClick={moveRight}>⏩</p>
    </div>
    </>
  )
}
