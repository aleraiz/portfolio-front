import Project from "./Project";

export default function Projects() {
  return (
    <div
      className="w-full min-h-screen px-32 border border-light py-8 lg:py-20"
      id="projects"
    >
      <div className="flex items-center justify-center text-light">
        <h3 className="text-4xl">Projects</h3>
      </div>
      <div className="border rounded-2xl mt-20 p-20 shadow-outline">
        <Project />
      </div>
    </div>
  );
}
