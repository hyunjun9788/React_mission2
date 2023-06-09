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
                    <td className='content'>친절한 대응 감사합니다!</td>
                    <td className='name'>익명</td>
                    <td className='date'>2023-05-27</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td className='content'>질문입니다.</td>
                    <td className='name'>익명</td>
                    <td className='date'>2023-05-29</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td className='content'>배송 문의 드립니다.</td>
                    <td className='name'>익명</td>
                    <td className='date'>2023-06-07</td>
                </tr>
                </tbody>
            </table>

            <div className='search-write'>
                <input className='search' type='text' placeholder='Search'></input>
                <button className='write'>글쓰기</button>
        </div>
        </div>
    )
}

export default App;
