import { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap"

function SideBarRight({ name, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const background = 'linear-gradient(90deg, rgba(131, 58, 180, 1) 0 %, rgba(253, 29, 29, 1) 50 %, rgba(252, 176, 69, 1) 100 %)'

    const [selectedColor, setSelectedColor] = useState(background);

    const handleColorChange = (e) => {
        const newColor = e.target.value;
        setSelectedColor(newColor);
        document.body.style.backgroundColor = newColor;
        document.getElementById("abc").style.backgroundColor = newColor
        document.getElementById("abcd").style.backgroundColor = newColor
        setShow(false)
    };

    const [fontSize, setFontSize] = useState(14);

    const increaseFontSize = () => {
        setFontSize((prevSize) => prevSize + 2);
        updateBodyFontSize(fontSize + 2);
    };

    const decreaseFontSize = () => {
        setFontSize((prevSize) => Math.max(prevSize - 2, 8));
        updateBodyFontSize(fontSize - 2);
    };

    const updateBodyFontSize = (size) => {
        // document.body.style.fontSize = `${size}px`;
        var allElements = document.getElementsByTagName('*')
        var newFontSize = `${size}px`;
        for (var i = 0; i < allElements.length; i++) {
            allElements[i].style.fontSize = newFontSize;
        }
    };

    return (
        <>
            <a class="sidebar-right-trigger wave-effect wave-effect-x" onClick={handleShow} data-bs-toggle="tooltip" data-placement="right" data-original-title="Change Layout" href="javascript:void(0);"><span><i class="fa fa-cog fa-spin"></i></span></a>

            <Offcanvas className='dilog-class' show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton style={{ background: 'blue', color: 'white' }}>
                    <Offcanvas.Title style={{ color: 'white' }}>Pick your style</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="backgroundset">
                        <div className="them">
                            <h3>Background Color Change</h3>
                            <div className="color-picker-container">
                                <input
                                    type="color"
                                    value={selectedColor}
                                    onChange={handleColorChange}
                                />
                            </div>
                        </div>
                        <div className="active-projects">
                            <h3>Font Size Change</h3>
                            <button className="dt-button-2  btn btn-sm border-0" onClick={decreaseFontSize}>A-</button>
                            <button className="dt-button-2 btn btn-sm border-0" onClick={increaseFontSize}>A+</button>
                        </div>
                    </div>

                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
export default SideBarRight