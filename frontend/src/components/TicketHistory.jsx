function TicketHistory({ history }) {
  if (!history.length) return null;

  return (
    <div className="card result-section">
      <h2>Recent Tickets</h2>

      {history.map((item, index) => (
        <div key={index}>
          <strong>{item.priority}</strong>
          <p>{item.ticket}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default TicketHistory;
