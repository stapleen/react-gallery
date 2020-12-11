import React, {useState, useEffect, useContext } from 'react';
import CircularProgress from './CircularProgress';
import Popup from '../containers/Popup';
import Photo from '../containers/Photo';
import { TitleContext } from "../index";

const Gallery = (props) => {
  const title = useContext(TitleContext).users;

  const { getPhotosById, isLoading, photos, error } = props;

  const [isPopupVisible, setPopupVisible] = useState(false);
  const [idPhoto, setIdPhoto] = useState(null);

  useEffect(() => {
    const urlParam = new URLSearchParams(window.location.search);
    const id = urlParam.get('album_id');

    getPhotosById(id);
  }, []);

  const openPopUp = (id) => {
    setPopupVisible(true);
    setIdPhoto(id);
  };

  const closePopUp = () => {
    setPopupVisible(false);
  };

  const goBack = () => window.history.back();

  if (!isLoading && !photos) {
    return <p className="title">{error}</p>;
  }

  return (
    <div className="container">
      <button className="container__button" onClick={goBack}>К списку альбомов</button>
      <p className="title">{title}</p>
      { isLoading && <CircularProgress /> }
      { !isLoading
        && <>
            { isPopupVisible && <Popup id={idPhoto} close={closePopUp} /> }
            <Photo openPopUp={openPopUp} />
        </>
      }
    </div>
  );
}

export default Gallery;