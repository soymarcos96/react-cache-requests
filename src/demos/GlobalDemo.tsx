import { useState } from "react";
import { useGlobalCache } from "../hooks/useGlobalCache";

// again, should be .env
const API_URL = "https://randomuser.me/api/";

export default function GlobalDemo() {
  //Needs to be typed better!
  const [data, setData] = useState<unknown>([]);
  const { fetchData, error, isLoading } = useGlobalCache();

  const fetchUsersWithCache = async () => {
    const data = await fetchData(API_URL);
    if (error) {
      alert(error);
    }
    setData(data);
  };

  const fetchUsersWithoutCache = async () => {
    const result = await fetch(API_URL);
    const json = await result.json();
    setData(json);
  };

  return (
    <div className="space-y-2">
      <div className="flex gap-8">
        <button onClick={fetchUsersWithCache} className={buttonStyle}>
          Fetch with global cache
        </button>
        <button onClick={fetchUsersWithoutCache} className={buttonStyle}>
          Fetch without cache
        </button>
        <button
          onClick={() => setData([])}
          className={buttonStyle + " bg-yellow-500"}
        >
          Reset data
        </button>
      </div>
      {isLoading && (
        <div className="animate-pulse text-gray-500">Loading...</div>
      )}
      <pre className="bg-gray-100 p-2 rounded text-sm h-48 overflow-auto">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}

const buttonStyle = `
  px-4 py-2 
  bg-green-500 
  text-white
  rounded-lg 
  cursor-pointer
`;
