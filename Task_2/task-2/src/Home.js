import vector_1 from './resource/pageHome/vector_1.png';
import vector_2_1 from './resource/pageHome/vector_2_1.png';
import vector_3 from './resource/pageHome/vector_3.png';
import rectangle_1 from './resource/pageHome/rectangle_1.png';
import rectangle_2 from './resource/pageHome/rectangle_2.png';
import './styleHome.css';


const Home = () => {
  return (
    <>
      <div class="elipse"></div>

      <div class="content">
        <div class="div_elements" style={{ gridColumn: 1 }}>
          <div class="label">Creative work, creative mind</div>
          <div class="title">We Are Digital Creative Agency</div>

          <div class="brief_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabi sed metus id et
            viverra augue.</div>

          <button class="button">
            <text class="text_button">Get in Touch</text>
          </button>
        </div>

        <div class="div_rectangles" style={{ gridColumn: 2 }}>
          <img class="rectangle" style={{ gridColumn: 1 }} src={rectangle_1}></img>
          <img class="rectangle" style={{ gridColumn: 2 }} src={rectangle_2}></img>
        </div>

      </div>

      <div class="div_frames">

        <div class="frame_small" style={{ gridColumn: 1 }}>

          <div class="div_icon" style={{ background: "#F0BB1F" }}>
            <img src={vector_1}></img>
          </div>

          <div style={{ display: "grid" }}>
            <div class="text_for_frame_1">Design</div>
            <div class="text_for_frame_2">Lorem ipsum dolor sit amet, conse adipiscing elit. Curabi sed metus id et
              viverra augue.</div>
          </div>

        </div>

        <div class="frame_small" style={{ gridColumn: 2 }}>
          <div class="div_icon" style={{ background: "#F15A2B" }}>
            <img src={vector_2_1}></img>
          </div>

          <div style={{ display: "grid" }}>
            <div class="text_for_frame_1">Development</div>
            <div class="text_for_frame_2">Lorem ipsum dolor sit amet, conse adipiscing elit. Curabi sed metus id et
              viverra augue.</div>
          </div>
        </div>

        <div class="frame_small" style={{ gridColumn: 3 }}>
          <div class="div_icon" style={{ background: "#006380" }}>
            <img src={vector_3}></img>
          </div>

          <div style={{ display: "grid" }}>
            <div class="text_for_frame_1">Testing QA</div>
            <div class="text_for_frame_2">Lorem ipsum dolor sit amet, conse adipiscing elit. Curabi sed metus id et
              viverra augue.</div>
          </div>

        </div>
      </div>

    </>
  );
}

export default Home;