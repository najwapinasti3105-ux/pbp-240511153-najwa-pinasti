
import './TodoList.css'

function TodoList({ todos, toggleSelesai, hapusTodo }) {
  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <div className="empty-state">
          <span>🌷</span>
          <p>Belum ada tugas hari ini.</p>
          <small>Yuk, mulai susun kegiatanmu!</small>
        </div>
      ) : (
        todos.map((todo) => (
          <div className="todo-item" key={todo.id}>
            <input
              type="checkbox"
              checked={todo.selesai}
              onChange={() => toggleSelesai(todo.id)}
            />

            <span className={todo.selesai ? 'completed' : ''}>
              {todo.teks}
            </span>

            <button
              className="delete-btn"
              onClick={() => hapusTodo(todo.id)}
            >
              Hapus
            </button>
          </div>
        ))
      )}
    </div>
  )
}

export default TodoList
