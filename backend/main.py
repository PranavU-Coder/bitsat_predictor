from fastapi import FastAPI, Query, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import pandas as pd
import csv
import os

load_dotenv()

CORS_ORIGINS = [origin for origin in os.getenv("CORS_ORIGINS", "").split(",") if origin]

csvFiles = ["best_case.csv", "most_likely_case.csv", "worst_case.csv"]
campusDict = {"Pilani": 0, "Goa": 1, "Hyderabad": 2}
campusArr = ["Pilani", "Goa", "Hyderabad"]
dfs = []
tableData = [[] for _ in range(9)]

for year in range(2013, 2026):
    try:
        df = pd.read_csv(f"cutoffs/cutoff_{year}.csv")
        dfs.append(df)
    except FileNotFoundError:
        print(f"File cutoff_{year}.csv doesn't exist.")

if not dfs:
    raise RuntimeError("No cutoff CSV files found in cutoffs/ directory. Cannot start.")

df = pd.concat(dfs, ignore_index=True)
df["year"] = df["year"].astype(int)
df["marks"] = df["marks"].astype(int)

for case_idx in range(3):
    path = "predictions/" + csvFiles[case_idx]
    try:
        with open(path, newline="", encoding="utf-8") as csv_file:
            csv_reader = csv.reader(csv_file, delimiter=",")
            for row in csv_reader:
                if row[0] in campusDict:
                    campus_idx = campusDict[row[0]]
                    tableData[campus_idx * 3 + case_idx].append(row)
    except FileNotFoundError:
        print(f"Prediction file {path} not found, skipping.")

app = FastAPI()

origins = CORS_ORIGINS

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_df_by_campus(campus: int = 0):
    try:
        campus_name = campusArr[campus]
    except IndexError:
        raise HTTPException(status_code=400, detail="Invalid Campus Index")

    ndf = df[df["campus"] == campus_name][["year", "branch", "marks"]]
    return ndf


@app.get("/graph")
def get_graph(campus: int = Query(0, ge=0, le=2)):
    campus_data = get_df_by_campus(campus)

    branches = []
    for branch, values in campus_data.groupby("branch"):
        branches.append(
            {
                "name": branch,
                "years": values["year"].tolist(),
                "marks": values["marks"].tolist(),
            }
        )

    return {"branches": branches}


@app.get("/table")
def get_table(campus: int = Query(0, ge=0, le=2), scenario: int = Query(0, ge=0, le=2)):
    try:
        tableRows = tableData[campus * 3 + scenario]
    except IndexError:
        raise HTTPException(400, "Invalid Scenario or Campus index")

    return tableRows
