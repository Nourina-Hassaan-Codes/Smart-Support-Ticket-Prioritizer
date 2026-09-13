function ReplySuggestion({ result }) {
  if (!result?.suggested_reply) {
    return null;
  }

  return (
    <div className="card result-section">
      <h2>AI Suggested Reply</h2>

      <div className="reply-box">
        {result.suggested_reply}
      </div>
    </div>
  );
}

export default ReplySuggestion;
