import { useState } from "react";
import { useLocalCache } from "../hooks/useLocalCache";

// bad practice, but for study only!
// get this is .ENV
const API_URL = "https://randomuser.me/api/";

export default function LocalDemo() {
  //Needs type
  const [data, setData] = useState([]);
  const { fetchData, error, isLoading } = useLocalCache();

  const fetchUsersWithCache = async () => {
    const data = await fetchData(API_URL);

    if (error) {
      alert(error);
    }
    setData(data);
  };

  const fetchUsers = async () => {
    const result = await fetch(API_URL);
    const data = await result.json();
    setData(data);
  };

  return (
    <div className="space-y-2">
      <div className="flex gap-8">
        <button onClick={fetchUsersWithCache} className={buttonStyle}>
          Fetch with cache
        </button>
        <button onClick={fetchUsers} className={buttonStyle}>
          Fetch without cache
        </button>
        <button
          onClick={() => setData([])}
          className={buttonStyle + "bg-yellow-500"}
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
  bg-blue-500 
  text-white
  rounded-lg 
  cursor-pointer
`;
