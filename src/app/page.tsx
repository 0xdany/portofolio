export default function Home() {
  return (
    <main className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="hero min-h-screen bg-gradient-to-b from-base-200 to-base-100">
        <div className="hero-content text-center">
          <div className="max-w-3xl motion-scale-in-[0.5] motion-rotate-in-[-10deg] motion-blur-in-[10px] motion-delay-[0.75s]/rotate motion-delay-[0.75s]/blur">
            <h1 className="text-6xl font-bold tracking-tight mb-8 hover:motion-preset-flomoji-🚀 hover:transition-opacity">
              Dany.
            </h1>
            <div className="text-2xl text-base-content/70 mb-12 flex flex-row gap-2">
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

            <button className="btn btn-ghost rounded-xl px-8 motion-preset-seesaw-md">
              Project
            </button>

            <button className="btn btn-ghost rounded-xl px-8">Resume</button>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold text-center mb-16">Projects</h2>

            <div className="flex flex-col md:flex-row justify-center gap-8">
            <a
              className="card bg-orange-800 shadow-xl rounded-2xl"
              href="https://backgone.danyraihan.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card-body">
              <h3 className="card-title">
                Backgone <span className="font-extralight text-sm">(web app, docker)</span>
              </h3>
              <p>Remove everything but you.</p>
              </div>
            </a>

            <a
              className="card shadow-xl rounded-2xl bg-sky-700"
              href="https://insightubc.danyraihan.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card-body">
              <h3 className="card-title">
                InsightUBC <span className="font-extralight text-sm">(web app, docker)</span>
              </h3>
              <p> Query every UBC courses that ever existed.</p>
              </div>
            </a>
            <a
              className="card shadow-xl rounded-2xl bg-green-700"
              href="https://github.com/Recipict-App/expo-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card-body">
              <h3 className="card-title">
                Recipict<span className="font-extralight text-sm">(mobile app)</span>
              </h3>
              <p>Get recipe from grocery bills.</p>
              </div>
            </a>

            <a
              className="card shadow-xl rounded-2xl bg-blue-700"
              href="https://www.qsitehacks.ca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card-body">
              <h3 className="card-title">
                qsite<span className="font-extralight text-sm">(web app)</span>
              </h3>
              <p>Quantum computing hackathon website.</p>
              </div>
            </a>
            </div>
        </div>
      </section>
    </main>
  );
}
