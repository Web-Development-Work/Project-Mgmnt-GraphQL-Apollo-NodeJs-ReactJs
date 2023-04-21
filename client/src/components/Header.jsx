import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className='navbar bg-light mb-4 p-0'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>
          <div className='d-flex'>
            <img src="./logo.PNG" alt='logo' className='mr-2' />
            <div className="d-flex align-items-center">ProjectMgmt</div>
          </div>
        </Link>
      </div>
    </nav>
  );
}