import TbodyRow from "./TbodyRow";

function Tbody(props){
    return(
            <tbody>
                <TbodyRow index={1} content='친절한 대응 감사합니다!' name={props.name} date='2023-05-27' />
                <TbodyRow index={2} content='질문입니다.' name={props.name} date='2023-05-29' />
                <TbodyRow index={3} content='배송 문의 드립니다.' name={props.name} date='2023-06-07' />

            </tbody>
        )
    }

    export default Tbody

