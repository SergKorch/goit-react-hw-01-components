import PropTypes from 'prop-types';
import s from './index.module.css';
export const FriendList = ({ friends }) => {
  console.log(friends);
  return (
    <ul className={s.friendList}>
      {friends.map(friend => (
        <li key={friend.id} className={s.item}>
          <span
            className={s.status}
            style={{ backgroundColor: getColor(friend.isOnline) }}
          >
            {friend.isOnline}
          </span>
          <img
            className={s.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={s.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};
function getColor(status) {
  if (status) {
    return "green";
  } else {
    return "red";
  }
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      item: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
