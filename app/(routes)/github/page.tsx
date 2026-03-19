// pages.tsx - Versión completa y limpia

import Card from "./components/Card";
import CardGrid from "./components/CardGrid";

async function getGitRepos() {
  try {
    const response = await fetch(
      "https://api.github.com/users/Rafael-PG/repos?type=all&per_page=9&sort=updated",
      {
        next: {
          revalidate: 86400,
        },
      }
    );
    
    if (!response.ok) {
      throw new Error(`Error ${response.status}: No se pudieron cargar los repositorios`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("Error fetching repos:", error);
    return [];
  }
}

export default async function Github() {
  const data = await getGitRepos();

  if (!data || data.length === 0) {
    return (
      <main className="w-full h-full flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-gray-400 text-lg">No repositories found</p>
          <p className="text-sm text-gray-600">Tus proyectos de GitHub aparecerán aquí</p>
        </div>
      </main>
    );
  }

  return (
    <main className="w-full p-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 border-b border-gray-800 pb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-accentColor text-xl">⎇</span>
            <h1 className="text-2xl font-semibold text-gray-200">
              GitHub Projects
            </h1>
          </div>
          <div className="text-sm text-gray-500 bg-gray-900 px-3 py-1 rounded-md">
            <span className="text-accentColor">~/</span>Rafael-PG
          </div>
        </div>

        <CardGrid>
          {data.map((item: any) => (
            <Card
              key={item.id}
              name={item.name}
              description={item.description || "🚀 Proyecto en desarrollo"}
              repoType={item.visibility}
              star={item.stargazers_count}
              tech={item.language || ''}  // ← Importante: solo el string
              watcher={item.watchers}
            />
          ))}
        </CardGrid>

        <div className="mt-8 text-center">
          <a 
            href="https://github.com/Rafael-PG" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-gray-600 hover:text-accentColor transition-colors inline-flex items-center gap-2"
          >
            <span>Ver más en GitHub</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    </main>
  );
}