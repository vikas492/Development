// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [todo, setTodo] = useState('')
//   const [list, setList] = useState([])
//   const [editIndex, setEditIndex] = useState(null)

//   const handleAddTask = () => {
//     if (todo.trim() === '') return

//     if (editIndex !== null) {
//       // Editing existing task
//       const updatedList = [...list]
//       updatedList[editIndex].text = todo
//       setList(updatedList)
//       setEditIndex(null)
//     } else {
//       // Adding new task
//       setList([...list, { text: todo, completed: false }])
//     }

//     setTodo('')
//   }




//   const handleComplete = (index) => {
//     const updatedList = [...list]
//     updatedList[index].completed = !updatedList[index].completed
//     setList(updatedList)
//   }


//   const handleDelete = (index) => {
//     const updatedList = list.filter((_, i) => i !== index)
//     setList(updatedList)
//   }



//   return (
//     <div className='container'>
//       <h1>TODO LIST</h1>

//       <div className='input-container'>
//         <input
//           type="text"
//           placeholder="Enter a task..."
//           value={todo}
//           onChange={(e) => setTodo(e.target.value)}
//         />
//         <button onClick={handleAddTask}>Add</button>
//       </div>

//       <div className='todo-list'>

//         {list.map((item, index) => (
//           <div className='todo-item' key={index}>

//             <div className='todo-left'>
//               <input
//                 type="checkbox"
//                 className="checkbox"
//                 checked={item.completed}
//                 onChange={() => handleComplete(index)}
//               />

//               <span
//                 className='task-text'
//                 style={{
//                   textDecoration: item.completed ? 'line-through' : 'none'
//                 }}
//               >
//                 {item.text}
//               </span>
//             </div>

//             <div className='actions'>
//               <button className='edit-btn' onClick={() => {
//                 setTodo(item.text)
//                 setEditIndex(index)
//               }}>✏️</button>
//               <button className='delete-btn' onClick={() => handleDelete(index)}>❌</button>
//             </div>

//           </div>
//         ))}

//       </div>
//     </div>
//   )
// }

// export default App

import { useState,useEffect } from 'react'
import './App.css'
function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] =useState(() => {
  const stored = localStorage.getItem("todos")
  return stored ? JSON.parse(stored) : []
})
  const [editId, setEditId] = useState(null)



  function handleAddTask() {
    if (todo.trim() === "") return

    if (editId !== null) {
      // EDIT
      setTodos(prev =>
        prev.map(item =>
          item.id === editId
            ? { ...item, text: todo }
            : item
        )
      )
      setEditId(null)
    } else {
       const newTodo = { id: Date.now(), text: todo, completed: false }
      setTodos(prev => [...prev, newTodo])
      
    }
setTodo("")
  }


  function handleDelete(id) {
    setTodos(prev => prev.filter((todo) => todo.id !== id))
  }

  function handleToggle(id) {
    setTodos(prev =>
      prev.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed }
        : todo
      )
    )
  }

  function handleEdit(id) {
  const selectedTodo = todos.find(item => item.id === id)
  setTodo(selectedTodo.text)
  setEditId(id)
}

useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos))
}, [todos])



  return (
    <>
      <div>TODO APP</div>
      <input type="text"
        placeholder='Enter a task'
        value={todo}
        onChange={(e) => { setTodo(e.target.value) }}
      />
      <button onClick={handleAddTask}>Add</button>

      <div>
        {todos.map(todo => (
          <div key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggle(todo.id)}
            />

            <p style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
              {todo.text}
            </p>

            <button onClick={() => handleDelete(todo.id)}>Delete</button>
            <button onClick={() => handleEdit(todo.id)}>Edit</button>
          </div>
        ))}
      </div>


    </>
  )
}
export default App
