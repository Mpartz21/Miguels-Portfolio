import { h, r } from 'maath/dist/misc-7d870b3c.esm';
import {
    mobile,
    backend,
    web,
    angular,
    aws,
    csharp,
    java,
    python,
    sql,
    graphql,
    reactjs,
    mongodb,
    git,
    docker,
    ata,
    revature,
    tmobile,
    project2,
    project3,
    nodejs,
    ust,
    jeffpfp,
    tariqpfp,
    zamanthapfp,
  } from '../assets';
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
			{
				name: 'Angular',
				icon: angular,
			},
			{
				name: 'AWS',
				icon: aws,
			},
			{
				name: 'C#',
				icon: csharp,
			},
			{
				name: 'docker',
				icon: docker,
			},
			{
				name: 'git',
				icon: git,
			},
			{
				name: 'GraphQL',
				icon: graphql,
			},
			{
				name: 'JAVA',
				icon: java,
			},
			{
				name: 'MongoDB',
				icon: mongodb,
			},
      {
        name: 'NodeJS',
        icon: nodejs,
      },
			{
				name: 'Python',
				icon: python,
			},
			{
				name: 'React JS',
				icon: reactjs,
			},
			{
				name: 'SQL',
				icon: sql,
			},
		];
  
  const experiences = [
    {
      title: "Full Stack Developer",
      company_name: "UST-Global",
      icon: ust,
      iconBg: "#E6DEDD",
      date: "Nov 21 - May 23",
      points: [
        "Developed and maintained robust and scalable full-stack web applications using technologies such as Node.js, React, Angular, and MySQL.",
        "Collaborated with cross-functional teams to design and implement new features and functionalities, following Agile methodologies and delivering projects on time and within budget.",
        "Actively participated in the development of APIs, microservices, and serverless functions using technologies such as AWS Lambda, API Gateway, and Docker, among others.",
        "Optimized performance and scalability of web applications by implementing caching strategies, load-balancing techniques, and serverless architectures.",
      ],
    },
    {
      title: "Production Support Engineer",
      company_name: "T-Mobile",
      icon: tmobile,
      iconBg: "#E6DEDD",
      date: "Nov 21 - Apr 23",
      points: [
        "Supported and maintained web-based applications and systems as a Full Stack Developer at T-Mobile.",
        "Contributed to supporting, developing, and testing new features and enhancements using front-end and back-end technologies.",
        "Collaborated with cross-functional teams to identify and resolve technical issues and optimize system performance.",
        "Demonstrated a strong understanding of T-Mobile's business objectives and client needs, working closely with stakeholders to ensure alignment.",
        "Provided Support for 2 products (Prism, Utopia) with plans to expand to more teams.",
        "Utilized Jira to provide constant updates and inform the team of higher-level issues",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Revature LLC",
      icon: revature,
      iconBg: "#383E56",
      date: "Jul 21 - Jan 2023",
      points: [
        "Finished my extensive three-month training in MEAN stack including Java, Spring, Maven, Docker, JavaScript.",
        "Collaborated with cross-functional teams to design, develop, and test software solutions.",
        "Participated in Agile software development processes, including daily stand-up meetings, sprint planning, and retrospective sessions, to deliver quality software solutions on time and within budget.",
        "Continuously improved technical skills and knowledge through Revature's training programs, including classroom and on-the-job training, coding challenges, and mentorship opportunities.",
      ],
    },
    {
      title: "Associates of Applied Science ",
      company_name: "Advanced Training Associate College ",
      icon: ata,
      iconBg: "#E6DEDD",
      date: "Dec 18 - Feb 20",
      points: [
        "Developed fundamentals of OOP and various programming languages; JAVA, C#, PHP, Jquery, HTML5/CSS3, JavaScript.",
        "Obtained Microsoft Certificate: Introduction to Programming Using HTML and CSS.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Miguel is a highly motivated individual who is always eager to take on new challenges and expand his skill set. He was always open to feedback, and demonstrated a strong desire to improve and grow. He consistently demonstrated a willingness to learn, and asking insightful questions to ensure he fully understood the task at hand. Overall, I highly recommend Miguel for any role that requires a dedicated and hardworking software engineer.",
      name: "Jeff Pajor",
      designation: "Senior Consultant",
      company: "Unify Consulting",
      image: jeffpfp,
    },
    {
      testimonial:
        "Miguel Partida is an exceptional full-stack developer in production support, adept at efficiently managing and troubleshooting multiple products, delivering seamless operations and ensuring uninterrupted functionality.",
      name: "Tariq Rana",
      designation: "Project Manager",
      company: "T-Mobile",
      image: tariqpfp,
    },
    {
      testimonial:
        "Miguel Partida is an exceptional full-stack web developer who stands out for their remarkable ability to learn quickly, adapt to new technologies, and consistently deliver outstanding results, making them an invaluable asset to any team.",
      name: "Zamantha Machado",
      designation: "Team Leader",
      company: "Blue Pearl",
      image: zamanthapfp,
    },
  ];
  
  const projects = [
      {
      name: "Revved Up Reads",
      description:
        "Revved Up Reads is a social media application based around books and reading. The application will allow users to create an account and review a catalog of books. Revved Up Reads allows users to maintain their profile information including any books the user indicates that they are interested in. Users are able to connect with other users through friend requests and view more information from their friend's profiles. Finally Revved Up Reads supports the creation and maintenance of book clubs. Book clubs allow users to join and view the book currently being discussed.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: project3,
      source_code_link: "https://github.com/AntyZhu1/project3",
    },
    {
      name: "Game Review / Guide ",
      description:
        "A simple digital review website in which users can create an account, log in, view a list of games, and add and remove the books from a game list specific to each user",
      tags: [
        {
          name: "Angular",
          color: "blue-text-gradient",
        },
        {
          name: "mySQL",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: project2,
      source_code_link: "https://github.com/Mpartx21/Project-2.git",
    },
    {
      name: "Employee Reimbursement Application",
      description:
        "The Expense Reimbursement System (ERS) will manage the process of reimbursing employees for expenses incurred while on company time. All employees in the company can log in and submit requests for reimbursement and view their past tickets and pending requests. Finance managers can log in and view all reimbursement requests and past history for all employees in the company. Finance managers are authorized to approve and deny requests for expense reimbursement.",
      tags: [
        {
          name: "Angular",
          color: "blue-text-gradient",
        },
        {
          name: "Spring",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: '',
      source_code_link: "https://github.com/Mpartx21/Project-1.git",
    },
  ];

  const about = [
    {
      me : 
        `As an experienced Full-Stack Developer with 2 years of experience 
        in the telemarketing industry, I specialize in software development, 
        system integration, and support. In my role, I helped establish
        and lead a support team that handled all support needs, including bugs,
        network issues, and production issues both minor and major. 
        As a full-stack developer, I contributed to the development of 
        new features when the dev team was too backed up. Additionally, 
        I monitored pre-existing issues, reported them, and worked to find and 
        fix them. Through these efforts, I helped ensure smooth and uninterrupted
        operations for our clients. I am proficient in React, Java, SQL,
        JavaScript, and Python, and am enthusiastic about staying up-to-date
        with the latest technologies and expanding my skills. With an Associate's
        degree focused on Programming and Web Development from Advanced Training
        Associates, I am equipped with the knowledge and skills to take on new challenges
        and make valuable contributions to any team.`
    }
  ];

  const works = [
    {
      prelude : 
        `Following projects showcases my skills and experience through
      real-world examples of my work. Each project is briefly described with
      links to code repositories and live demos in it. It reflects my
      ability to solve complex problems, work with different technologies,
      and manage projects effectively.`,

  },
  ];


  
  export { services, technologies, experiences, testimonials, projects, works, about };