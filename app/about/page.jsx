export default function About() {
  return (
    <div className="min-h-screen bg-red-59 p-10 flex items-center justify-center">
      <div className="about-card bg-red-29 shadow-2xl rounded-2xl p-8 max-w-3xl w-full border border-red-100">
        <h1 className="text-5xl font-extrabold text-indigo-700 mb-6 text-center">
          About Me
        </h1>

        <p className="text-red-700 text-lg mb-4 leading-relaxed">
          Hello! My name is Arun Graeff. I am a student at Indian Hills
          Community College in Ottumwa.
        </p>

        <p className="text-red-700 text-lg mb-6 leading-relaxed">
          I am learning web development using Next.js and Tailwind CSS to build
          modern, responsive websites.
        </p>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-3">
            Skills
          </h2>

          <div className="grid grid-cols-2 gap-2">
            <span className="skill-tag">JavaScript / React</span>
            <span className="skill-tag">Next.js App Router</span>
            <span className="skill-tag">Tailwind CSS</span>
            <span className="skill-tag">Git & GitHub</span>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-indigo-600 mb-3">Goals</h2>

          <p className="text-gray-700 leading-relaxed bg-indigo-50 p-4 border-indigo-100">
            I want to become a good programmer and build real-world web apps.
          </p>
        </div>
      </div>
    </div>
  );
}
