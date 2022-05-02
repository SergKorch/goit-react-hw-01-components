export const TransactionHistory = ({ items }) => {
  const total=1;
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
        {items.map(item => (
          <tr key={item.id} style={{backgroundColor: getColor(item.type)}}>
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
  if (type === "invoice") {
    return "green";
  } else if(type === "payment")
  {
    return "yellow";
  }
}
