import './App.css'
import './Helper.scss'
import Header from './component/Header'
import DayList from './component/DayList'
import Day from './component/Day'
import EmptyPage from './component/EmptyPage'
import { Route , Routes } from 'react-router-dom';
import CreateWord from './component/CreateWord'
import CreateDay from './component/CreateDay'
import { useState } from 'react'
function App() {
  const [isDayListDeleted, setIsDayListDeleted] = useState(false);
  // 삭제 버튼 클릭 시 처리하는 함수
  const handleDeleteDayList = () => {
    setIsDayListDeleted(true);
  };
  return (
    <div>
      <Header onDeleteDayList={handleDeleteDayList} />
      <Routes>
        <Route path="/" exact element={<DayList isDeleted={isDayListDeleted}/>} />
        <Route path='/day/:day' element={<Day />} />
        <Route path="*" element={<EmptyPage/>} />
        <Route path='/create_word' element={<CreateWord />} />
        <Route path='/create_day' element={<CreateDay />} />
      </Routes>
    </div>
  )
}

export default App
