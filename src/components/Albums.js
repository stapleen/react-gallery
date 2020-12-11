import React, { useEffect, useContext } from 'react';
import { withRouter } from "react-router-dom";
import CircularProgress from './CircularProgress';
import Album from '../containers/Album';
import { TitleContext } from "../index";

const Albums = (props) => {
  const title = useContext(TitleContext).albums;

  const { getPhotos, getAlbumsById, photoData, albums, isLoading, error, history } = props;

  useEffect(() => {
    const urlParam = new URLSearchParams(window.location.search);
    const id = urlParam.get('user_id');
    getAlbumsById(id);
    getPhotos();
  }, []);

  const back = () => {
    history.push('/');
  }

  if (!isLoading && (!albums || !photoData)) {
    return <p className="title">{error}</p>;
  }

  return (
          <div className="container">
              <button className="container__button" onClick={back}>К списку авторов</button>
              <p className="title">{title}</p>
              { isLoading && <CircularProgress /> }
              { !isLoading && <Album /> }
          </div>
  );
}

export default withRouter(Albums);