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
      <Profile
        // username={user.username}
        // tag={user.tag}
        // location={user.location}
        // avatar={user.avatar}
        // stats={user.stats}
      />
      <Statistics
        title="Upload stats"
        // stats={data}
      />
      <Statistics
      // stats={data}
      />
      <FriendList
      // friends={friends}
      />
      <TransactionHistory 
      // items={transactions} 
      />;
      ;
    </div>
  );
};

export const Profile = () => {
  return (
    <div class="profile">
      <div class="description">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="User avatar"
          class="avatar"
          width="300"
        />
        <p class="name">Petra Marica</p>
        <p class="tag">@pmarica</p>
        <p class="location">Salvador, Brasil</p>
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
  return (
    <section class="statistics">
      <h2 class="title">Upload stats</h2>

      <ul class="stat-list">
        <li class="item">
          <span class="label">.docx</span>
          <span class="percentage">4%</span>
        </li>
        <li class="item">
          <span class="label">.mp3</span>
          <span class="percentage">14%</span>
        </li>
        <li class="item">
          <span class="label">.pdf</span>
          <span class="percentage">41%</span>
        </li>
        <li class="item">
          <span class="label">.mp4</span>
          <span class="percentage">12%</span>
        </li>
      </ul>
    </section>
  );
};

export const FriendList = () => {
  return (
    <li class="item">
      <span class="status"></span>
      <img class="avatar" src="" alt="User avatar" width="48" />
      <p class="name"></p>
    </li>
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
