import { CacheProvider } from "./CacheProvider";
import DemoSection from "./components/DemoSection";
import GlobalDemo from "./demos/GlobalDemo";
import LocalDemo from "./demos/LocalDemo";
import ReactQueryDemo from "./demos/ReactQueryDemo";

function App() {
  return (
    <div className="min-h-screen bg-stone-400 text-gray-800 p-6 space-y-16">
      <header className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Cache in React</h1>
        <p className="text-white">
          Three ways to implement cached data in React: local, global, and
          libraries.
        </p>
      </header>

      <main className="max-w-4xl mx-auto space-y-16">
        <DemoSection
          title="1. Local Hook"
          description="Simple cache inside a hook, isolated per component."
        >
          <LocalDemo />
        </DemoSection>

        <DemoSection
          title="2. Global Cache with Context API"
          description="Now the cache is shared across components."
        >
          <CacheProvider>
            <GlobalDemo />
          </CacheProvider>
        </DemoSection>

        <DemoSection
          title="3. Using a Library (SWR or React Query)"
          description="Ready-made libraries offer global cache, automatic revalidation, and much more."
        >
          <ReactQueryDemo />
        </DemoSection>
      </main>

      <footer className="text-center text-gray-500 mt-16">
        Made for learning 🚀 |{" "}
        <a
          href="https://github.com/soymarcos96/react-cache-requests"
          className="underline"
        >
          Code on GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
