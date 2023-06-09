import './App.css';

function App() {
    return (
        <div className='container'>
            <div className='title'>Q&A</div>
            <table>
                <thead>
                <tr>
                    <th>No</th>
                    <th>제목</th>
                    <th>글쓴이</th>
                    <th>날짜</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>친절한 대응 감사합니다!</td>
                    <td>익명</td>
                    <td>2023-05-27</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>질문입니다.</td>
                    <td>익명</td>
                    <td>2023-05-29</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>배송 문의 드립니다.</td>
                    <td>익명</td>
                    <td>2023-06-07</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default App;
