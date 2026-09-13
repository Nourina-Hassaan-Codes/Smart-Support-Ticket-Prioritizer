from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.routes.tickets import router as ticket_router


app = FastAPI(
    title="Smart Support Ticket Prioritizer",
    version="1.0.0"
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(
    ticket_router,
    prefix="/api/tickets",
    tags=["Tickets"]
)


@app.get("/")
def root():
    return {
        "message": "Smart Support Ticket Prioritizer API is running"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }
