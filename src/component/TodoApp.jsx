import './TodoApp.css'

  function TodoApp({ListTask ,Input,setInput}) {
   
    return (
      
    <>
       <h1>TodoApp</h1>
    <form onSubmit={ListTask}>
    
     <input  
      required
      minLength={5}
       value={Input}
       onChange={
        (e) => setInput(e.target.value) }
       type="text" name="Add " id="add" 
      />
    <button  className='addTask' type="submit">Add Task</button>

    </form>
    </>
    )
  }

  export default TodoApp