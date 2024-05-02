export default function Loading() {
  return (
    <div className="loading-container">
        <span className="loadimg"></span>
        {/* <div  className="loading-animation"></div> */}
        <div className="flex justify-start items-center">
            <p className="loading-text">
                로딩 중...
            </p>
        </div>
    </div>
  )
}
