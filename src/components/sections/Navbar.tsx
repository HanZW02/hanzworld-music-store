import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><Link href="#">About Us</Link></li>
            <li>
              <a>Product</a>
              <ul className="p-2">
                <li><Link href="#">Guitar</Link></li>
                <li><Link href="#">Bass</Link></li>
                <li><Link href="#">Piano</Link></li>
              </ul>
            </li>
            <li><Link href="#">Contacts</Link></li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl font-bold text-primary">HanZWorld</Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="#">About Us</Link></li>
          <li>
            <details>
              <summary>Product</summary>
              <ul className="p-2 w-40 z-10 bg-base-100 shadow-lg">
                <li><Link href="#">Guitar</Link></li>
                <li><Link href="#">Bass</Link></li>
                <li><Link href="#">Piano</Link></li>
              </ul>
            </details>
          </li>
          <li><Link href="#">Contacts</Link></li>
        </ul>
      </div>
      
      <div className="navbar-end">
        <a className="btn btn-primary">Login / Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;