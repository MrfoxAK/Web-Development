import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Navbar from './components/Navbar'

function App() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([]) // Initialize as an empty array
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [todoIdToDelete, setTodoIdToDelete] = useState(null)

  // Load todos from localStorage on component mount
  useEffect(() => {
    const todoString = localStorage.getItem("todos")
    if (todoString) {
      const loadedTodos = JSON.parse(todoString)
      setTodos(loadedTodos)
    }
  }, [])

  // Save todos to localStorage whenever the todos state changes
  useEffect(() => {
    if (todos.length > 0) { // Only save if there are todos
      localStorage.setItem("todos", JSON.stringify(todos))
    }
  }, [todos]) // This will run every time the todos state changes

  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id)
    setTodo(t[0].todo)
    let newTodos = todos.filter(item => {
      return item.id !== id
    })
    setTodos(newTodos)
  }

  const handleDelete = () => {
    // Delete the todo from the list
    const newTodos = todos.filter(item => item.id !== todoIdToDelete)
    setTodos(newTodos)
    setIsDialogOpen(false) // Close the dialog
  }

  const handleAdd = () => {
    // Add a new todo
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo('')
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    const id = e.target.name
    const index = todos.findIndex(item => item.id === id)
    const newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
  }

  const handleConfirmDelete = (id) => {
    setTodoIdToDelete(id)
    setIsDialogOpen(true) // Show the confirmation dialog
  }

  const handleCancelDelete = () => {
    setIsDialogOpen(false) // Close the dialog without deleting
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto bg-violet-100 rounded-xl p-5 my-10 min-h-[80vh]">
        <div className="addTodo my-5">
          <h2 className='text-lg font-bold'>Add a Todo</h2>
          <input onChange={handleChange} value={todo} type="text" className='w-1/2' />
          <button onClick={handleAdd} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-6'>Save</button>
        </div>
        <h2 className='text-lg font-bold'>Your Todos</h2>
        <div className="todos">
          {todos.length === 0 && <div className='m-5'>No Todos to Display</div>}
          {todos.map(item => (
            <div key={item.id} className="todo flex w-1/4 my-3 justify-between">
              <div className='flex gap-5'>
                <input
                  name={item.id}
                  onChange={handleCheckbox}
                  type="checkbox"
                  checked={item.isCompleted}
                />
                <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
              </div>
              <div className="buttons">
                <button onClick={(e) => { handleEdit(e, item.id) }} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'>Edit</button>
                <button onClick={() => handleConfirmDelete(item.id)} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'>Delete</button>
              </div>
            </div>
          ))}
        </div>

        {isDialogOpen && (
          <div className="confirm-dialog fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white p-5 rounded-md">
              <p>Are you sure you want to delete this todo?</p>
              <div className="mt-4">
                <button onClick={handleDelete} className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-md mr-2">Yes</button>
                <button onClick={handleCancelDelete} className="bg-gray-600 hover:bg-gray-700 text-white p-2 rounded-md">No</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default App
