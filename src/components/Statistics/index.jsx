import s from './index.module.css';
export const Statistics = ({ stats }) => {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>Upload stats</h2>
      <ul className={s.statList}>
        {stats.map(item => (
          <li key={item.id} className={s.item}
          style={{backgroundColor: getRandomHexColor()}}
          >
            <span className={s.label}>{item.label}</span>
            <span className={s.percentage}>{item.percentage}%</span>
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
