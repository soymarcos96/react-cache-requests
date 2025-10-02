import DemoSection from "./components/DemoSection";
import LocalDemo from "./demos/LocalDemo";

function App() {
  return (
    <div className="min-h-screen bg-stone-400 text-gray-800 p-6 space-y-16">
      <header className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Mini Cache em React</h1>
        <p className="text-white">
          Três formas de implementar cache de dados em React: local, global e
          usando libs.
        </p>
      </header>

      <main className="max-w-4xl mx-auto space-y-16">
        <DemoSection
          title="1. Hook Local"
          description="Cache simples dentro de um hook, isolado por componente."
        >
          <LocalDemo />
        </DemoSection>

        <DemoSection
          title="2. Cache Global com Context API"
          description="Agora o cache é compartilhado entre componentes."
        ></DemoSection>

        <DemoSection
          title="3. Usando uma Lib (SWR ou React Query)"
          description="Libs prontas oferecem cache global, revalidação automática e muito mais."
        ></DemoSection>
      </main>

      <footer className="text-center text-gray-500 mt-16">
        Feito para estudo 🚀 |{" "}
        <a href="https://github.com/seu-repo" className="underline">
          Código no GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
