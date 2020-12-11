import { connect } from 'react-redux';
import Albums from '../components/Albums';
import { getPhotos, getAlbumsById } from '../action';

const mapStateToProps = state => ({ 
  albums: state.Albums.albums,
  photoData: state.Albums.photoData,
  error: state.Albums.error,
  isLoading: state.Albums.isLoading
});

const mapDispatchToProps = dispatch => {
  return {
    getPhotos: () => dispatch(getPhotos()),
    getAlbumsById: id => dispatch(getAlbumsById(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Albums);