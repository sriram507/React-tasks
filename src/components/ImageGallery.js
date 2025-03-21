import React from "react";
import ImageModal from "./ImageModal";
import "./ImageGallery.css";

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = React.useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <div
          key={index}
          className="image-item"
          onClick={() => handleImageClick(image)}
        >
          <img src={image} alt={`Gallery item ${index}`} />
        </div>
      ))}
      {selectedImage && <ImageModal image={selectedImage} onClose={closeModal} />}
    </div>
  );
};

export default ImageGallery;

