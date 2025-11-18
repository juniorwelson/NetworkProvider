const About = () => {
  return (
    <section
      className="about mt-9 px-4  flex flex-col items-center justify-between gap-3 "
      id="about"
    >
      <h2 className="text-white mb-6 text-center text-3xl md:text-5xl font-bold text-shadow-sm text-shadow-amber-300">
        Sobre a <span className="text-amber-300">NetDev</span>
      </h2>

      <p className="text-white text-lg md:text-2xl leading-relaxed max-w-4xl mx-auto text-center">
        Somos uma empresa dedicada a oferecer soluções de internet de alta
        qualidade, sempre com foco na experiência e satisfação dos nossos
        clientes. Ao longo da nossa trajetória, construímos uma reputação
        baseada em confiança, compromisso e inovação, entregando conexão
        estável, rápida e segura para residências e empresas.
        <br />
        <br />
        Nosso time é formado por profissionais capacitados e apaixonados pelo
        que fazem, comprometidos em oferecer um atendimento humano, ágil e
        transparente. Acreditamos que tecnologia só tem valor quando melhora a
        vida das pessoas, por isso trabalhamos diariamente para superar
        expectativas, investir em melhorias e acompanhar as necessidades do
        mundo moderno.
        <br />
        <br />
        Somos mais do que um provedor: somos parceiros na rotina digital de cada
        cliente que confia na <span className="text-amber-300">NetDev</span>.
      </p>
      <img
        src="/NetworkProvider/img/rocket.gif"
        alt="foguete"
        className="w-50"
      />

      <a
        href="#"
        className="p-2 text-white bg-emerald-700 text-2xl rounded-2xl hover:bg-emerald-400"
      >
        {" "}
        Quero Me Conectar
      </a>
    </section>
  );
};

export default About;
