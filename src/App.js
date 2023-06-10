import './App.css';
import Thead from "./Thead";
import Title from "./Title";
import SearchWrite from "./SearchWrite";
import Tbody from "./Tbody";

function App() {
    return (
        <div className='container'>
            <Title/>
            <table>
                <Thead/>
                <Tbody/>
            </table>
            <SearchWrite/>
        </div>
    )
}

export default App;
