import s from './index.module.css';
export const FriendList = ({ friends }) => {
  console.log(friends);
  return (
    <ul className={s.friend-list}>
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
