import PropTypes from 'prop-types';
import s from './transactions.module.css';
export const TransactionHistory = ({ items }) => {
  return (
    <table className={s.transactionHistorys}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id} style={{ backgroundColor: getColor(item.type) }}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
function getColor(type) {
  if (type === 'invoice') {
    return 'green';
  } else if (type === 'payment') {
    return 'yellow';
  } else if (type === 'deposit') {
    return 'brown';
  }
}
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
