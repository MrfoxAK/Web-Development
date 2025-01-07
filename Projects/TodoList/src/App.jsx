import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Navbar from './components/Navbar';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]); // Initialize as an empty array
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [todoIdToDelete, setTodoIdToDelete] = useState(null);
  const [showFinished, setShowFinished] = useState(true);
  const [search, setSearch] = useState('');
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [priority, setPriority] = useState('Normal'); // Priority for todos
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    const todoString = localStorage.getItem("todos");
    if (todoString) {
      const loadedTodos = JSON.parse(todoString);
      setTodos(loadedTodos);
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  const toggleFinished = () => {
    setShowFinished(!showFinished);
  };

  const handleEdit = (id) => {
    let t = todos.filter(i => i.id === id);
    setTodo(t[0].todo);
    setPriority(t[0].priority);
    setDueDate(t[0].dueDate);
    setEditingTodoId(id);
  };

  const handleSaveEdit = () => {
    const updatedTodos = todos.map(item => {
      if (item.id === editingTodoId) {
        return { ...item, todo, priority, dueDate };
      }
      return item;
    });
    setTodos(updatedTodos);
    setEditingTodoId(null);
    setTodo('');
    setPriority('Normal');
    setDueDate('');
  };

  const handleDelete = () => {
    const newTodos = todos.filter(item => item.id !== todoIdToDelete);
    setTodos(newTodos);
    setIsDialogOpen(false);
  };

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false, priority, dueDate }]);
    setTodo('');
    setPriority('Normal');
    setDueDate('');
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleDueDateChange = (e) => {
    setDueDate(e.target.value);
  };

  const handleCheckbox = (e) => {
    const id = e.target.name;
    const index = todos.findIndex(item => item.id === id);
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const handleConfirmDelete = (id) => {
    setTodoIdToDelete(id);
    setIsDialogOpen(true);
  };

  const handleCancelDelete = () => {
    setIsDialogOpen(false);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleClearCompleted = () => {
    const remainingTodos = todos.filter(item => !item.isCompleted);
    setTodos(remainingTodos);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto bg-gradient-to-r from-pink-500 via-violet-600 to-blue-500 bg-cover bg-center bg-fixed rounded-xl p-5 my-10 min-h-[80vh] w-3/4 sm:w-1/2 text-sm md:text-lg max-w-[500px]:text-xs animate-gradient-change">
        <div className="addTodo my-5 animate-fade-in">
          <h2 className='text-lg font-bold'>{editingTodoId ? 'Edit Todo' : 'Add a Todo'}</h2>
          <input 
            onChange={handleChange} 
            value={todo} 
            type="text" 
            className='w-full sm:w-1/2 border rounded-md p-2 mb-2 animate-pop' 
          />
          <div className="flex gap-2 mb-2">
            <select 
              value={priority} 
              onChange={handlePriorityChange} 
              className="border p-2 rounded-md">
              <option value="Normal">Normal</option>
              <option value="Important">Important</option>
            </select>
            <input 
              type="date" 
              value={dueDate} 
              onChange={handleDueDateChange} 
              className="border p-2 rounded-md" 
            />
          </div>
          <button 
            onClick={editingTodoId ? handleSaveEdit : handleAdd} 
            disabled={todo.length <= 3} 
            className='bg-violet-800 hover:bg-violet-950 disabled:bg-violet-500 p-2 py-1 text-sm font-bold text-white rounded-md mx-6 animate-bounce'>
              {editingTodoId ? 'Save Changes' : 'Save'}
          </button>
        </div>

        <input 
          type="text" 
          value={search} 
          onChange={handleSearch} 
          placeholder="Search Todos..." 
          className="w-full border p-2 rounded-md mb-5"
        />
        
        <div className="flex items-center gap-2 mb-5 animate-slide-up">
          <input type="checkbox" onChange={toggleFinished} checked={showFinished} className="cursor-pointer" /> Show Finished
        </div>

        <h2 className='text-lg font-bold animate-fade-in'>Your Todos</h2>
        <div className="todos">
          {todos.length === 0 && <div className='m-5 animate-fade-in'>No Todos to Display</div>}
          {todos.filter(item => 
            item.todo.toLowerCase().includes(search.toLowerCase())
          ).map(item => (
            (showFinished || !item.isCompleted) && (
              <div key={item.id} className="todo flex my-3 justify-between w-full animate-slide-up">
                <div className='flex gap-5'>
                  <input
                    name={item.id}
                    onChange={handleCheckbox}
                    type="checkbox"
                    checked={item.isCompleted}
                    className="cursor-pointer"
                  />
                  <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
                  <div className={`priority ${item.priority === 'Important' ? 'text-red-600' : ''}`}>
                    {item.priority}
                  </div>
                  <div className="dueDate text-gray-500">
                    {item.dueDate ? `Due: ${item.dueDate}` : ''}
                  </div>
                </div>
                <div className="buttons flex h-full">
                  <button onClick={() => { handleEdit(item.id) }} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1 animate-pop'>
                    Edit
                  </button>
                  <button onClick={() => handleConfirmDelete(item.id)} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1 animate-pop'>
                    Delete
                  </button>
                </div>
              </div>
            )
          ))}
        </div>

        {isDialogOpen && (
          <div className="confirm-dialog fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white p-5 rounded-md animate-fade-out">
              <p>Are you sure you want to delete this todo?</p>
              <div className="mt-4">
                <button onClick={handleDelete} className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-md mr-2">Yes</button>
                <button onClick={handleCancelDelete} className="bg-gray-600 hover:bg-gray-700 text-white p-2 rounded-md">No</button>
              </div>
            </div>
          </div>
        )}

        <button 
          onClick={handleClearCompleted} 
          className='bg-red-600 hover:bg-red-700 text-white p-2 rounded-md mt-5'>
          Clear Completed
        </button>
      </div>
    </>
  );
}

export default App;
