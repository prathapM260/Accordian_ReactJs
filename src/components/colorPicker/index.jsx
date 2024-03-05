// eslint-disable-next-line
import React from "react";
import "./hexRgb.css";

const RandomColor = () => {
    const [typeOfColor, setTypeOfColor] = React.useState("hex"); // Changed to React.useState
    const [color, setColor] = React.useState("#000000"); // Changed to React.useState

    function randomColorUtility(length) {
        return Math.floor(Math.random() * length);
    }

    function handleCreateRanHexColor() {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";
        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)];
        }
        setColor(hexColor);
    }

    function handleCreateRanRgbColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const rgbColor = `rgb(${r},${g},${b})`;
        setColor(rgbColor);
    }

    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            background: color
        }}>
            <div className="center">
                <button onClick={() => setTypeOfColor("hex")}>Create Hex Colour</button>
            <button onClick={() => setTypeOfColor("rgb")}>Create RGB Colour</button>
            <button onClick={typeOfColor === "hex" ? handleCreateRanHexColor : handleCreateRanRgbColor}>Create Random Colour</button>
            </div>
            <div style={{display:"flex",
                            justifyContent:"center",
                            alignItems:"center", // Corrected typo here
                            color:"white",
                            fontSize:"30px",
                            marginTop:"10",
                            flexDirection:"column"
                        
                        }}>

                <h3>{typeOfColor==="rgb"?"RGB colour":"Hex Color"}</h3> {/* Corrected typo here */}
                <h3>{color}</h3>
            </div>
        </div>
    );
}

export default RandomColor;
