import './css/Palette.css';
import notifySound from './src_notify.mp3'
import palletes from "./pallete.json"
import { Link } from "react-router-dom";

function Palette() {
    var palette = palletes.find(palette => palette.id === window.location.href.split("/").pop());
    return (
        <>
            <header>
                <Link to="/" className='back-button'>Back</Link>
            </header>
            <div>
                <div className='selected-color-panel'>
                    <div className='modal'>
                        <h1>Color is copied!</h1>
                        <button className='buttonClose' onClick={closeColorPanel}>Back to Palette</button>
                    </div>

                </div>
            </div>
            <div className='palette-colors'>
                {palette.colors.map(currentColor =>
                    <>
                        <div className='div-color' style={{ backgroundColor: currentColor.color }}>
                            <span>{currentColor.name}</span>
                            <div className='tooltip'>
                                <button className='buttonClose' id={currentColor.color} onClick={copyColor}>
                                    Copy Color
                                </button>
                            </div>

                        </div>
                    </>
                )}
            </div>
        </>
    );
}

const copyColor = event => {
    navigator.clipboard.writeText(event.currentTarget.id);
    new Audio(notifySound).play();

    const selectedColorPanel = document.querySelector(".selected-color-panel");
    selectedColorPanel.style.backgroundColor = event.currentTarget.id;
    selectedColorPanel.style.visibility = 'visible';
};

const closeColorPanel = event => {
    const selectedColorPanel = document.querySelector(".selected-color-panel");
    selectedColorPanel.style.visibility = 'hidden';
};

export default Palette;