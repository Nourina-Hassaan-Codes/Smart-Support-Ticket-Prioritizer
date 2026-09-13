import { useState } from "react";
import { analyzeTicket } from "../services/api";

export function useTicket() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const analyze = async (ticket) => {
    try {
      setLoading(true);
      setError("");

      const data = await analyzeTicket(ticket);
      setResult(data);

      return data;
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    result,
    loading,
    error,
    analyze
  };
}
