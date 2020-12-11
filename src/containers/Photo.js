import { connect } from 'react-redux';
import Photo from '../components/Photo';

const mapStateToProps = state => ({ photos: state.Gallery.photos });

export default connect(mapStateToProps, null)(Photo);