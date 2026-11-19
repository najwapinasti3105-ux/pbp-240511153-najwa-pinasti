
import './TodoForm.css'

function TodoForm({ input, setInput, tambahTodo }) {
  return (
    <form className="todo-form" onSubmit={tambahTodo}>
      <input
        type="text"
        placeholder="Apa yang ingin kamu kerjakan hari ini?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">+ Tambah</button>
    </form>
  )
}

export default TodoForm
