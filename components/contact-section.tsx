import Image from "next/image";
import Container from "./ui/container";

const ContactSection = () => {
  return (
    <div className="contact pb-36">
      <Container>
        <div className="px-12 mt-24">
          <h2 className="text-4xl text-center font-bold">Contato</h2>

          <div className="mt-20">
            <h3 className="text-blue-500 font-semibold text-3xl">
              Entre em contato comigo
            </h3>
            <p className="text-xl mt-6">
              Caso queira saber mais sobre mim e meu trabalho, ou apenas me
              mandar uma mensagem, me mande um e-mail.
            </p>

            <div className="flex flex-col lg:flex-row">
              <form
                className="mt-20 flex-col gap-4 flex w-full lg:w-1/2"
                action="https://formsubmit.co/joao.viictorss31@gmail.com"
                method="post"
              >
                <label htmlFor="name" className="text-lg">
                  Nome
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Digite seu nome"
                  className="p-2 bg-gray-800 w-full  text-white rounded-md"
                />
                <label htmlFor="email" className="text-lg">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Digite seu e-mail"
                  className="p-2 bg-gray-800 w-full text-white rounded-md"
                />
                <label htmlFor="message" className="text-lg">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Mensagem"
                  className="p-2 bg-gray-800 w-full text-white rounded-md resize-none"
                  rows={5}
                  draggable="false"
                ></textarea>
                <button
                  type="submit"
                  className="bg-blue-500 text-white rounded-md p-2 w-1/3 self-end"
                >
                  Enviar
                </button>
              </form>
              <div className="self-end items-center justify-center lg:items-end lg:justify-end flex flex-col gap-2 w-full pt-12 lg:w-1/2 ">
                <div className="flex flex-col items-center lg:items-end">
                  <span className="text-2xl text-blue-500 font-semibold">
                    Email
                  </span>
                  <span className="text-xl font-semibold">
                    joao.viictorss31@gmail.com
                  </span>
                </div>
                <div className="flex flex-col items-center lg:items-end">
                  <span className="text-2xl text-blue-500 font-semibold">
                    Localização
                  </span>
                  <span className="text-xl font-semibold">
                    Cotia-SP, Brasil
                  </span>
                </div>
                <span className="text-2xl text-blue-500 font-semibold">
                  Social
                </span>
                <div className="flex items-center gap-2 ">
                  <a
                    href="https://github.com/joaoviictorss"
                    target="_blank"
                    className="hover:scale-125 duration-100"
                  >
                    <Image
                      src={"./svg/icon-github.svg"}
                      alt="github"
                      width={40}
                      height={40}
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/joao-viictor/"
                    target="_blank"
                    className="hover:scale-125 duration-100"
                  >
                    <Image
                      src={"./svg/icon-linkedin.svg"}
                      alt="github"
                      width={40}
                      height={40}
                    />
                  </a>
                  <a
                    href="mailto:joao.viictorss31@gmail.com"
                    target="_blank"
                    className="hover:scale-125 duration-100"
                  >
                    <Image
                      src={"./svg/icon-email.svg"}
                      alt="email"
                      width={28}
                      height={20}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactSection;
