from fastapi import APIRouter, HTTPException

from app.schemas.ticket import TicketRequest, TicketResponse
from app.services.ticket_service import process_ticket

router = APIRouter()


@router.post("/analyze", response_model=TicketResponse)
def analyze_support_ticket(request: TicketRequest):

    if not request.ticket.strip():
        raise HTTPException(
            status_code=400,
            detail="Ticket cannot be empty"
        )

    try:
        print("Analyzing ticket...")
        print("Ticket:", request.ticket)

        result = process_ticket(request.ticket)

        print("Gemini result:", result)

        return result

    except Exception as error:
        print("=" * 60)
        print("GEMINI ERROR:")
        print(repr(error))
        print("=" * 60)

        raise HTTPException(
            status_code=500,
            detail=f"AI analysis failed: {str(error)}"
        )