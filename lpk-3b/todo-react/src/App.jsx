
import { useState, useEffect } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoStats from './components/TodoStats'
import './App.css'

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos')
    return saved ? JSON.parse(saved) : []
  })

  const [input, setInput] = useState('')

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const tambahTodo = (e) => {
    e.preventDefault()
    if (!input.trim()) return

    setTodos([
      ...todos,
      {
        id: Date.now(),
        teks: input.trim(),
        selesai: false
      }
    ])

    setInput('')
  }

  const toggleSelesai = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id
        ? { ...todo, selesai: !todo.selesai }
        : todo
    ))
  }

  const hapusTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <main className="page">
      <section className="app-container">
        <header className="app-header">
          <span className="header-label">MY DAILY PLANNER</span>
          <h1>Bloom Task <span>🌷</span></h1>
          <p>Rencanakan harimu, wujudkan hal hebat.</p>
        </header>

        <TodoStats todos={todos} />

        <div className="section-title">
          <h2>Daftar Kegiatan</h2>
          <span>Make today count ♡</span>
        </div>

        <TodoForm
          input={input}
          setInput={setInput}
          tambahTodo={tambahTodo}
        />

        <TodoList
          todos={todos}
          toggleSelesai={toggleSelesai}
          hapusTodo={hapusTodo}
        />

        <footer className="app-footer">
          Made with love ♡ One step at a time.
        </footer>
      </section>
    </main>
  )
}

export default App
