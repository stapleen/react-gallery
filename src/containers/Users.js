import { connect } from 'react-redux';
import Users from '../components/Users';
import { getUsers } from '../action';

const mapStateToProps = state => ({ 
  users: state.Users.users,
  error: state.Users.error,
  isLoading: state.Users.isLoading
});

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(getUsers())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);