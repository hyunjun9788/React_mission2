import './App.css';
import Title from "./component/Title";
import SearchWrite from "./component/SearchWrite";
import Table from "./component/Table";

function App() {
    return (
        <div className='container'>
            <Title/>
            <Table/>
            <SearchWrite/>
        </div>
    )
}

export default App;
