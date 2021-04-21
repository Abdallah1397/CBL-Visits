import './Banner.scss';

const Banner=({image})=>{
    return(
        <div style={{backgroundImage:`url(${image})`,}} className="about-banner">
            </div>
    )
}
export default Banner;