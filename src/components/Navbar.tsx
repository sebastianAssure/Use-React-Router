import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-teal-600 text-white px-6 py-4 shadow">
      <ul className="flex justify-center space-x-6 font-medium">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'underline underline-offset-4 text-white'
                : 'hover:underline'
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/books"
            className={({ isActive }) =>
              isActive
                ? 'underline underline-offset-4 text-white'
                : 'hover:underline'
            }
          >
            Books
          </NavLink>
        </li>
          <li>
          <NavLink
            to="/books-deprecated"
            className={({ isActive }) =>
              isActive
                ? 'underline underline-offset-4 text-white'
                : 'hover:underline'
            }
          >
            Test
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
