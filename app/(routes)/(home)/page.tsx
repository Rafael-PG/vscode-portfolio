import Link from "next/link";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiInstagram,
  FiYoutube,
} from "react-icons/fi";
import { SiMedium, SiTableau, SiLeetcode } from "react-icons/si";

export default function Home() {
  return (
    <main className="w-full h-full flex items-start justify-start p-6 overflow-hidden">
      <div className="max-w-6xl w-full ml-8 mt-4">
        {/* // hello world !! Welcome to my portfolio */}
        <div className="text-green-400 text-sm mb-6 font-mono">
          {`// Hello World !! Bienvenido a mi Portfolio`}
        </div>

        {/* Grid principal de 2 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* COLUMNA IZQUIERDA */}
          <div className="space-y-6">
            {/* Nombre principal con efecto glitch - COMO EN LA IMAGEN */}
            <div className="relative">
              <h1 className="text-5xl md:text-6xl font-black leading-tight font-poppins tracking-wider italic">
                <span className="text-white">Stuard</span>{" "}
                <span className="text-[#ff9100] font-black italic">Rafael</span>
              </h1>
            </div>

            {/* Línea degradada solo con el color naranja */}
            <div className="w-full h-px mt-2 bg-gradient-to-r from-[#ff9100] via-[#ff9100]/50 to-transparent"></div>

{/* Lista de roles - TUS ROLES como cuadritos */}
<div className="flex flex-wrap gap-2 mb-4">
  <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs border border-white/10 rounded-sm bg-white/[0.03] hover:border-white/20 transition-colors text-gray-300">
    Backend Engineer
  </div>
  <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs border border-white/10 rounded-sm bg-white/[0.03] hover:border-white/20 transition-colors text-gray-300">
    AI / ML Dev
  </div>
  <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs border border-white/10 rounded-sm bg-white/[0.03] hover:border-white/20 transition-colors text-gray-300">
    Data Scientist
  </div>
  <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs border border-white/10 rounded-sm bg-white/[0.03] hover:border-white/20 transition-colors text-gray-300">
    <span className="text-[#ff9100]">@</span> EduVanceAI
  </div>
</div>

            {/* Frase "Always learning" */}
            <p className="text-gray-100 text-xl font-medium">
              Always learning, always building
            </p>

            {/* Descripción con énfasis - TU DESCRIPCIÓN */}
            <div className="border-l-4 border-accentColor pl-4 py-2">
              <p className="text-gray-400 text-base leading-relaxed">
                Vivo en la intersección de{" "}
                <span className="text-accentColor font-semibold">
                  backend engineering
                </span>
                , <span className="text-accentColor font-semibold">AI/ML</span>{" "}
                y{" "}
                <span className="text-accentColor font-semibold">
                  data science
                </span>
                . Construyo sistemas que son genuinamente{" "}
                <span className="text-accentColor font-semibold">
                  inteligentes
                </span>{" "}
                y escalables.
              </p>
            </div>

            {/* Separador */}
            <hr className="border-gray-800 my-6" />

            {/* Projects, About Me, Contact */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300 hover:text-accentColor cursor-pointer transition-colors group">
                <span className="text-accentColor text-xl">📁</span>
                <span className="text-lg group-hover:translate-x-1 transition-transform">
                  Projects
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 hover:text-accentColor cursor-pointer transition-colors group">
                <span className="text-accentColor text-xl">👤</span>
                <span className="text-lg group-hover:translate-x-1 transition-transform">
                  Sobre Mí
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 hover:text-accentColor cursor-pointer transition-colors group">
                <span className="text-accentColor text-xl">📧</span>
                <span className="text-lg group-hover:translate-x-1 transition-transform">
                  Contacto
                </span>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA */}
          <div className="space-y-8">
            {/* Stats cards - TUS ESTADÍSTICAS */}
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-gray-800 rounded-md p-5 hover:border-accentColor transition-all hover:shadow-lg hover:shadow-accentColor/5">
                <p className="text-4xl font-bold text-accentColor">3+</p>
                <p className="text-gray-400 text-sm mt-1">AÑOS</p>
              </div>
              <div className="border border-gray-800 rounded-md p-5 hover:border-accentColor transition-all hover:shadow-lg hover:shadow-accentColor/5">
                <p className="text-4xl font-bold text-accentColor">10+</p>
                <p className="text-gray-400 text-sm mt-1">PROYECTOS</p>
              </div>
            </div>

            {/* Redes sociales - TUS ENLACES */}
            <div>
              <p className="text-gray-500 text-xs mb-3 tracking-wider">
                CONECTA CONMIGO
              </p>
              <div className="grid grid-cols-4 gap-3">
                <a
                  href="https://github.com/Rafael-PG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-800 rounded-md p-3 flex justify-center hover:border-accentColor hover:text-accentColor transition-all"
                >
                  <FiGithub size={20} />
                </a>
                <a
                  href="#"
                  className="border border-gray-800 rounded-md p-3 flex justify-center hover:border-accentColor hover:text-accentColor transition-all"
                >
                  <FiLinkedin size={20} />
                </a>
                <a
                  href="#"
                  className="border border-gray-800 rounded-md p-3 flex justify-center hover:border-accentColor hover:text-accentColor transition-all"
                >
                  <SiMedium size={20} />
                </a>
                <a
                  href="#"
                  className="border border-gray-800 rounded-md p-3 flex justify-center hover:border-accentColor hover:text-accentColor transition-all"
                >
                  <SiTableau size={20} />
                </a>
                <a
                  href="#"
                  className="border border-gray-800 rounded-md p-3 flex justify-center hover:border-accentColor hover:text-accentColor transition-all"
                >
                  <SiLeetcode size={20} />
                </a>
                <a
                  href="#"
                  className="border border-gray-800 rounded-md p-3 flex justify-center hover:border-accentColor hover:text-accentColor transition-all"
                >
                  <FiInstagram size={20} />
                </a>
                <a
                  href="#"
                  className="border border-gray-800 rounded-md p-3 flex justify-center hover:border-accentColor hover:text-accentColor transition-all"
                >
                  <FiMail size={20} />
                </a>
                <a
                  href="#"
                  className="border border-gray-800 rounded-md p-3 flex justify-center hover:border-accentColor hover:text-accentColor transition-all"
                >
                  <FiYoutube size={20} />
                </a>
              </div>
            </div>

            {/* CURIOSITY - ALWAYS LEARNING */}
            <div className="mt-6">
              <div className="border border-gray-800 rounded-md p-5 hover:border-accentColor transition-all">
                <p className="text-2xl font-bold text-accentColor">
                  CURIOSIDAD
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  SIEMPRE APRENDIENDO
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer sutil */}
        <div className="mt-8 text-xs text-gray-700 border-t border-gray-800 pt-4">
          <span>⚡ Construyendo sistemas inteligentes con pasión</span>
        </div>
      </div>
    </main>
  );
}
