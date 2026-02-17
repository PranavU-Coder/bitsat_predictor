![License](https://img.shields.io/github/license/PranavU-Coder/bitsat_predictor)
![React Version](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Bundler-Vite-646CFF?logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6?logo=typescript&logoColor=white)
![Linter](https://img.shields.io/badge/Linter-ESLint-4B32C3?logo=eslint&logoColor=white)

# Introducing Bitsat-Predictor

This repository houses the general-purpose web application for bitsat-predictions and is a followup to [bitsatards-bot](https://github.com/PranavU-Coder/bitsatards_bot).This website provides a visual, accessible platform for predicting cutoffs based on past-year trends from 2013.

All the features of the bot have been carry-forwarded except for time-tracking.

The pages are deployed through Cloudflare and the server/backend is deployed on huggingface.

> [!NOTE]
> I would like to clarify that this acts more as a statistical-validator than a plain machine-learning model as not much variance factors and features have been computed yet (discussed below).

## Frontend Tech Stack

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.19-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-7.12.0-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Plotly.js](https://img.shields.io/badge/Plotly.js-3.3.1-3F4F75?style=for-the-badge&logo=plotly&logoColor=white)](https://plotly.com/javascript/)
[![Lucide React](https://img.shields.io/badge/Lucide_Icons-0.562.0-F87171?style=for-the-badge&logo=lucide&logoColor=white)](https://lucide.dev/)
[![ESLint](https://img.shields.io/badge/ESLint-9.39.1-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)

### Backend

[![Python](https://img.shields.io/badge/Python-3.12+-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://python.org)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.128.8-009688?style=for-the-badge&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![Pydantic](https://img.shields.io/badge/Pydantic-2.12.5-E92063?style=for-the-badge&logo=pydantic&logoColor=white)](https://docs.pydantic.dev/)
[![Uvicorn](https://img.shields.io/badge/Uvicorn-0.40.0-499848?style=for-the-badge&logo=gunicorn&logoColor=white)](https://www.uvicorn.org/)
[![Pandas](https://img.shields.io/badge/Pandas-3.0.0-150458?style=for-the-badge&logo=pandas&logoColor=white)](https://pandas.pydata.org/)
[![Plotly](https://img.shields.io/badge/Plotly-6.5.2-3F4F75?style=for-the-badge&logo=plotly&logoColor=white)](https://plotly.com/)
[![Python-Dotenv](https://img.shields.io/badge/python--dotenv-1.2.1-ECD53F?style=for-the-badge&logo=python&logoColor=black)](https://pypi.org/project/python-dotenv/)

## Future Plans

Now that the general-purpose website is live, the focus will shift back to improving the underlying prediction model. There are plans to experiment by finding causation and correlations with cutoffs of other entrance examinations such as JEE, the updates can be followed [here](https://bitsat-predictor-devlogs.pranavu.dev/)!

The dataset we are working with is available here: [dataset](!https://www.kaggle.com/datasets/pranavunni/bitsat-cutoff-dataset-2017-2025) for anyone willing to spin up their own models or visualizations.

> ## Contributing
>
> This project is developed hoping to be a community effort. If you'd like to improve the UI, optimize the charting, or add features.
>
> ---
>
> _Licensed under Apache 2.0_
