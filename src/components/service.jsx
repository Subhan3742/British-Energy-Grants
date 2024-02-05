


function Service(){
  return(
    <>
    <div className="container-fluid service py-5">
      <div className="row">
        <div className="col text-center">
          <div>
            <h2 data-aos="fade-right">Our <span>Services</span></h2>
            <p>If your boiler is more than 15 years old  and you get benefits so you are eligible</p>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid service-slider text-center">
      <div className="row service-slider-row">
        <div className="col  ">
          <img 
          data-aos="fade-right"
          src="images/service-three.png"></img>
          
        
        </div>
        <div  data-aos="fade-up" className="col" >
        <img
       
        src="images/service-two.png"></img>
     
        </div>
        <div data-aos="fade-left" className="col ">
        <img src="images/service-one.png"></img>
  
        </div>
      </div>
      <div className="row service-slider-row">
        <div className="col">
          <p> Free boiler replacement, first time central heating , 
loft insulation, external wall insulation.</p>
        </div>
      </div>

    </div>


    </>
  )
}
export default Service;