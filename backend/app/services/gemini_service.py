import json
import os

from dotenv import load_dotenv
from google import genai


load_dotenv()

API_KEY = os.getenv("GEMINI_API_KEY")

client = genai.Client(
    api_key=API_KEY
) if API_KEY else None


def analyze_ticket(ticket: str) -> dict:

    if not client:
        return {
            "priority": "medium",
            "reason": "Gemini API key is not configured yet.",
            "suggested_reply": (
                "Thank you for contacting support. "
                "Our team is reviewing your request and will get back to you shortly."
            )
        }

    prompt = f"""
You are an expert customer support AI.

Analyze the following support ticket.

Ticket:
{ticket}

Return ONLY valid JSON using exactly these fields:

{{
  "priority": "critical | high | medium | low",
  "reason": "short explanation",
  "suggested_reply": "professional customer support response"
}}

Rules:
- critical = outage, security incident, major financial issue, or many users affected
- high = important issue blocking a customer
- medium = normal support issue
- low = minor question or request
"""

    response = client.models.generate_content(
        model="gemini-3.6-flash",
        contents=prompt
    )

    text = response.text.strip()

    if text.startswith("```"):
        text = text.replace("```json", "")
        text = text.replace("```", "")
        text = text.strip()

    return json.loads(text)
