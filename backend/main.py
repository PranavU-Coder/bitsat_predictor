import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import plotly.graph_objects as go
import csv

csvFiles = ["best_case.csv", "most_likely_case.csv", "worst_case.csv"]
campuses = ["Pilani", "Goa", "Hyderabad"]

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
def get_graph(campus: int = 0):
    x = list(range(1, 11))
    y = [3, 7, 4, 9, 6, 10, 8, 12, 11, 15]

    fig = go.Figure(
        go.Scatter(
            x=x,
            y=y,
            mode="lines+markers",
            name="Sample Line"
        )
    )

    fig.update_layout(
        template="plotly_dark",
        hovermode="x",
        xaxis=dict(
            showspikes=True,
            spikemode="across",
            spikesnap="cursor",
            spikethickness=1,
            spikecolor="rgba(255,255,255,0.6)"
        ),
        yaxis=dict(
            showspikes=True,
            spikemode="across",
            spikesnap="cursor",
            spikethickness=1,
            spikecolor="rgba(255,255,255,0.6)"
        ),
        margin=dict(l=20, r=20, t=30, b=30)
    )


    return fig.to_dict()


@app.get("/table")
def get_table(campus: int = 0, scenario: int = 0):
    path = "predictions/" + csvFiles[scenario]
    tableRows = []

    with open(path, newline='', encoding='utf-8') as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        for row in csv_reader:
            if(row[0] == campuses[campus]):
                tableRows.append(row)
    
    return tableRows



if __name__== "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)

