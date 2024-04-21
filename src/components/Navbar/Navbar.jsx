import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="navbar bg-base-100 w-lvw">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <Link className="btn btn-ghost text-xl" to='/'>NexTrove</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>About</a></li>
      <li>
      <div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button" className="" >Categories</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-56">
    <li><a>Headwear</a></li>
    <li><a>Clothing</a></li>
    <li><a>Footwear</a></li>
    <li><a>Activewear</a></li>
    <li><a>Accessories</a></li>
    <li><a>Jewelry</a></li>
    <li><a>Swimwear</a></li>
  </ul>
</div>
      </li>
      <li><a>AI Help</a></li>
    </ul>
  </div>
  <div className="navbar-end hidden md:block">
  <div className="form-control">
      <input type="text" placeholder="Search for products..." className="input input-bordered w-24 md:w-auto" />
    </div>
    </div>
  <div className="navbar-end">
    <Link className="btn m-2 p-3" to='/login'>Login</Link>
    <Link className="btn m-2 p-3" to='/signup'>Sign Up</Link>
  </div>
</div>
  )
}

export default Navbar