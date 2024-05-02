import { Link } from 'react-router-dom'// react-router-dom에서 link 컴포넌트를 가져옴
import useFetch from '../hooks/useFetch'
import Loading from './Loading'; // 로딩 컴포넌트
export default function DayList() { 
    const days = useFetch("http://localhost:3001/days");
    if(days.length === 0) { // 만약 데이터가 없으면 로딩 컴포넌트를 반환한다
        return (
            <Loading />
        )
    }
  return (
    <>
        {/* 날짜 목록 */}
        <ul className='dl' style={{display:'flex'}}> 
            {days.map(day=>( // days 배열을 매핑하고 각 날짜마다 목록 항목을 렌더링
                <li key={day.id}> {/* 각 목록 항목에 고유한 키를 할당 */}
                    <button className='ml-2'>
                        {/* React Router 를 사용하여 날짜를 연결 */}
                        <Link to={`/day/${day.day}`}> Day {day.day} </Link> 
                    </button>
                </li>
            ))}
        </ul>
    </>
  )
}