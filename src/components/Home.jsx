import { ArrowRight, Rocket } from "lucide-react";

const Home = () => {
  return (
    <section className="bg-[url('/img/main-picture.jpg')] bg-cover bg-center w-full  h-screen" id="home">
      <div
        id="container"
        className="flex flex-col
         items-center 
        justify-around
         font-extrabold
       
         "
      >
        <h1 className="text-white  ml-8 mt-6  text-6xl md:mt-30 ">
          Internet Inteligente para um{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400  ">
            Mundo Conectado
          </span>
        </h1>
        <p className="text-slate-300 text-xl mt-8 ml-4 md:ml-19 leading-relaxed">
          Conecte-se ao futuro com nossa rede de fibra óptica de última geração.
          Navegação rápida, estável e pensada para quem exige o máximo em
          performance.
        </p>

        <div
          id="btn"
          className="w-90  flex items-center justify-center gap-2 flex-wrap mt-10"
        >
          <a
            href="#"
            className=" flex items-center justify-center gap-1 p-3 bg-amber-50 text-sm text-black font-semibold border rounded-2xl hover:bg-amber-400 "
          >
            Conectar-se
            <Rocket size={20} />
          </a>
          <a
            href="#benefits"
            className="p-3 bg-amber-50 text-sm flex items-center justify-center gap-1 text-black font-semibold  border rounded-2xl hover:bg-amber-400"
          >
            Ver Benefícios
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home
