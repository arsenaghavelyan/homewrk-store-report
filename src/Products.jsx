function Product({id,name,date,count,price}) {
    return(
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{date}</td>
            <td>{count}</td>
            <td>{price}</td>
            <td>{count * price}</td>
        </tr>
    )
}
export default Product