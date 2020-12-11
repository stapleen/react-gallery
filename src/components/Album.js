import { withRouter } from "react-router-dom";

const Album = ({ albums, photoData, history }) => {
  return (
    <div className="container__elements">
      {albums.map((album) => (
        <div className="container__elements__element" key={album.id}>
                <div className="container__elements__element__image" 
                  onClick={() => history.push(`/gallery?album_id=${album.id}`)}
                >
                  <img src={photoData[album.id][0].thumbnailUrl} alt={album.title}/>
                </div>
            <p className="container__elements__element__info">
              {album.title}, {photoData[album.id].length} шт. 
            </p>
        </div>
      ))}
    </div>
  );
}

export default withRouter(Album);