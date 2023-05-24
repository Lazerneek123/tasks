import { Link } from "react-router-dom";
import './css/App.css';
import palletes from "./pallete.json"

function App() {
  return (
    <div>
      <header>
        <p>
          Colors UI
        </p>
      </header>
      <div class="palletes">
        {palletes.map(palette =>
          <div>
            <Link to={"/palette/" + palette.id}>
              <div class="colors">
                {palette.colors.map(currentColor =>
                  <div style={{ backgroundColor: currentColor.color }}></div>
                )}
              </div>
              {palette.paletteName}
              <span class="emoji">
                {palette.emoji}
              </span>
            </Link>
          </div>
        )}
      </div>

    </div>
  );
}

export default App;
