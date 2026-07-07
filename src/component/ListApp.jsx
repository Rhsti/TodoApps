import './ListApp.css'
function ListApp({Task,removeTask, handleClick, editTask,editingTodo
  ,editValue , setEditValue, openEdit
}) {

  return (
     <div className='list'>
        <h2>List</h2>
        {Task.length == 0 && <p>No Task Yet!</p>}
      <ul>
       {Task.map((task) => (
        <li key={task.id}
        ><span style={{textDecoration: task.done ?  'line-through' : 'none'}}>{task.text}</span>
           
          <button className='btnCheck' onClick={() => handleClick(task.id)} ><i className="fa-solid fa-check"></i></button>
          
          <button onClick={() => openEdit(task)}  className='btnEdit'>Edit</button>
             <button key={task.id} onClick={() => removeTask(task.id)}  className='btnDelete'>Delete</button>

        </li>
       ))}
       
      </ul>
         {editingTodo && (
  <div className='listUpdate' >
    <input  value={editValue} onChange={(e) => setEditValue(e.target.value)} />
    <button onClick={editTask}>Save</button>
  </div>
)}
    </div>
  )
}

export default ListApp