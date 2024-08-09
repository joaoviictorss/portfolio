import { Project } from "./types";

export const projects: Project[] = [
  {
    name: "Ecommerce admin",
    description:
      "Gerenciador de e-commerce, foi desenvolvido para o gerenciamento de produtos, tamanhos, núcleos e embalagens de uma loja virtual.",
    stacks: [
      "React",
      "Next.js",
      "Prisma",
      "Supabase",
      "TypeScript",
      "Tailwind",
    ],
    url: "https://ecommerce-admin-commercecontrol.vercel.app/",
    github_url: "https://github.com/joaoviictorss/ecommerce-admin",
    image_url: "/projects-images/ecommerce-admin.png",
  },
  {
    name: "Ecommerce store",
    description:
      "Utiliza os dados criados pelo E-commerce Admin para criar uma loja virtual completa, permitindo aos clientes navegar, selecionar e comprar produtos de forma fácil e segura.",
    stacks: ["React", "Next.js", "TypeScript", "Stripe", "Tailwind"],
    url: "https://eccomerce-store-commerceshow.vercel.app/",
    github_url: "https://github.com/joaoviictorss/ecommerce-store",
    image_url: "/projects-images/ecommerce-store.png",
  },
  {
    name: "Finance App",
    description:
      "Aplicativo de controle de finanças permite aos usuários monitorar suas finanças em tempo real e cadastrar novas transações com facilidade.",
    stacks: ["React Native", "Supabase", "TypeScript", "Expo", "Tailwind"],
    url: "",
    github_url: "https://github.com/joaoviictorss/finance-app",
    image_url: "/projects-images/finance-app.png",
  },
  {
    name: "Book Wise",
    description:
      "Plataforma onde de avaliações de livros e conferir as opiniões de outros leitores. Apresenta sistema de login e oAuth com suporte a Google e Github.",
    stacks: [
      "React",
      "Next.js",
      "TypeScript",
      "Prisma",
      "MySQL",
      "Styled Components",
    ],
    url: "",
    github_url: "https://github.com/joaoviictorss/book-wise",
    image_url: "/projects-images/book-wise.png",
  },
  {
    name: "Note Mark",
    description:
      "Aplicação desktop criada com Electron, React e Typescript, para gerenciar anotações em markdown.",
    stacks: ["Electron", "React", "TypeScript"],
    url: "",
    github_url: "https://github.com/joaoviictorss/note-mark",
    image_url: "/projects-images/note-mark.png",
  },
  {
    name: "Plann.er",
    description:
      "Site desktop para montar planos de viagem com amigos, registrar atividades e armazenar links úteis.",
    stacks: ["React", "TypeScript", "Tailwind"],
    url: "",
    github_url: "https://github.com/joaoviictorss/plann.er",
    image_url: "/projects-images/planner.png",
  },
  {
    name: "Plann.er API",
    description:
      "APi do Plann.er, desenvolvido em TypeScript usando Node.js com Fastify e Prisma como ORM, conectado a um banco de dados SQLite.",
    stacks: ["Node.js", "TypeScript", "Prisma", "Fastify", "MySQL"],
    url: "",
    github_url: "https://github.com/joaoviictorss/plann.er-api",
    image_url: "/projects-images/planner.png",
  },
  {
    name: "Pet Web App",
    description:
      "aplicação web dedicado à adoção responsável de animais de estimação. Este aplicativo foi criado para ajudar tutores de animais de estimação em potencial a encontrar e adotar animais de estimação.",
    stacks: ["React", "Javascript", "Firebase"],
    url: "https://pet-web-app-two.vercel.app/",
    github_url: "https://github.com/joaoviictorss/pet-web-app",
    image_url: "/projects-images/pet-web-app-img.png",
  },
  {
    name: "Flappy Bird",
    description:
      "O bom e velho Flappy Bird, criado utilizando apenas HTML, CSS e JavaScript",
    stacks: ["Javascript"],
    url: "https://joaoviictorss.github.io/Flappy-Bird/",
    github_url: "https://github.com/joaoviictorss/Flappy-Bird",
    image_url: "/projects-images/flappy-bird.png",
  },
  {
    name: "Pass in Web",
    description:
      "A aplicação de verificação de convidados para eventos, apresenta listagem aprimorada com url states e paginação.",
    stacks: ["React", "TypeScript", "Tailwind"],
    url: "https://github.com/joaoviictorss/NLW-pass-in-web",
    github_url: "ttps://github.com/joaoviictorss/NLW-pass-in-web",
    image_url: "/projects-images/pass-in-web.png",
  },
];
