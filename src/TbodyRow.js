function TbodyRow(props){

    return (
        <tr>
            <td>{props.index}</td>
            <td className='content'>{props.content}</td>
            <td className='name'>{props.name}</td>
            <td className='date'>{props.date}</td>
        </tr>
    )
}

export default TbodyRow