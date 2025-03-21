import React, { useState } from "react";
import ImageGallery from "./components/ImageGallery";
import ReactPaginate from "react-paginate";
import "./App.css";

const images = [
  { src: "./assets/images/0616gallery07.jpg", tag: "nature" },
  { src: "./assets/images/20-1y8a1871-1-1.jpg", tag: "city" },
  { src: "./assets/images/642be6d5819ba57ac2248f1ed1f63df1.jpg", tag: "nature" },
  { src: "./assets/images/Beautiful-lake-world-gallery-1920x1080-wallpapers.jpg", tag: "animals" },
  { src: "./assets/images/communities-wellbeing-teaser-ngc-galleries-lifestyle-800x475.jpg", tag: "city" },
  { src: "./assets/images/frida-art-house-takshan.jpg", tag: "nature" },
  { src: "./assets/images/gallery-1280x800-2.jpg", tag: "animals" },
  { src: "./assets/images/Gallery_New_ (7).jpg", tag: "city" },
];

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPage = 6;

  // Filter images based on search query
  const filteredImages = images.filter((image) =>
    image.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const pageCount = Math.ceil(filteredImages.length / imagesPerPage);
  const offset = currentPage * imagesPerPage;
  const currentImages = filteredImages.slice(offset, offset + imagesPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  // Image upload handler
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        images.unshift({ src: reader.result, tag: "uploaded" });
        setSearchQuery(""); // Reset search query to show the new image
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="App">
      <h1>Image Gallery</h1>
      <input
        type="text"
        placeholder="Search by tag..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <ImageGallery images={currentImages.map((img) => img.src)} />
      <ReactPaginate
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        activeClassName="active"
      />
    </div>
  );
}

export default App;

