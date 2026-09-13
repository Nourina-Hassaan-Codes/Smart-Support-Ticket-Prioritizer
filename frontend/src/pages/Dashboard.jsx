import { useState } from "react";
import TicketForm from "../components/TicketForm";
import PriorityCard from "../components/PriorityCard";
import ReplySuggestion from "../components/ReplySuggestion";
import TicketHistory from "../components/TicketHistory";
import { useTicket } from "../hooks/useTicket";

function Dashboard() {
  const { result, loading, error, analyze } = useTicket();
  const [history, setHistory] = useState([]);

  const handleAnalyze = async (ticket) => {
    const data = await analyze(ticket);

    if (data) {
      setHistory((previous) => [
        {
          ticket,
          priority: data.priority
        },
        ...previous
      ]);
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Smart Support AI</h1>
        <p>AI-powered support ticket prioritization</p>
      </header>

      <main className="dashboard">
        <div className="grid">
          <TicketForm
            onAnalyze={handleAnalyze}
            loading={loading}
          />

          <PriorityCard result={result} />
        </div>

        {error && <p className="error">{error}</p>}

        <ReplySuggestion result={result} />

        <TicketHistory history={history} />
      </main>
    </div>
  );
}

export default Dashboard;
