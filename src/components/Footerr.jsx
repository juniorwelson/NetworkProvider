import {
  MapPin, Phone, Mail, Wifi, Facebook, Instagram, Twitter, Youtube
} from "lucide-react";


const Footerr = () => {
  return (
    <footer className="bg-gray-900   text-gray-200 pt-12 pb-8 mt-9">
      <div className="max-w-7xl mx-auto px-6  md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-extrabold text-amber-400">NetDev</h3>
          <p className="text-sm text-gray-300">
            Conexão rápida, estável e com suporte dedicado. Planos residenciais
            e empresariais com cobertura em sua região.
          </p>
          <a
            href="#plans"
            className="inline-block mt-2 px-4 py-2 bg-amber-400 text-gray-900 rounded-full font-semibold shadow-md hover:scale-105 transform transition"
          >
            Ver Planos
          </a>
        </div>

        {/* Contato */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Contato</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-amber-300" />
              <span>Rua Exemplo, 123 — Centro, SuaCidade</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-amber-300" />
              <a href="tel:+5511999999999" className="hover:underline">
                (11) 99999-9999
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-amber-300" />
              <a href="mailto:suporte@netdev.com" className="hover:underline">
                suporte@netdev.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Wifi className="w-4 h-4 text-amber-300" />
              <span>Suporte 24/7</span>
            </li>
          </ul>
        </div>

        {/* Links rápidos */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">
            Links Rápidos
          </h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#about" className="hover:underline">
                Sobre nós
              </a>
            </li>
            <li>
              <a href="#plans" className="hover:underline">
                Planos
              </a>
            </li>
            <li>
              <a href="#plans" className="hover:underline">
                Planos
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
          </ul>
        </div>

        {/* Assinatura e redes sociais */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Newsletter</h4>
          <p className="text-sm text-gray-300">
            Receba ofertas e atualizações por e-mail.
          </p>
          <form
            className="mt-3 flex gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              aria-label="Seu e-mail"
              type="email"
              placeholder="seu@email.com"
              className="flex-1 px-3 py-2 rounded-lg bg-gray-800 text-gray-100 placeholder-gray-400 outline-none"
            />
            <button className="px-4 py-2 rounded-lg bg-amber-400 text-gray-900 font-semibold">
              Enviar
            </button>
          </form>

          <div className="mt-5">
            <h5 className="text-sm font-semibold text-white mb-2">Siga-nos</h5>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="p-2 rounded-md bg-gray-800 hover:bg-gray-700"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="p-2 rounded-md bg-gray-800 hover:bg-gray-700"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="p-2 rounded-md bg-gray-800 hover:bg-gray-700"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="p-2 rounded-md bg-gray-800 hover:bg-gray-700"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-6">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} NetDev — Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4 mt-3 md:mt-0">
            <a href="#" className="hover:underline">
              Política de Privacidade
            </a>
            <a href="#" className="hover:underline">
              Termos de Uso
            </a>
            <a href="#" className="hover:underline">
              Atendimento
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

  


export default Footerr
