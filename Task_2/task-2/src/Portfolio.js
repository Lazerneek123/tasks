import arrow from './resource/pagePortfolio/arrow.png';
import arrow2 from './resource/pagePortfolio/arrow_2.png';
import rectangle1 from './resource/pagePortfolio/rectangle_1.png';
import rectangle2 from './resource/pagePortfolio/rectangle_2.png';
import rectangle3 from './resource/pagePortfolio/rectangle_3.png';
import './Portfolio.css';

const AboutAs = () => {
  return (
    <>
     

    <div class="elipse"></div>

    <div class="content" style={{gridColumn: 2}}>
      <div class="div_elements" style={{gridColumn: 1}}>
        <div class="label_1">Portfolio</div>
        <div class="title">View Our Case Studies</div>

      </div>

      <div class="div_elements" style={{gridColumn: 2}}>
        <div class="brief_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo amet posuere
          porta vitae mi accumsan. Ultricies mauris, hab</div>
        <div style={{display: "grid", width: "120px;", height: "20px;", alignItems: "left", justifyContent: "flex-start"}}>
          <div class="label_2" style={{gridColumn: 1}}>VIEW All</div>
          <img class="rectangle" style={{gridColumn: 2}} src={arrow}></img>
        </div>
      </div>

    </div>

    <div class="div_frames" style={{gridColumn: 3}}>

      <div style={{display: "grid", gridColumn: 1}}>
        <img class="rectangle" src={rectangle1}></img>
        <button class="button">
          <img class="img_icon" src={arrow2}></img>
        </button>
        
      </div>

      <div style={{display: "grid", gridColumn: 2}}>
        <img class="rectangle" src={rectangle2}></img>
        <button class="button">
          <img class="img_icon" src={arrow2}></img>
        </button>
       
      </div>

      <div style={{display: "grid", gridColumn: 3}}>
        <img class="rectangle" src={rectangle3}></img>
        <button class="button">
          <img class="img_icon" src={arrow2}></img>
        </button>
      </div>
    </div>


 
</>
  );
}

export default AboutAs;