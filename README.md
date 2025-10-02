# 🔄 React Cache Experiments

A small project to explore different caching strategies in **React**.  
The goal is to understand how libraries like **React Query** or **SWR** work under the hood, starting from simple custom hooks to more global solutions.

---

## 📚 What’s inside?

This project shows different approaches to caching:

- ✅ **Local cache with a custom hook** – `useLocalCache`
- 🌍 **Global cache with Context API** – share data across components
- ⚡ **Library-based caching** – compare with `react-query` or `swr`

---

## 🖥️ Screenshots

### Local cache demo

![Local cache demo screenshot](./assets/local-demo.png)

### Without cache

![Without cache demo screenshot](./assets/no-cache.png)

---

## 🔄 How caching works (simple flow)

```mermaid
flowchart TD
    UI[User clicks button] --> Fetch{Fetch with cache?}
    Fetch -->|Yes| Cache[Check local cache]
    Cache -->|Hit| Data[Return cached data]
    Cache -->|Miss| API[Fetch from API]
    API --> Save[Save result in cache]
    Save --> Data
    Fetch -->|No| API2[Fetch directly from API]
    API2 --> Data
    Data --> UIUpdate[Update UI]
```
