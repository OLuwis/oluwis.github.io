import { GitHubIcon, LinkedInIcon, MediumIcon } from "@/components/icons";
import { Resume } from "@/data/type";

export const RESUME_DATA: Resume = {
  name: "Luis Miguel",
  initials: "LM",
  location: "Salvador, BA - Brasil",
  locationLink: "",
  about:
    "Desenvolvedor de Software focado em criar produtos escaláveis e de alta qualidade.",
  summary: (
    <>
      Desenvolvedor de software com grande interesse em tecnologia e programação. Tenho estudado e praticado tecnologias como React, Angular, C#, Java, Docker e Git, desenvolvendo projetos pessoais e participando de cursos e comunidades da área.
      <br/>
      <br/>
      Busco minha primeira oportunidade profissional para aplicar meus conhecimentos, aprender com profissionais experientes e crescer junto com um time de tecnologia. Tenho facilidade para aprender, sou proativo e gosto de trabalhar em equipe.
      <br/>
      <br/>
      Aberto a estágios, oportunidades júnior e programas de trainee na área de desenvolvimento.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/109117221?v=4",
  personalWebsiteUrl: "",
  contact: {
    email: "contato.luismiguelreis@gmail.com",
    tel: "71999048090",
    socials: [
      {
        name: "GitHub",
        url: "https://github.com/oluwis",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/luismiguelreis/",
        icon: LinkedInIcon,
      },
      {
        name: "Medium",
        url: "https://medium.com/@luwis",
        icon: MediumIcon,
      },
    ],
  },
  works: [],
  educations: [
    {
      school: "Estácio de Sá",
      degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
      start: "06/2023",
      end: "06/2026",
    },
  ],
  skills: [
    "TypeScript",
    "Angular",
    "React/Next.js",
    "C#/.NET",
    "Java/Spring",
    "Node.js/Express",
    "Python",
    "Ruby/Rails",
    "Postgres/Sqlite",
    "MongoDb",
    "Redis",
    "Docker",
    "Git/Github Actions",
    "Linux",
    "AWS",
    "RabbitMQ"
  ],
  projects: [
    {
      title: "Pesquisas Eleitorais",
      techStack: ["TypeScript", "React/Next.js", "Tailwind CSS", "ESLint"],
      description:
        "Visualizador de pesquisas eleitorais através de gráficos interativos feito com Next.js.",
      link: {
        label: "nextjs-pesquisas-eleitorais",
        href: "https://github.com/OLuwis/nextjs-pesquisas-eleitorais",
      },
    },
    {
      title: "Calculator",
      techStack: ["Python", "Qt"],
      description:
        "Calculadora feita com Python e Qt.",
      link: {
        label: "python-calculator",
        href: "https://github.com/OLuwis/python-calculator",
      },
    },
    {
      title: "Fut Bot",
      techStack: ["Ruby", "Docker"],
      description:
        "Bot do Telegram para consultar jogos de futebol feito com Ruby.",
      link: {
        label: "ruby-futebol-bot",
        href: "https://github.com/OLuwis/ruby-futebol-bot",
      },
    },
    {
      title: "Task List",
      techStack: ["Java", "Spring", "Security", "JPA", "JDBC", "Lombok", "GraphQL", "H2DB"],
      description:
        "API em GraphQL para gerenciar listas de tarefas feita com Java, Spring, Security e JPA.",
      link: {
        label: "spring-task-list-graphql-api",
        href: "https://github.com/OLuwis/spring-task-list-graphql-api",
      },
    },
    {
      title: "Rede Social",
      techStack: ["C#", "ASP.NET", "EF Core", "SQLite", "RabbitMQ", "Docker"],
      description:
        "API de rede social com microsserviços feita com C#, ASP.NET, EF Core, SQLite, RabbitMQ e Docker.",
      link: {
        label: "dotnet-social-media-api",
        href: "https://github.com/OLuwis/dotnet-social-media-api",
      },
    },
    {
      title: "Crypto App",
      techStack: ["Angular", "Chart.js"],
      description:
        "Rastreador de crypto moedas com gráficos interativos feito com Angular.",
      link: {
        label: "angular-crypto-app",
        href: "https://github.com/OLuwis/angular-crypto-app",
      },
    },
  ],
}
