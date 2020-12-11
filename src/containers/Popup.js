import { connect } from 'react-redux';
import Popup from '../components/Popup';

const mapStateToProps = state => ({ photos: state.Gallery.photos });

export default connect(mapStateToProps, null)(Popup);