import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar.jsx'

function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-100">

      <div className="flex">
      {/* <Navbar /> */}
        <Sidebar />

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default MainLayout