import { useState } from "react";

function TicketForm({ onAnalyze, loading }) {
  const [ticket, setTicket] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!ticket.trim()) return;

    onAnalyze(ticket);
  };

  return (
    <div className="card">
      <h2>Support Ticket</h2>

      <p>
        Paste a customer support ticket below and let AI analyze its priority.
      </p>

      <form onSubmit={handleSubmit}>
        <textarea
          value={ticket}
          onChange={(event) => setTicket(event.target.value)}
          placeholder="Example: My payment was deducted but my order was not created..."
        />

        <button
          className="primary-btn"
          type="submit"
          disabled={loading || !ticket.trim()}
        >
          {loading ? "Analyzing..." : "Analyze Ticket"}
        </button>
      </form>
    </div>
  );
}

export default TicketForm;
