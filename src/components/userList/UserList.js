import styles from './UserList.module.css';
import UserListItem from './UserListItem';

const userList = (props) => {

  return (
    <ul className={styles.list}>
      {props.userList.map(user => <UserListItem key={user.key} user={user} />)}
    </ul>
  );
};

export default userList;
