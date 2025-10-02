import { useState } from "react";
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

// bad practice: should be in .env
const API_URL = "https://randomuser.me/api/";

const useUsersQuery = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(API_URL);
      return res.json();
    },
    staleTime: 1000 * 60, // 1 min cache
  });
};

//Learning purpose only! this component structure is insane!
export default function ReactQueryDemo() {
  return (
    <QueryClientProvider client={queryClient}>
      <Children />
    </QueryClientProvider>
  );
}

function Children() {
  const [users, setUsers] = useState([]);
  const { data, isLoading, error, refetch } = useUsersQuery();

  const fetchWithoutCache = async () => {
    const result = await fetch(API_URL);
    const json = await result.json();
    setUsers(json);
  };

  return (
    <div className="space-y-2 p-4">
      <div className="flex gap-4 flex-wrap">
        <button onClick={() => refetch()} className={buttonStyle}>
          Fetch with React Query (cache)
        </button>
        <button onClick={fetchWithoutCache} className={buttonStyle}>
          Fetch without cache
        </button>
        <button
          onClick={() => setUsers([])}
          className={`${buttonStyle} bg-yellow-500`}
        >
          Reset no-cache data
        </button>
      </div>

      {isLoading && (
        <div className="animate-pulse text-gray-500">Loading...</div>
      )}
      {error && <div className="text-red-500">Error loading data</div>}

      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="font-bold text-blue-600">React Query (cached)</h2>
          <pre className="bg-gray-100 p-2 rounded text-sm h-48 overflow-auto">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
        <div>
          <h2 className="font-bold text-gray-700">Without cache</h2>
          <pre className="bg-gray-100 p-2 rounded text-sm h-48 overflow-auto">
            {JSON.stringify(users, null, 2)}
          </pre>
        </div>
      </div>
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
