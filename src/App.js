import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
    <div className='header'>Q&A</div>
      <div className='table'>
      <div className='no'>
        <div>No</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
      <div className='title'>
        <div>제목</div>
        <div>친절한 대응 감사합니다!</div>
        <div>질문입니다.</div>
        <div>배송 문의 드립니다.</div>
      </div>
        <div className='user'>
          <div>글쓴이</div>
          <div>익명</div>
          <div>익명</div>
          <div>익명</div>
        </div>
        <div className='date'>
          <div>날짜</div>
          <div>2023-05-27</div>
          <div>2023-05-29</div>
          <div>2023-06-07</div>
        </div>
      </div>
    </div>
  );
}

export default App;
