function PriorityCard({ result }) {
  if (!result) {
    return (
      <div className="card">
        <h2>AI Analysis</h2>
        <p>Submit a ticket to see the AI analysis.</p>
      </div>
    );
  }

  const priority = result.priority?.toLowerCase() || "medium";

  return (
    <div className="card">
      <h2>AI Analysis</h2>

      <p>
        <strong>Priority:</strong>
      </p>

      <span className={`priority ${priority}`}>
        {result.priority}
      </span>

      <div className="result-section">
        <h3>Reason</h3>
        <p>{result.reason}</p>
      </div>
    </div>
  );
}

export default PriorityCard;
