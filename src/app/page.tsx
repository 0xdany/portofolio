"use client";
import { useRef } from "react";

export default function Home() {
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="hero min-h-screen bg-gradient-to-b from-base-200 to-base-100">
        <div className="hero-content text-center justify-center">
          <div className=" justify-center max-w-3xl motion-scale-in-[0.5] motion-rotate-in-[-10deg] motion-blur-in-[10px] motion-delay-[0.75s]/rotate motion-delay-[0.75s]/blur">
            <h1 className="text-6xl font-bold tracking-tight mb-8 hover:motion-preset-flomoji-🚀 hover:transition-opacity">
              Danyレイハン
            </h1>
            <div className="text-2xl text-base-content/70 mb-12 justify-center flex items-center ">
              <div className="flex flex-row gap-2">
                <span>I</span>
                <div
                  data-tip="Figma, Adobe XD, Sketch"
                  className="tooltip tooltip-left bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.orange.400),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.800),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient"
                >
                  design,
                </div>
                <div data-tip="JS, TS, Go, Python, C++, R" className="tooltip tooltip-bottom">
                  code,
                </div>
                <span>and</span>
                <div data-tip="Docker, Google Cloud, AWS" className="tooltip tooltip-right">
                  deploy.
                </div>
              </div>
            </div>

            <button
              className="btn btn-ghost rounded-xl px-8 motion-preset-seesaw-md"
              onClick={scrollToProjects}
            >
              Projects
            </button>

            <a
              className="btn btn-ghost rounded-xl px-8"
              href="https://www.linkedin.com/in/dany-raihan/"
              target="_blank"
            >
              Resume
            </a>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section
        ref={projectsRef}
        className="py-32 px-8 bg-gradient-to-b to-base-200/50 from-transparent"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary animate-gradient motion-safe:animate-pulse">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 px-4">
            <a
              className="group relative overflow-hidden rounded-3xl backdrop-blur-lg 
          bg-gradient-to-br from-orange-500/20 to-rose-500/20 
          shadow-lg hover:shadow-2xl hover:shadow-orange-500/30 
          transition-all duration-700 ease-out hover:-translate-y-2
          motion-safe:animate-fade-up"
              href="https://backgone.danyraihan.dev/"
            >
              <div className="p-8 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-orange-100 group-hover:scale-105 transition-transform duration-500">
                  Backgone{" "}
                  <span className="block mt-1 text-sm font-light text-orange-200/70">
                    web app, docker
                  </span>
                </h3>
                <p className="mt-4 text-orange-100/80 group-hover:text-orange-100 transition-colors duration-500">
                  Remove everything but you.
                </p>
                <div className="mt-auto pt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-orange-200">Explore →</span>
                </div>
              </div>
            </a>

            <a
              className="group relative overflow-hidden rounded-3xl backdrop-blur-lg 
          bg-gradient-to-br from-sky-500/20 to-indigo-500/20 
          shadow-lg hover:shadow-2xl hover:shadow-sky-500/30 
          transition-all duration-700 ease-out hover:-translate-y-2
          motion-safe:animate-fade-up motion-safe:animate-delay-100"
              href="https://insightubc.danyraihan.dev/"
            >
              <div className="p-8 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-sky-100 group-hover:scale-105 transition-transform duration-500">
                  InsightUBC{" "}
                  <span className="block mt-1 text-sm font-light text-sky-200/70">
                    web app, docker
                  </span>
                </h3>
                <p className="mt-4 text-sky-100/80 group-hover:text-sky-100 transition-colors duration-500">
                  Query every UBC courses that ever existed.
                </p>
                <div className="mt-auto pt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-sky-200">Explore →</span>
                </div>
              </div>
            </a>

            <a
              className="group relative overflow-hidden rounded-3xl backdrop-blur-lg 
          bg-gradient-to-br from-emerald-500/20 to-teal-500/20 
          shadow-lg hover:shadow-2xl hover:shadow-emerald-500/30 
          transition-all duration-700 ease-out hover:-translate-y-2
          motion-safe:animate-fade-up motion-safe:animate-delay-200"
              href="https://github.com/Recipict-App/expo-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p-8 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-emerald-100 group-hover:scale-105 transition-transform duration-500">
                  Recipict{" "}
                  <span className="block mt-1 text-sm font-light text-emerald-200/70">
                    mobile app
                  </span>
                </h3>
                <p className="mt-4 text-emerald-100/80 group-hover:text-emerald-100 transition-colors duration-500">
                  Get recipe from grocery bills.
                </p>
                <div className="mt-auto pt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-emerald-200">Explore →</span>
                </div>
              </div>
            </a>

            <a
              className="group relative overflow-hidden rounded-3xl backdrop-blur-lg 
          bg-gradient-to-br from-blue-500/20 to-violet-500/20 
          shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 
          transition-all duration-700 ease-out hover:-translate-y-2
          motion-safe:animate-fade-up motion-safe:animate-delay-300"
              href="https://www.qsitehacks.ca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p-8 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-blue-100 group-hover:scale-105 transition-transform duration-500">
                  qsite{" "}
                  <span className="block mt-1 text-sm font-light text-blue-200/70">web app</span>
                </h3>
                <p className="mt-4 text-blue-100/80 group-hover:text-blue-100 transition-colors duration-500">
                  Quantum computing hackathon website.
                </p>
                <div className="mt-auto pt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-blue-200">Explore →</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
