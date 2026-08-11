import { NavLink } from 'react-router-dom'

function Sidebar() {
  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-lg transition ${
      isActive
        ? 'bg-blue-600 text-white'
        : 'text-gray-700 hover:bg-gray-200'
    }`

  return (
    <aside className="w-56 min-h-screen bg-white border-r p-4">
      <nav className="flex flex-col gap-2">
        <NavLink to="/" end className={linkClass}>
          Dashboard
        </NavLink>

        <NavLink to="/users" className={linkClass}>  Users</NavLink>
        <NavLink to="/product" className={linkClass}>  Product</NavLink>
      </nav>
    </aside>
  )
}

export default Sidebar