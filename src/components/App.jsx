import user from './json-hw/user.json';
import data from './json-hw/data.json';
import friends from './json-hw/friends.json';
import transactions from './json-hw/transactions.json';
import { Profile } from './Profile/index';
import { Statistics } from './Statistics/index';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        textTransform: 'uppercase',
        color: '#010101',
      }}
    >
      {/* <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      /> */}
       <Statistics
        stats={data}
      />
      {/*<FriendList
      friends={friends}
      />
      <TransactionHistory
      items={transactions}
      /> */}
    </div>
  );
};

export const FriendList = () => {
  return (
    <ul className="friend-list">
      <li className="item">
        <span className="status">{friends[0].isOnline}</span>
        <img
          className="avatar"
          src={friends[0].avatar}
          alt="User avatar"
          width="48"
        />
        <p className="name">{friends[0].name}</p>
      </li>
    </ul>
  );
};

export const TransactionHistory = () => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Invoice</td>
          <td>125</td>
          <td>USD</td>
        </tr>
        <tr>
          <td>Withdrawal</td>
          <td>85</td>
          <td>USD</td>
        </tr>
      </tbody>
    </table>
  );
};
