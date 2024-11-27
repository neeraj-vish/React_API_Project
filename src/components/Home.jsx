import React from 'react';
import Loader from './Loader';
import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = ({ images, loader,setSaved,saved }) => {
  const savedImage=(img)=>{
    let flag=true;

    if(saved!==null && saved.length>0){

    for(let i=0; i<saved.length;i++){
      if(saved[i].id===img.id){
        flag=false
        //react-toastify
        toast.info('Image Already Saved!', {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          })
        break;
      }
    }
  }
 
    if(flag){
      setSaved([...saved, img]);
      toast.success(' Image Saved!', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });

    }
    
  }
  

    
  return (
    <>
    <ToastContainer></ToastContainer>
      <div className="container-fluid text-center" id="top">
        {loader ? (
          <Loader />
        ) : (
          <div className="flex">
            {images.map((image) => (
              <div key={image.id} className="items" onClick={()=>savedImage(image)}>
                <img src={image.src.medium} alt={image.photographer} />
              </div>
            ))}
          </div>
        )}
      </div>
      
      {images.length !== 0 && (
        <a href="#top" className="btn btn-warning my-5">
          Back To Top
        </a>
      )}
    </>
  );
};

export default Home;

