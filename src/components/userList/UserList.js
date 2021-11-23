import styles from './UserList.module.css';
import UserListItem from './UserListItem';

const UserList = (props) => {

  return (
    <ul className={styles.list}>
      {props.userList.map(user => <UserListItem key={user.key} user={user} removeUserHandler={props.removeUserHandler} />)}
    </ul>
  );
};

export default UserList;
