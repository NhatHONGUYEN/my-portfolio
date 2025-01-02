import { projects } from '@/app/data/data';

export default async function ProjectPage({ params }) {
  const { id } = await params;
  const project = projects.find((project) => project.id === parseInt(id));

  return (
    <div className="max-w-6xl mx-auto py-20">
      <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-500 mb-4">{project.date}</p>
      <p className="text-lg mb-4">{project.description}</p>
      <img src={project.image} alt={project.title} className="w-full h-auto" />
    </div>
  );
}
