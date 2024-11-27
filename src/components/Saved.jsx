import React, { useState } from 'react';
import Loader from './Loader';

const Saved = ({ saved, loader, removeSelectedImages }) => {
  const [selectedImages, setSelectedImages] = useState([]);

  // Toggle selection of an image
  const toggleImageSelection = (id) => {
    if (selectedImages.includes(id)) {
      setSelectedImages(selectedImages.filter((imageId) => imageId !== id));
    } else {
      setSelectedImages([...selectedImages, id]);
    }
  };

  return (
    <>
      <div className="container-fluid text-center" id="top">
        {loader || saved.length === 0 ? (
          <Loader />
        ) : (
          <div className="flex mt-5">
            {saved.map((image) => (
              <div
                key={image.id}
                className={`items ${selectedImages.includes(image.id) ? 'selected' : ''}`}
                onClick={() => toggleImageSelection(image.id)}
                style={{ border: selectedImages.includes(image.id) ? '1px solid red' : 'none' }} 
              >
                <img src={image.src.medium} alt={image.photographer} />
              </div>
            ))}
          </div>
        )}
      </div>

      {saved.length > 0 && selectedImages.length > 0 && (
        <button
          className="btn btn-danger my-3 mx-3"
          onClick={() => {
            removeSelectedImages(selectedImages);
            setSelectedImages([]); 
          }}
        >
          Delete Selected
        </button>
      )}

      {saved.length !== 0 && (
        <a href="#top" className="btn btn-warning my-5">
          Back To Top
        </a>
      )}
    </>
  );
};

export default Saved;

