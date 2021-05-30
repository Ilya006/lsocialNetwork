import Users from './UsersC';
import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC } from '../../Redax/users-reducer';


const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow:   (userId) => dispatch( followAC(userId) ),
    unfollow: (userId) => dispatch( unfollowAC(userId) ),
    setUsers: (users) =>  dispatch( setUsersAC(users) )
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);



export default UsersContainer;