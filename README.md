# 🔄 React Cache Experiments

A compact, educational project to explore different caching strategies in **React**.  
The aim is to understand how caching libraries like **React Query** and **SWR** work under the hood by building minimal, focused examples:

- a local-per-hook cache,
- a global cache using Context API,
- and a demo using a popular caching library.

---

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE) [![Vercel](https://img.shields.io/badge/deploy-vercel-black.svg)](https://vercel.com/)

> Quick demo app showing how data caching behaves in small, easy-to-read examples.

---

## Table of Contents

- [What's inside](#whats-inside)
- [Screenshots](#screenshots)
- [How caching works (flow)](#how-caching-works-flow)
- [Examples / Usage](#examples--usage)
  - [1 — Local cache (custom hook)](#1---local-cache-custom-hook)
  - [2 — Global cache (Context API)](#2---global-cache-context-api)
  - [3 — Using a library (SWR / React Query)](#3---using-a-library-swr--react-query)
- [Demo UI](#demo-ui)
- [Tech stack](#tech-stack)
- [Install & Run](#install--run)
- [Project structure](#project-structure)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Credits & Acknowledgements](#credits--acknowledgements)
- [Contact](#contact)

---

## What's inside

This repo contains three minimal demos that illustrate caching approaches:

- ✅ **Local cache** — `useLocalCache` (cache lives inside the hook / component instance)
- 🌍 **Global cache** — `CacheProvider` + `useCache` (shared cache via Context)
- ⚡ **Library demo** — example using **SWR** (or **React Query**) to compare behavior

Each demo uses the same endpoint (`https://randomuser.me/api/`) to keep outputs consistent for comparison.

---

## Screenshots

> Replace these placeholders with your actual screenshots inside `/assets`.

### Local cache demo

![Local cache demo screenshot](./assets/local-demo.png)

### Global cache demo

![Global cache demo screenshot](./assets/global-demo.png)

### Library demo (SWR / React Query)

![Lib demo screenshot](./assets/lib-demo.png)

---

## How caching works (flow)

Simple flowchart that explains the decision path for "fetch with cache" vs "fetch without cache".

```mermaid
flowchart TD
    UI[User clicks button] --> Fetch{Using cache?}
    Fetch -->|Yes| Cache[Check cache (Map / Context)]
    Cache -->|Hit| Data[Return cached data]
    Cache -->|Miss| API[Fetch from API]
    API --> Save[Save result in cache]
    Save --> Data
    Fetch -->|No| API2[Fetch directly from API]
    API2 --> Data
    Data --> UIUpdate[Update UI]
```
