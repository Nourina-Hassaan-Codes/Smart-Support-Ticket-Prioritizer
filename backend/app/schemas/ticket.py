from pydantic import BaseModel


class TicketRequest(BaseModel):
    ticket: str


class TicketResponse(BaseModel):
    priority: str
    reason: str
    suggested_reply: str
