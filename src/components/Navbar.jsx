import { X, List, Globe ,CircleUserRound} from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className="flex items-center justify-between bg-black w-full py-2 md:justify-around">
        <div id="branding" className="flex items-center justify-center pl-3">
          <Globe size={22} className="text-white" />
          <a href="#" className="text-amber-400 pl-1 text-4xl font-semibold">
            NetDev
          </a>
        </div>

        <button className="md:hidden" onClick={() => setOpen(true)}>
          <List size={32} className="mr-5 text-white" />
        </button>

        <ul className="hidden md:flex items-center justify-center gap-7">
          <li>
            <a
              href="#Home"
              className="text-white text-sm font-semibold hover:text-amber-400 hover:underline transition"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#benefits"
              className="text-white text-sm font-semibold hover:text-amber-400 hover:underline transition"
            >
              Benefícios
            </a>
          </li>
          <li>
            <a
              href="#plans"
              className="text-white text-sm font-semibold hover:text-amber-400 hover:underline transition"
            >
              Planos
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="text-white text-sm font-semibold hover:text-amber-400 hover:underline transition"
            >
              Sobre
            </a>
          </li>
          <li className="bg-white border rounded-xl px-2 py-1  ml-7 flex items-center justufy-center gap-1 hover:text-amber-400 transition">
            <a href="#contato" className="text-amber  text-3x font-semibold ">
              Contato
            </a>
            <CircleUserRound size="20" />
          </li>
        </ul>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden">
          <div
            className="fixed bg-black/60 inset-0"
            onClick={() => setOpen(false)}
          >
            <div className="fixed left-0 top-0 h-full w-80 bg-slate-900  p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Globe size={22} className="text-white" />
                  <a
                    href="#"
                    className="text-amber-400 pl-1 text-2xl font-semibold"
                  >
                    NetDev
                  </a>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-lg"
                >
                  <X className="size-7 text-white" />
                </button>
              </div>

              <div className="flex flex-col gap-4 p-2">
                <a href="#Home" className="text-white text-sm font-semibold">
                  Home
                </a>
                <a
                  href="#benefits"
                  className="text-white text-sm font-semibold"
                >
                  Benefícios
                </a>
                <a href="#plans" className="text-white text-sm font-semibold">
                  Planos
                </a>
                <a href="#contato" className="text-white text-sm font-semibold">
                  Contato
                </a>
                <a href="#about" className="text-white text-sm font-semibold">
                  Sobre
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
