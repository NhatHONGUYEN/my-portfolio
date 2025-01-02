import Image from 'next/image';

export default function About() {
  return (
    <div className=" w-full  border-t-2 border-gray-800  h-screen flex justify-center items-center">
      <div className="flex  max-w-6xl mx-auto p-4 space-x-40 mb-20">
        <div>
          <Image
            src="/images/photo-profil.jpg"
            alt="Nhat-Quan HO NGUYEN"
            width={400}
            height={600}
          />
        </div>
        <div className="flex flex-col  space-y-11 pt-40">
          <h1 className="text-3xl">Développeur full-stack</h1>
          <p className="w-[500px] text-gray-400  ">
            En tant que développeur web full-stack, je prends plaisir à créer
            des solutions numériques modernes et efficaces, tout en restant à
            l'écoute des besoins des utilisateurs. De la conception à la mise en
            production, je veille à allier technologie, créativité et attention
            aux détails pour donner vie à des projets qui font la différence.
            Parcourez mes réalisations et n’hésitez pas à me contacter pour
            échanger ou collaborer sur de nouvelles idées.
          </p>
        </div>
      </div>
    </div>
  );
}
