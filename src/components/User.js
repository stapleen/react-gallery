import { withRouter } from "react-router-dom";

const User = ({ users, history }) => {
  return (
    <div className="users__list">
      {users.map((user) => 
        <button
        key={user.id}
        className="users__list__user"
        onClick={() => history.push(`/albums?user_id=${user.id}`)}
        >
          {user.name}
        </button>
      )}
    </div>
  )
}

export default withRouter(User);