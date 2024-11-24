import Image from "next/image";

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
          <h2 className="text-4xl font-semibold text-center mb-16">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card bg-base-200 shadow-xl">
              <figure className="px-6 pt-6">
                <div className="h-64 w-full bg-base-300 rounded-xl"></div>
              </figure>
              <div className="card-body">
                <h3 className="card-title">Project One</h3>
                <p>A brief description of your amazing project.</p>
              </div>
            </div>
            <div className="card bg-base-200 shadow-xl">
              <figure className="px-6 pt-6">
                <div className="h-64 w-full bg-base-300 rounded-xl"></div>
              </figure>
              <div className="card-body">
                <h3 className="card-title">Project Two</h3>
                <p>A brief description of your amazing project.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
