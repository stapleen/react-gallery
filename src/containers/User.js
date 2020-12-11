import { connect } from 'react-redux';
import User from '../components/User';

const mapStateToProps = state => ({ users: state.Users.users });

export default connect(mapStateToProps, null)(User);