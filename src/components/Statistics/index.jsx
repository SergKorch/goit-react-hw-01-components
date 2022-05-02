export const Statistics = ({ stats }) => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
      <ul className="stat-list">
        {stats.map(item => (
          <li key={item.id} className="item" 
          style={{backgroundColor: getRandomHexColor()}}
          >
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
