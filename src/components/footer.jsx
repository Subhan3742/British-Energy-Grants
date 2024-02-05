function Footer(){
  return(
    <div className="container-fluid text-center" id="Footer">
      <div className="row footer-row1 ">
        <div className="col-md-4 footer-logo">
            <div className="text-center ">
              <img src="/images/footer-logo.png"></img>
            
            </div>
        </div>
        <div className="col-md-4">
          <h2>Contact</h2>
          <p>07405264139</p>
          
          </div>
          <div className="col-md-4">
          <h2>Address</h2>
          <p>63 hezelmere road sl2 5pp</p>
          </div>
          
      </div>
      <div className="row footer-button-row">
        <div className="col text-end">
        <a href="#form">  <button className="btn btn-primary" >Go To Form</button></a>
        </div>
      </div>
      <div className="row footer-row-2">
        <div className="col footer-col-2">
          <h5>Copyright 2024 British energy grants</h5>
         
        </div>
      </div>
    </div>
  )
}

export default Footer;