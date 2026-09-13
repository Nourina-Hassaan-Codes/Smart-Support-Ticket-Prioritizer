from app.services.gemini_service import analyze_ticket


def process_ticket(ticket: str) -> dict:
    return analyze_ticket(ticket)
