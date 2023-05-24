import rectangle from './resource/pageAboutUs/rectangle.png';
import './AboutUs'

const AboutAs = () => {
  return (
    <body>
      

        <div class="elipse"></div>

        <div class="content">

          <div style={{gridColumn: 1}}>
            <img class="rectangle" src={rectangle}></img>
          </div>

          <div class="div_elements" style={{gridColumn: 2}}>
            <div class="label">About Us</div>
            <div class="title">Design Develop For Better Solution</div>

            <div class="brief_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo amet posuere
              porta vitae mi accumsan. Ultricies mauris, habitasse nec mauris sagittis imperdiet lobortis porttitor. Ipsum
              mi sed uta aliquet ut. Turpis viverra volutpat sed eu porta morbi egesta ut hac rutrum ut augue vitae, nec,
              ut. Nibh nibh quam.</div>

            <div style={{position: "absolute", top: "140%"}}>
              <button class="button">
                <text class="text_button">Learn More</text>
              </button>
            </div>


          </div>

        </div>
     
    </body>
  );
}

export default AboutAs;