import { useState } from "react";
import "./App.css";

function App() {
    const qrImageBox = document.getElementById("qr-image-box");
    const qrImage = document.getElementById("qr-image");

    const [userInput, setUserInput] = useState("");

    const handleInputChange = (event) => setUserInput(event.target.value);

    const handleImageGenerator = () => {
        if (userInput.length > 0) {
            qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${userInput}`;
            qrImageBox.classList.add("show-qr");
        } else {
            alert("Please enter something!");
        }
    };

    return (
        <>
            <div className="container">
                <div className="qr-box">
                    <p>Enter text or url</p>
                    <input
                        type="text"
                        id="text-input"
                        onChange={handleInputChange}
                    />
                    <div id="qr-image-box">
                        <img src="" alt="qr-code" id="qr-image" />
                    </div>
                    <button onClick={handleImageGenerator}>
                        Generate QR Code
                    </button>
                </div>
            </div>
        </>
    );
}

export default App;
