import React, { useState, useEffect } from "react";
import "./App.css"; // Import CSS file


function Gallery() {
  const [pics] = useState([1, 2, 3, 4, 5, 6]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const select = (index) => {
    setSelectedIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) =>
        prevIndex === pics.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [pics.length]);

  return (
    <div id="app">
      <div id="thumbnails">
        {pics.map((p, index) => (
          <img
            key={index}
            src={`https://picsum.photos/200/300?random=${index}`}
            alt={`Image ${index}`}
            className={index === selectedIndex ? "selectedCar" : ""}
            onClick={() => select(index)}
          />
        ))}
      </div>
      <img
        id="selectedImage"
        src={`https://picsum.photos/200/300?random=${selectedIndex}`}
        alt={`Selected Image`}
        style={{ width: "100%" }}
      />
    </div>
  );
}

export default Gallery;
