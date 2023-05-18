import { Link } from "react-router-dom";
import logo from "../../../assets/Toyhouse-Logo.png";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <div className=" bg-base-100 shadow-2xl">
      <div className=" container">
        <div className="navbar h-28">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link>Home</Link>
                </li>
                <li>
                  <Link to="/alltoys">All Toys</Link>
                </li>
                <li>
                  <Link to="/blog">Blogs</Link>
                </li>

                {user?.email ? (
                  <>
                    <li>
                      <Link to="/addtoys">Add Toy</Link>
                    </li>
                    <li>
                      <Link to="/mytoys">My Toys</Link>
                    </li>
                    <li>
                      <button onClick={handleLogOut}>Log out</button>
                    </li>
                    {user && (
                      <img
                        className="w-10 h-10 rounded-full"
                        src={user.photoURL}
                        alt=""
                      />
                    )}
                  </>
                ) : (
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                )}
              </ul>
            </div>
            <Link className="w-20" to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link to="/alltoys">All Toys</Link>
              </li>
              <li>
                <Link to="/blog">Blogs</Link>
              </li>

              {user?.email ? (
                <>
                  <li>
                    <Link to="/addtoys">Add Toy</Link>
                  </li>
                  <li>
                    <Link to="/mytoys">My Toys</Link>
                  </li>

                  <li>
                    <button onClick={handleLogOut}>Log out</button>
                  </li>
                  {user && (
                      <img
                        className="w-10 h-10 rounded-full"
                        src={user.photoURL}
                        alt=""
                      />
                    )}
                </>
              ) : (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              )}
            </ul>
          </div>
          <div className="navbar-end">
            <button className="ml-2 btn">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
