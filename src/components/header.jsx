

function Header(){
  return(
    <nav className="navbar navbar-expand-lg ">
    <div className="container-fluid nav-con">
      <a className="navbar-brand text-center" href="#"><img src="/images/off-logo.png"></img></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasExampleLabel">British Energy Grants</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
        <ul className="navbar-nav nav-ul mb-2 mb-lg-0">
        <li className="nav-item nav-item-logo">
          <div className="nav-logo">
            <img src="images/off-logo.png"></img>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#"><img className="nav-phone" src="images/phone.png"></img> 07405264139</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#"><img  className="nav-location" src="images/map-marker.png">
              </img> 63 Hezelmere Road sl2 5pp
               </a>
          </li>
          
        </ul>
        </div>
        
      </div>
    </div>
  </nav>
  )
}
export default Header;