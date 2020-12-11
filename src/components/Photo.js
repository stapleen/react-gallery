const Photo = ({ photos, openPopUp }) => {
  return (
    <div className="container__elements">
      {photos.map((photo) => (   
        <div className="container__elements__element" key={photo.id}>
          <div className="container__elements__element__image">
            <img
              src={photo.thumbnailUrl}
              alt={photo.title}
              onClick={() => openPopUp(photo.id)}
            />
          </div>
          <p className="container__elements__element__info">{photo.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Photo;