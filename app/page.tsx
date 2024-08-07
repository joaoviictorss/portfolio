import ContactSection from "@/components/contact-section";
import Header from "@/components/header";
import MainSection from "@/components/main-section";
import ProjectsSection from "@/components/projects-section";
import CardTechs from "@/components/ui/card-techs";
import Container from "@/components/ui/container";

export default function Home() {
  return (
    <>
      <Header />
      <MainSection />
      <div className="about">
        <Container>
          <div className="px-12 mt-24">
            <h2 className="text-4xl text-center font-bold">Sobre mim</h2>

            <div className="mt-20">
              <h3 className="text-blue-500 font-semibold text-3xl">
                Um pouco sobre mim
              </h3>
              <p className="mt-6 font-normal text-xl">
                Cursando Engenharia da computação pela USJT, atualmente no sexto
                semestre. Possuo experiência e habilidades em desenvolvimento
                web, utilizando tecnologias como JavaScript, TypeScript, React e
                Next.js. Busco minha primeira experiência profissional na área
                de tecnologia, ansioso para aplicar e expandir minhas
                habilidades em um ambiente dinâmico e desafiador.
              </p>
              <p className="text-xl">
                Focando meus estudos em desenvolvimento web, meu objetivo final
                é construir uma carreira de sucesso, trabalhando na area de eu
                amo.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="text-blue-500 font-semibold text-3xl ">
                Tecnologias e Ferramentas
              </h3>
              <p className="text-xl mt-6">
                Usando uma combinação de tecnologias de ponta, crio websites e
                aplicações de alto desempenho.
              </p>
            </div>

            <div className="gap-10 mt-10 grid-cols-1 sm:grid-cols-2 grid md:grid-cols-3 lg:grid-cols-3">
              <CardTechs
                area="Backend"
                color="bg-indigo-400"
                techs="▪️  Node.js ▪️ Python"
                url_image="/back-end-card.png"
              />
              <CardTechs
                area="Frontend"
                color="bg-yellow-400"
                techs="▪️ JavaScript ▪️ TypeScript ▪️ React ▪️ React Native ▪️ Next ▪️ HTML ▪️ CSS ▪️ TailwindCSS"
                url_image="/front-end-card.png"
              />
              <CardTechs
                area="Outras Ferramentas"
                color="bg-pink-400"
                techs="▪️ Git ▪️ Github ▪️ Prisma ▪️ SupaBase ▪️ MySQL ▪️"
                url_image="/fullstack-card.png"
              />
            </div>
          </div>
        </Container>
      </div>
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
