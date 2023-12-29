import React, { useEffect, useState, useRef } from "react";
import "./PhotoDisplay.css";
import ImageCard from "../ImageCard/ImageCard";
import { dummyImages } from "../../assets/data/imageData";
const PhotoDisplay = () => {
  const [images, setImages] = useState([]); // State to manage uploaded images
  const imageRef = useRef(null);

  useEffect(() => {
    setImages(dummyImages);
  });
  const handleImageDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    // Filter and process only image files (assuming images are accepted)
    const imageFiles = droppedFiles.filter((file) =>
      file.type.startsWith("image/")
    );
    // console.log(imageFiles);
    // Process the image files and update state (for example: setImages(newImages))
    // You'll need to handle image upload logic here
  };
  const addImageHandler = (e) => {
    e.preventDefault();
    const img = imageRef.current.files[0];
    console.log(img);
    alert(`Image ${img.name} of size ${img.size} bytes`);
  };

  return (
    <div className="photo-display">
      <div
        className="image-dropper"
        onDrop={handleImageDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <form onSubmit={addImageHandler}>
          <input ref={imageRef} type="file" accept="image/*" />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="image-gallery">
        {images.map((image, index) => (
          <ImageCard key={index} image={image} />
        ))}
      </div>
    </div>
  );
};

export default PhotoDisplay;
