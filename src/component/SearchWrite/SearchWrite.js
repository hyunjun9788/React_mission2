import './SearchWrite.css'

function SearchWrite(){
    return (
        <div className='search-write'>
            <input className='search' type='text' placeholder='Search'></input>
            <button className='write'>글쓰기</button>
        </div>
    )
}

export default SearchWrite