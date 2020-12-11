import { connect } from 'react-redux';
import Gallery from '../components/Gallery';
import { getPhotosById } from '../action';

const mapStateToProps = state => ({ 
  photos: state.Gallery.photos,
  error: state.Gallery.error,
  isLoading: state.Gallery.isLoading
});

const mapDispatchToProps = dispatch => {
  return {
    getPhotosById: id => dispatch(getPhotosById(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);