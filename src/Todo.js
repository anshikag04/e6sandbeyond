const Todo = (props) => {
    return ( 
        <div>
            <h3 className="todotext">{props.todoText}</h3>
            <button>Done</button>
            <button>Delete</button>
        </div>
     );
}
 
export default Todo;