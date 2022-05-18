import PropTypes from 'prop-types';
import s from './friends.module.css';
export const FriendList = ({friends}) => {
  return (
    <ul className={s.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id} className={s.item}>
          <span
            className={s.status}
            style={{ backgroundColor: getColor(isOnline) }}
          >
            {isOnline}
          </span>
          <img
            className={s.avatar}
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <p className={s.name}>{name}</p>
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
      id: PropTypes.number.isRequired,
    })
  ),
};