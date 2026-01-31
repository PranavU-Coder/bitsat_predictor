import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import matplotlib.pyplot as plt
import plotly.graph_objects as g_obj
import random

app = FastAPI()

origins = [
    "http://localhost:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/graph")
def get_graph(campus: int = 0, scenario: int = 0):
    y = [random.randint(1, 10) for _ in range(10)]

    fig = g_obj.Figure(
        data=g_obj.Bar(y=y, marker_color="red"),
        layout_title_text=f"{10} bars"
    )

    return fig.to_dict()

if __name__== "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)

