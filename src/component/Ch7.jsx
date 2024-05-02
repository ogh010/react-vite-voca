import { useState } from "react";

// Ch7 컴포넌트 정의
const Ch7 = () => {
    // let name = "Mike"
    // useState 훅을 사용하여 name  상태를 정의하고 초기값을 "Mike" 로 설정
    const [name,setName] = useState("Mike")

    // 이름 변경 함수 정의
    function changeName() {
        // 현재 name "Mike" 이면 "Jane" 으로 출력
        setName(name === "Mike" ? "Jane" : "Mike");
        console.log(name);
    }

    // JSX 로 변환
    return (
        <div>
            <h1>{name}</h1>
            <button onClick={changeName}>버튼을 클릭하면 어케될까요?</button>
        </div>
    )
}
export default Ch7;