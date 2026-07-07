import TodoApp from './component/TodoApp'
import './App.css'
import { useState } from 'react'
import ListApp from './component/ListApp';
// import Counter from './component/Counter'

function App(){
  const [input, setInput] = useState('');

  const [task, setTask] = useState([
        { id: 1, text: "Learn React", done: false },
        { id: 2, text: "Build Todo app", done: false }
  ]);
const [editingTodo, setEditingTodo] = useState(null); // holds the todo being edited
const [editValue, setEditValue] = useState("");        // holds the input text
  const openEdit = (todo) => {
  setEditingTodo(todo);  // which todo
  setEditValue(todo.text); // pre-fill the input
};

 function ListTask(e) {
     const newTodo = {
      id: Date.now(),
      text: input,
      done: true
     };
  e.preventDefault();
   console.log(input);
   setTask([...task, newTodo])
   setInput('')
    
}
// checkTask
const checkTask = (id) => {
  setTask(prev =>
    prev.map(task =>
      task.id === id
        ? { ...task, done: !task.done }
        : task
    )
  );
};

// editTask

const editTask = () => {
  setTask(task.map((value) =>
    value.id === editingTodo.id ? { ...value, text: editValue } : value
  ));
  setEditingTodo(null); // closes the modal
};

// removeTask
const removeTask = (id) => {
  
     setTask(task.filter(task => task.id !== id));
}

  return(

 <div className="container">
 
 <TodoApp ListTask={ListTask}  
 Input={input}  setInput={setInput} />
 <ListApp Task={task} removeTask={removeTask}  handleClick={checkTask} 
 editTask={editTask} editingTodo={editingTodo} editValue={editValue}
 setEditValue={setEditValue} openEdit={openEdit}/>
  {/* <Counter /> */}
 </div>
  )
}
export default App