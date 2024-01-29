import "./TodoForm.css";
export default function TodoForm() {
  function handleSubmit(e){
    e.preventDefault()
  }
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input placeholder="Add your todo..." className="inputData"></input>
        <button className="addButton">Add</button>
      </form>
    </>
  );
}
