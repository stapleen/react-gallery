import React, { useState } from 'react';
import _ from 'lodash';

const Popup = ({ id, photos, close }) => {
  const [idPhoto, setIdPhoto] = useState(id);
  const [url, setUrl] = useState(_.find(photos, { id }).url);
  const [lastIndex] = useState(photos.length - 1);

  const handleNext = () => {
      const index = _.findIndex(photos, { id: idPhoto });
      const newIndex = (index + 1) > lastIndex ? 0 : index + 1;
      const { url, id } = photos[newIndex];

      setUrl(url);
      setIdPhoto(id);
  };

  const handlePrev = () => {
    const index = _.findIndex(photos, { id: idPhoto });
    const newIndex = (index - 1) < 1 ? lastIndex : index - 1;
    const { url, id } = photos[newIndex];

    setUrl(url);
    setIdPhoto(id);
  };

  return (
      <div className="popup">
              <div class="popup__close" onClick={close}>&times;</div>
              <img src={url} alt="popup image" className="popup__image" />
              <div className="popup__footer">
                  <button className="popup__footer__button" onClick={handleNext}>Вперед</button>
                  <button className="popup__footer__button" onClick={handlePrev}>Назад</button>
              </div>
      </div>
  );
}

export default Popup;