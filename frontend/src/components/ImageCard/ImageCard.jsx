import React, { useState } from "react";
import "./ImageCard.css"; // Ensure correct file path for CSS styles
import ImagePreviewModal from "../modals/image-preview-modal";

import LongMenu from "./Menu";
const ImageCard = ({ image }) => {
  const [openModal, setOpenModal] = useState(false);
  const formatDate = (date) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(date).toLocaleDateString(undefined, options);
  };
  const onOpenModal = () => {
    setOpenModal(true);
  };
  const onCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      <ImagePreviewModal
        open={openModal}
        onClose={onCloseModal}
        imgUrl={image.imgUrl}
      />
      <div className="image-card" onClick={onOpenModal}>
        <img
          src={image.imgUrl}
          alt={`Uploaded on ${formatDate(image.uploadDate)}`}
        />

        <div className="image-details">
          <p>Size: {image.imgSize}</p>
          <p>Date Uploaded: {formatDate(image.uploadDate)}</p>
          <LongMenu />
        </div>
      </div>
    </>
  );
};

export default ImageCard;
