function ServicePoster(){
  return(
    <div className="container-fluid main-service">
<div className="container poster-con">
  <div className="row">
    <div  data-aos="flip-left" className="col-sm-6 text-center">
    <img src="images/loft.png" width={"70%"} />
    <h2>Loft <span> Insulation</span></h2>
    </div>
    <div  className="col-sm-6 text-center" data-aos="flip-left">
    <img src="images/heating.png" width={"70%"} />
    <h2>Heating <span>Boiler</span></h2>
    </div>
  </div>
</div>
</div>
  )
}
export default ServicePoster;