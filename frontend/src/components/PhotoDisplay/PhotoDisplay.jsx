import React, { useEffect, useState, useRef } from "react";
import "./PhotoDisplay.css";
import ImageCard from "../ImageCard/ImageCard";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage } from "../../redux/photos/uploadImageSlice";
import toast from "react-hot-toast";
// import { dummyImages } from "../../assets/data/imageData";
const PhotoDisplay = ({ images, userId }) => {
  const { success, error } = useSelector((state) => state.imageUpload);
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

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
  useEffect(() => {
    if (success) {
      toast.success("Image uploaded");
      window.location.reload();
    }
    if (error) {
      toast.error(error);
      window.location.reload();
    }
  }, [dispatch, success, error]);
  const addImageHandler = (e) => {
    e.preventDefault();
    if (!file) {
      console.error("Please select an image file");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);
    const data = { userId, image: formData };
    dispatch(uploadImage(data));
    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ": " + pair[1]);

    // }
  };

  return (
    <div className="photo-display">
      <div
        className="image-dropper"
        onDrop={handleImageDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <form onSubmit={addImageHandler}>
          <input onChange={handleFileChange} type="file" accept="image/*" />
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
