import React from "react";
import "./ImageCard.css"; // Ensure correct file path for CSS styles

const ImageCard = ({ image }) => {
  const formatDate = (date) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  return (
    <div className="image-card">
      <img
        src={image.imgUrl}
        alt={`Uploaded on ${formatDate(image.uploadDate)}`}
      />
      <div className="image-details">
        <p>Size: {image.imgSize}</p>
        <p>Date Uploaded: {formatDate(image.uploadDate)}</p>
      </div>
    </div>
  );
};

export default ImageCard;
