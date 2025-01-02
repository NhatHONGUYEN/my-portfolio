import { projects } from '../data/data';
import ProjectLink from './ProjectLink';

export default function Projects() {
  return (
    <div className="w-full border-t-2 flex flex-col justify-center items-center border-gray-800 pt-36 pb-72 border-b-2">
      <div className="flex flex-col max-w-6xl mx-auto">
        <h1 className="text-5xl py-20">Projects</h1>
        <div className="grid grid-cols-3 gap-20">
          {projects.map((project) => (
            <div key={project.id}>
              <div className="flex items-center gap-4 text-sm">
                <p className="text-gray-500">{project.date}</p>
                <p className="rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                  {project.category}
                </p>
              </div>
              <h2 className="text-2xl py-4">{project.title}</h2>
              <p className={`text-gray-400 ${project.padding}`}>
                {project.description}
              </p>
              <ProjectLink
                href={`/project/${project.id}`}
                text=" Lien projet "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
