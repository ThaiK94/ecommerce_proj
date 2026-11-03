import reactLogo from "../../assets/react.svg";

export const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container-fluid">
        <a href="#" className="navbar-brand mb-0 h1">
          <img
            src={reactLogo}
            alt="logo"
            width={50}
            height={50}
            style={{ paddingRight: "15px" }}
          />
          Ecommerce
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav flex-row gap-3 ms-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Product
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Cart
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Sign in
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
