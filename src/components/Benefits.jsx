import {
  Settings,
  MapPinHouse,
  Users,
  HandCoins,
  TvMinimalPlay,
  Wifi,
} from "lucide-react";

const Benefits = () => {
  return (
    <section className=" mt-8" id="benefits">
      <h2 className="text-white text-center text-3xl text-shadow-sm text-shadow-amber-300 md:text-5xl font-bold ml-2">
        Nossos Benefícios
      </h2>

      <div className="mt-8 ml-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="rounded-2xl border border-amber-200 bg-white/5 p-6 hover:bg-white/10 flex items-center justify-between gap-4">
          <p className="text-amber-300 text-2xl font-semibold">Suporte 24h</p>
          <Settings size={40} className="text-emerald-500" />
        </div>

        <div className="rounded-2xl border border-amber-200 bg-white/5 p-6 hover:bg-white/10 flex items-center justify-between gap-4">
          <p className="text-amber-300 text-2xl font-semibold text-balance">
            Internet de altíssima qualidade e velocidade
          </p>
          <Wifi size={40} className="text-fuchsia-500" />
        </div>

        <div className="rounded-2xl border border-amber-200 bg-white/5 p-6 hover:bg-white/10 flex items-center justify-between gap-4">
          <p className="text-amber-300 text-2xl font-semibold">
            Atendimento humanizado
          </p>
          <Users size={40} className="text-blue-500" />
        </div>

        <div className="rounded-2xl border border-amber-200 bg-white/5 p-6 hover:bg-white/10 flex items-center justify-between gap-4">
          <p className="text-amber-300 text-2xl font-semibold">
            Planos que cabem no seu bolso
          </p>
          <HandCoins size={40} className="text-green-600" />
        </div>

        <div className="rounded-2xl border border-amber-200 bg-white/5 p-6 hover:bg-white/10 flex items-center justify-between gap-4">
          <p className="text-amber-300 text-2xl font-semibold">
            Parceria com streamings
          </p>
          <TvMinimalPlay size={40} className="text-emerald-500" />
        </div>

        <div className="rounded-2xl border border-amber-200 bg-white/5 p-6 hover:bg-white/10 flex items-center justify-between gap-4">
          <p className="text-amber-300 text-2xl font-semibold">
            Cobertura em todo Brasil
          </p>
          <MapPinHouse size={40} className="text-emerald-500" />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
