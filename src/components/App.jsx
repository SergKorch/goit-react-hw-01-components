import user from './json-hw/user.json';
import data from './json-hw/data.json';
import friends from './json-hw/friends.json';
import transactions from './json-hw/transactions.json';
import { Profile } from './Profile/index';
import { Statistics } from './Statistics/index';
import { FriendList } from './Friends/index';
import { TransactionHistory } from './Transactions/index';

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
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      {/* <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} /> */}
    </div>
  );
};
