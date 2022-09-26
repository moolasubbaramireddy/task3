const ItemDate = ()=>{
    const date = props.date.toLocaleString('en-us',{day:'2-digit'});
    const month = props.month.toLocaleString('en-us', {month:'short'})
    return(
        <div>
            <div className="date" >{day}</div>
            <div className="month">{month}</div>

        </div>
    )
}
export default ItemDate;