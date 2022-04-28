import user from './json-hw/user.json';
import data from './json-hw/data.json';
import friends from './json-hw/friends.json';
import transactions from './json-hw/transactions.json';
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
        title="Upload stats"
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

export const Profile = () => {
  return (
    <div class="profile">
      <div class="description">
        <img src={user.avatar} alt="User avatar" class="avatar" width="100" />
        <p class="name">{user.username}</p>
        <p class="tag">{user.tag}</p>
        <p class="location">{user.location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">1000</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">2000</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">3000</span>
        </li>
      </ul>
    </div>
  );
};

export const Statistics = () => {
  return data.map(
    stats =>
   (
   <section class="statistics">
     {/*  <h2 class="title">Upload stats</h2>*/}
      <ul class="stat-list"> 
        <li class="item">
          <span class="label">{stats.label}</span>
          <span class="percentage">{stats.percentage}</span>
        </li>
      </ul>
    </section>
  ))
};

export const FriendList = () => {
  return (
    <ul class="friend-list">
      <li class="item">
        <span class="status">{friends[0].isOnline}</span>
        <img
          class="avatar"
          src={friends[0].avatar}
          alt="User avatar"
          width="48"
        />
        <p class="name">{friends[0].name}</p>
      </li>
    </ul>
  );
};

export const TransactionHistory = () => {
  return (
    <table class="transaction-history">
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
