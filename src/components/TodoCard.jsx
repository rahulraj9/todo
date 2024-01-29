import "./TodoCard.css";
export default function TodoCard(props) {
  console.log(props)
  console.log("props", props);
  return (
    <div >
      {props.list.map((item,index) => {
        console.log("index",item)
        return (
          <div className="container" key={index}>
            <div style={{textDecoration:item.cmp?'line-through':''}}>{item.text}</div>
            <div>
              <button className="cmpBtn" onClick={(e)=>props.handleComplete(index)}>{item.cmp?"Mark it as uncompleted":"completed"}</button>
              <button className="dltBtn" onClick={(e)=>props.handleDelete(index)}>Deleted</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
