import { Gamepad2, Wifi, Download } from "lucide-react";

const Plans = () => {
  return (
    <section className="plans mt-9 " id="plans">
      <h2 className="text-white text-center text-3xl text-shadow-sm text-shadow-amber-300 md:text-5xl font-bold ml-2">
        Nossos Planos
      </h2>
      <div className="mt-8  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="plan1 bg-amber-50 border rounded-2xl w-90 mx-auto transition-transform duration-500 hover:scale-[1.1]">
          <div className="header-plan bg-emerald-400 p-3 rounded-2xl">
            <h3 className="text-4xl text-amber-300 font-semibold">DEV FIBRA</h3>
            <span className="text-5xl  text-fuchsia-500 font-bold ml-30">
              700 MEGA
            </span>
          </div>

          <div className="plan-infor flex items-center justify-between flex-col mt-5">
            <p className="text-xl font-semibold text-center w-60 ">
              Jogue sem travar, baixe arquivos rapidamente e assista filmes em
              alta resolução.
            </p>
            <div className="plan-price mt-10 p-3">
              <span className="pl-RS text-2xl  font-bold">R$</span>
              <span className="pl-value text-7xl font-bold text-amber-400">
                109,99<span className="text-2xl">/mês</span>
              </span>
            </div>
            <a
              href="#"
              className="p-2 w-30  font-semibold text-center bg-emerald-800 text-white rounded-2xl mt-10 hover:bg-emerald-500 "
            >
              ASSINE JÁ
            </a>
            <div className="icons flex mt-10 items-center justify-between gap-10">
              <Download size={50} className="text-fuchsia-400" />
              <Gamepad2 size={50} className="text-blue-400" />
              <Wifi size={50} className="text-green-400" />
            </div>
            <div className="more-infor flex items-center justify-around gap-3 mt-20 mb-3 bg-emerald-400 px-2 rounded-2xl">
              <p className="font-semibold text-sm text">Fibra Óptica</p>
              <p className="font-semibold text-sm text">Download 700 Mbps</p>
              <p className="font-semibold text-sm text">Upload 140 Mbps </p>
            </div>
          </div>
        </div>
        {/* second card*/}
        <div className="plan1 bg-amber-50 border rounded-2xl  w-90 mx-auto  transition-transform duration-500 hover:scale-[1.1]">
          <div className="header-plan bg-emerald-400 p-3 rounded-2xl">
            <h3 className="text-4xl text-amber-300 font-semibold">DEV FIBRA</h3>
            <span className="text-5xl text-fuchsia-500 font-bold ml-30">
              500 MEGA
            </span>
          </div>

          <div className="plan-infor flex items-center justify-between flex-col mt-5">
            <p className="text-xl font-semibold text-center w-60 ">
              Jogue sem travar, baixe arquivos rapidamente e assista filmes em
              alta resolução.
            </p>
            <div className="plan-price mt-10 p-3">
              <span className="pl-RS text-2xl  font-bold">R$</span>
              <span className="pl-value text-7xl font-bold text-amber-400">
                99,99<span className="text-2xl">/mês</span>
              </span>
            </div>
            <a
              href="#"
              className="p-2 w-30  font-semibold text-center bg-emerald-800 text-white rounded-2xl mt-10 hover:bg-emerald-500"
            >
              ASSINE JÁ
            </a>
            <div className="icons flex mt-10 items-center justify-between gap-10">
              <Download size={50} className="text-fuchsia-400" />
              <Gamepad2 size={50} className="text-blue-400" />
              <Wifi size={50} className="text-green-400" />
            </div>
            <div className="more-infor flex items-center justify-around gap-3 mt-20 mb-3 bg-emerald-400 px-2 rounded-2xl">
              <p className="font-semibold text-sm text">Fibra Óptica</p>
              <p className="font-semibold text-sm text">Download 500 Mbps</p>
              <p className="font-semibold text-sm text">Upload 100 Mbps </p>
            </div>
          </div>
        </div>

        {/*three card */}
        <div className="plan3 bg-amber-50 border rounded-2xl  w-90 mx-auto  transition-transform duration-500 hover:scale-[1.1]">
          <div className="header-plan bg-emerald-400 p-3 rounded-2xl">
            <h3 className="text-4xl text-amber-300 font-semibold">DEV FIBRA</h3>
            <span className="text-5xl text-fuchsia-500 font-bold ml-30">
              300 MEGA
            </span>
          </div>

          <div className="plan-infor flex items-center justify-between flex-col mt-5">
            <p className="text-xl font-semibold text-center w-60 ">
              Jogue sem travar, baixe arquivos rapidamente e assista filmes em
              alta resolução.
            </p>
            <div className="plan-price mt-10 p-3">
              <span className="pl-RS text-2xl  font-bold">R$</span>
              <span className="pl-value text-7xl font-bold text-amber-400">
                79,99<span className="text-2xl">/mês</span>
              </span>
            </div>
            <a
              href="#"
              className="p-2 w-30  font-semibold text-center bg-emerald-800 text-white rounded-2xl mt-10 hover:bg-emerald-500"
            >
              ASSINE JÁ
            </a>
            <div className="icons flex mt-10 items-center justify-between gap-10">
              <Download size={50} className="text-fuchsia-400" />
              <Gamepad2 size={50} className="text-blue-400" />
              <Wifi size={50} className="text-green-400" />
            </div>
            <div className="more-infor flex items-center justify-around gap-3 mt-20 mb-3 bg-emerald-400 px-2 rounded-2xl">
              <p className="font-semibold text-sm text">Fibra Óptica</p>
              <p className="font-semibold text-sm text">Download 300 Mbps</p>
              <p className="font-semibold text-sm text">Upload 90 Mbps </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Plans
