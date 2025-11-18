import { Star ,User } from "lucide-react";
const Testimony = () => {
  return (
    <section className="testimony mt-9">
      <h2 className="text-white text-center text-3xl text-shadow-sm text-shadow-amber-300 md:text-5xl font-bold ml-2">
        Quem Usou,Aprovou!
      </h2>
      <div className="mt-8  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        <div className="testimony1  mx-auto  flex flex-col items-center justify-between gap-3 w-80 border p-2 border-white/50 rounded-2xl">
          <div className="star flex items-center justify-center ">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="text-amber-300  fill-current " />
            ))}
          </div>

          <p className="text-white">
            “Internet rápida, estável e com um atendimento excelente. Melhor
            provedora que já usei!”
          </p>
          <div className="footer-testimony flex items-center justify-center gap-1">
            <User size={20} className="text-white" />
            <span className="text-teal-200 ">
              <span className="text-white">Usuário:</span> Welson junior
            </span>
          </div>
        </div>
        {/* testimony-2*/}
        <div className="testimony2 flex  mx-auto  flex-col items-center justify-between gap-3 w-80 border p-2 border-white/50 rounded-2xl">
          <div className="star flex items-center justify-center ">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="text-amber-300  fill-current " />
            ))}
          </div>

          <p className="text-white">
            “Serviço impecável! Internet sempre rápida e sem quedas.”
          </p>
          <div className="footer-testimony flex items-center justify-center gap-1">
            <User size={20} className="text-white" />
            <span className="text-teal-200 ">
              <span className="text-white">Usuário:</span> Anônimo
            </span>
          </div>
        </div>

        {/* testimony-3*/}
        <div className="testimony3 flex  mx-auto  flex-col items-center justify-between gap-3 w-80 border p-2 border-white/50 rounded-2xl">
          <div className="star flex items-center justify-center ">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="text-amber-300  fill-current " />
            ))}
          </div>

          <p className="text-white">
            “Nunca mais tive dor de cabeça com internet. Ótimo serviço!”
          </p>
          <div className="footer-testimony flex items-center justify-center gap-1">
            <User size={20} className="text-white" />
            <span className="text-teal-200 ">
              <span className="text-white">Usuário:</span> Desconhecido
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimony;
