import Thead from "../Tbody/Thead";
import Tbody from "../Tbody/Tbody";
import './Table.css'
function Table(){
    return(
        <table>
            <Thead/>
            <Tbody name='익명'/>
        </table>
    )
}
export default Table