import './App.css';
import Title from "./component/Title/Title";
import SearchWrite from "./component/SearchWrite/SearchWrite";
import Table from "./component/Table/Table";

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
