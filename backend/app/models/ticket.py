from dataclasses import dataclass


@dataclass
class Ticket:
    ticket: str
    priority: str
    reason: str
    suggested_reply: str
