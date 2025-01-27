import { Logo } from "./Logo";

const Navbar_Component = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <a className="navbar-brand" href="#">
            <Logo />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ms-5 " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item me-4">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link" href="#">
                  Shop
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link" href="#">
                  Mens
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link" href="#">
                  Pages
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              
            </ul>
            <div className="d-flex justify-content-center align-items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 576 512"><path opacity="1" fill="#1E3050" d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
            <p className="ms-3 me-3 ">2 Items</p>
            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
            </div>
          </div>
        </div>
      </nav>
    </>
    // <div>
    //   <div className="flex">
    //     <Logo />
    //     <div>
    //     <ul>
    //         <li className="Nav_Section_Li"><a className="Nav_Section_A" href="#">Home</a></li>
    //         <li className="Nav_Section_Li"><a className="Nav_Section_A" href="#">Shop</a></li>
    //         <li className="Nav_Section_Li"><a className="Nav_Section_A" href="#">Mens</a></li>
    //         <li className="Nav_Section_Li"><a className="Nav_Section_A" href="#">Pages</a></li>
    //         <li className="Nav_Section_Li"><a className="Nav_Section_A" href="#">Blog</a></li>
    //         <li className="Nav_Section_Li"><a className="Nav_Section_A" href="#">Contact</a></li>
    //     </ul>
    //     </div>
    //     <div style={{display: "flex", alignItems: "center"}}>
    //     <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 576 512"><path opacity="1" fill="#1E3050" d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
    //     <p style={{marginLeft: "10px",marginRight: "10px"}}>2 Items</p>
    //     <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>

    //     </div>
    //   </div>
    // </div>
  );
};

export { Navbar_Component };
