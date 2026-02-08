import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import plotly.graph_objects as go
import pandas as pd
import csv

csvFiles = ["best_case.csv", "most_likely_case.csv", "worst_case.csv"]
campuses = ["Pilani", "Goa", "Hyderabad"]
dfs = []

for year in range(2013, 2026):
    df = pd.read_csv(f"cutoffs/cutoff_{year}.csv")
    dfs.append(df)

df = pd.concat(dfs, ignore_index=True)
df["year"] = df["year"].astype(int)
df["marks"] = df["marks"].astype(int)

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

def get_df_by_campus(campus: int = 0):
    ndf = df[df["campus"]==campuses[campus]].iloc[:, -3:]
    return ndf

@app.get("/graph")
def get_graph(campus: int = 0):

    campus_data = get_df_by_campus(campus)

    fig = go.Figure()

    for branch, values in campus_data.groupby("branch"):
        fig.add_trace(go.Scatter(
            x=values["year"],
            y=values["marks"],
            mode="lines+markers",
            name=branch
        )
    )

    fig.update_layout(
        legend_title="Branches",
        template="plotly_dark"
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
        margin=dict(l=20, r=20, t=30, b=30)
    )

    fig.update_xaxes(
        tickmode="linear",
        dtick=1,
        title="Year"
    )

    fig.update_yaxes(
        title="Marks"
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

