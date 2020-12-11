import { connect } from 'react-redux';
import Album from '../components/Album';

const mapStateToProps = state => ({ albums: state.Albums.albums, photoData: state.Albums.photoData });

export default connect(mapStateToProps, null)(Album);