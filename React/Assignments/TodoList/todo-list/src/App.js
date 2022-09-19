import './App.css';
import React, {useState} from 'react'

function App() {
  const [newTodo, setNewTodo] = useState("")
  const [list, setList] = useState([])

  const createTodo = (e) => {
    e.preventDefault()

    if (newTodo.length === 0) {
      return;
    }

    const todoItem = {
      text: newTodo,
      complete: false
    }

    setList([...list, todoItem])
    console.log(newTodo)
    console.log(list)
    setNewTodo("")
  }

  const deleteTodo = (index) => {
    var newList = list
    newList.splice(index, 1)
    setList([...newList])
  }

  const isComplete = (index) => {
    const updatedList = list.map((todo, i)=> {
      if (index === i) {
        todo.complete = !todo.complete
        // const updatedTodo = {...todo, complete: !todo.complete}
        // return updatedTodo
      }
      return todo
    }) 

    setList(updatedList)
  }

  return (
    <div className="App">
      <form onSubmit={createTodo}>
        <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
        <div>
          <input type="submit" value="Add" />
        </div>
      </form>
      <div>
        {
          list.map((todo, index) => {
            const todoClasses = []
            if (todo.complete) {
              todoClasses.push("line-through")
            }

            return(
              <div>
                <input onChange={()=>{
                  isComplete(index)
                }} checked={todo.complete} type="checkbox" /> 
                <span className={todoClasses.join(" ")}>{todo.text}</span>
                <button onClick={()=>deleteTodo(index)}>Delete</button>
              </div>
            )
            }
          )
        }
      </div>
    </div>
  );
}

export default App;