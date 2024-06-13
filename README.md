# 토익 영단어사전(voca) 프로젝트

이 프로젝트는 리액트와 Vite를 이용하여 만든 영단어사전(보카) 웹 애플리메이션입니다.☺️ <br/>
사용자가 Day별📆 암기할 단어를 확인할 수 있고, 단어의 의미를 확인하고 암기를 완료하면 체크✅할 수 있습니다.


##### 이 프로젝트는 다음과 같은 기술을 사용합니다 🙂

![HTML](https://img.shields.io/badge/HTML-5-orange)
![CSS](https://img.shields.io/badge/CSS-3-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4.3-green)
![JSON Server](https://img.shields.io/badge/JSON%20Server-0.16-lightgrey)
![Axios](https://img.shields.io/badge/Axios-1.6.8-brightgreen)
![Vite](https://img.shields.io/badge/Vite-5.2.9-lightblue)
![ESLint](https://img.shields.io/badge/ESLint-8.57.0-purple)
![React Router](https://img.shields.io/badge/React%20Router-6.22.3-red)


##### 기술블로그 보러가기 💻
[https://ohgahee.tistory.com/category/React/voca%20%EB%A6%AC%EC%95%A1%ED%8A%B8](https://ohgahee.tistory.com/category/React/voca%20%EB%A6%AC%EC%95%A1%ED%8A%B8)


## 프로젝트 구조

```plaintext
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│   └── vite.svg
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── App.scss
│   ├── Helper.scss
│   ├── assets
│   │   ├── load.jpeg
│   │   ├── react.svg
│   │   └── test.jpeg
│   ├── component
│   │   ├── Ch6.jsx
│   │   ├── Ch7.jsx
│   │   ├── Ch8.jsx
│   │   ├── CreateDay.jsx ✔︎
│   │   ├── CreateWord.jsx ✔︎
│   │   ├── Day.jsx ✔︎
│   │   ├── DayList.jsx ✔︎
│   │   ├── EmptyPage.jsx ✔︎
│   │   ├── Header.jsx ✔︎
│   │   ├── Hello.jsx
│   │   ├── Loading.jsx ✔︎
│   │   ├── NoData.jsx ✔︎
│   │   ├── Welcome.jsx
│   │   ├── Word.jsx ✔︎
│   │   └── World.jsx
│   ├── db
│   │   ├── data.json
│   │   └── dummy
│   ├── hooks
│   │   └── useFetch.js
│   ├── index.css
│   ├── main.jsx
│   └── pages
│       ├── Hello.jsx
│       └── Test2.jsx
├── tailwind.config.js
└── vite.config.js

```

## 주요 기능
- **Day 목록**: 사용자에게 Day 별 학습 시스템 제공
- **단어 목록**: 단어 목록 노출
- **단어 상세 정보**: 선택한 단어의 의미 노출
- **단어 암기 체크**: 단어를 암기하면 체크 가능
- **단어 추가,삭제**: 단어를 추가하거나 삭제 가능
- **Day 추가,삭제**: Day를 추가하거나 삭제 가능
- **데이터 저장**: json-server를 이용해 로컬에서 데이터를 저장하고 관리

## 설치 및 실행 방법

### 사전 준비

Node.js와 npm이 설치되어 있어야 합니다.
 Node.js는 [여기서](https://nodejs.org/) 다운로드 할 수 있습니다.
 
### 클론 및 의존성 설치

1. 이 리포지토리를 클론합니다:
    ```sh
    git clone https://github.com/ogh010/react-vite-voca.git
    cd react-vite-voca
    ```

2. 프로젝트 디렉토리로 이동한 후, 의존성을 설치합니다:
    ```sh
    npm install
    ```


### 개발 서버 실행

1. 개발 서버를 실행합니다:
    ```sh
    npm run dev
    ```

2. 브라우저에서 [http://localhost:5173/](http://localhost:5173/)을 엽니다.

### JSON 서버 실행
참고로 concurrently 라이브러리를 이용하여 json서버와 react서버를 동시에 실행시킬 수 있도록 세팅되어있음 🕶️  

1. json-server를 실행합니다:
   ```sh
   json-server --watch ./src/db/data.json --port 3001 
    ```

### 빌드

프로덕션 빌드를 생성하려면:
    ```
    npm run build
    ```


## 기술 스택

- **프론트엔드**: React, Vite
- **백엔드**: json-server
- **스타일링**: CSS, tailwindui
- **도구**: concurrently

## 사용된 주요 라이브러리

- [axios](https://github.com/axios/axios): 1.6.8
- [react](https://reactjs.org/): 18.2.0
- [react-dom](https://reactjs.org/): 18.2.0
- [react-router-dom](https://reactrouter.com/): 6.22.3
- [tailwindcss](https://tailwindcss.com/): 3.4.3
- [vite](https://vitejs.dev/): 5.2.9
- [json-server](https://github.com/typicode/json-server)

## 스크린샷
<img width="769" alt="image" src="https://github.com/ogh010/react-vite-voca/assets/72989911/54708a38-53fe-42c2-88bb-ada4af47309f">
<img width="769" alt="image" src="https://github.com/ogh010/react-vite-voca/assets/72989911/3935d72d-6bb6-4b19-b6f0-c9343c728175">
<img width="769" alt="image" src="https://github.com/ogh010/react-vite-voca/assets/72989911/a13d8f01-f975-4fcd-97cb-9be5cff35306">
<img width="769" alt="image" src="https://github.com/ogh010/react-vite-voca/assets/72989911/12c2aefd-70e9-4780-b48d-5223fc29511c">
<img width="769" alt="image" src="https://github.com/ogh010/react-vite-voca/assets/72989911/88f93c77-4f66-4bc4-8c41-9ca3d646cf6d">


<br/><br/>🌑다크모드 🌚

<img width="769" alt="image" src="https://github.com/ogh010/react-vite-voca/assets/72989911/630b71f4-9b33-485e-8f0e-e99057d50810">
<img width="769" alt="image" src="https://github.com/ogh010/react-vite-voca/assets/72989911/86e3f970-d948-43f8-bfc0-660aa2e7ace9">
