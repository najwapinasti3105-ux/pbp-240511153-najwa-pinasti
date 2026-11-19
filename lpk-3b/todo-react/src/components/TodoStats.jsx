
import './TodoStats.css'

function TodoStats({ todos }) {
  const total = todos.length
  const selesai = todos.filter(todo => todo.selesai).length
  const belum = total - selesai
  const progress = total === 0 ? 0 : Math.round((selesai / total) * 100)

  return (
    <div className="todo-stats">
      <div className="stats-info">
        <div>
          <span>Total Tugas</span>
          <strong>{total}</strong>
        </div>
        <div>
          <span>Selesai</span>
          <strong>{selesai}</strong>
        </div>
        <div>
          <span>Belum Selesai</span>
          <strong>{belum}</strong>
        </div>
      </div>

      <div className="progress-heading">
        <span>Progress Harian</span>
        <strong>{progress}%</strong>
      </div>

      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}

export default TodoStats
