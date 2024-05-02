import { useState } from "react";

const Ch8 = (props) => {
    // let name = "Mike"
    const [name,setName] = useState("Mike"); // name 상태 초기값은 "Mike"
    const [age,setAge] = useState(props.age) // age 상태 초기값은 props로 받은 값

    // age 에 따라 메시지를 설정
    const msg = age < 19 ? "미성년자" : "성인"

    // 이름 변경 함수
    function changeName() {
        setName(name === "Mike" ? "Jane" : "Mike"); // name 상태를 변경하고
        setAge(age+1); // age 상태를 1 증가시킴
    }

    // jsx 반환
    return (
        <div>
            <h1>{name} {age}</h1>
            <h2>{msg}</h2>
            <button onClick={changeName}>버튼을 클릭하면 어케될까요?</button>
        </div>
    )
}
export default Ch8;