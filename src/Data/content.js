const content = [
  {
    id: "grid-image-1",
    classNames: "image-vertical",
    title: "ABOUT",
    imgURL: "/images/beach1.JPG",
    items: [
      {
        title: "Welcome to my digital playground!",
        paragraph:
          "Hey there! I'm Brook, and this is where I showcase my journey as a Full Stack Developer. Feel free to explore and see what I've been cooking up!"
      },
      {
        title: "What I Do",
        paragraph:
          "I specialize in building web applications from the ground up, focusing primarily on Django for backend and React for frontend development. Whether it's creating intuitive UIs or optimizing database queries, I thrive on solving problems and delivering top-notch solutions."
      },
      {
        title: "What I'm Looking For",
        paragraph:
          "I'm currently open to fulltime opportunities, freelance projects, and exciting collaborations. I have a particular interest in web development and would love to contribute my skills to a dynamic team that's pushing the boundaries."
      },
      {
        title: "A Bit About Me",
        paragraph:
          "When I'm not lost in code or teaching Computer Science to the brilliant minds of Baltimore City Public Schools, you'll find me in a coffee show in Mt Vernon or dancing at Maryland Youth Ballet."
      }
    ]
  },
  {
    id: "grid-image-2",
    classNames: "image-square",
    title: "RESUME",
    imgURL: "/images/beach1.JPG",
    items: [
      {
        title: "Work Experience"
      },
      {
        subtitle: "Habesha Film Association, Freelance Web Developer",
        paragraph:
          "Transformed client needs into production-ready applications. Developed a membership web app with user account and profile managment tools, a job board, and a paywall for member exclusive contents."
      },
      {
        subtitle: "Space Telescope Science Institute, Intern",
        paragraph:
          "worked with a team of science curators and web designers to maintain the institute's external facing web applications."
      },
      {
        subtitle: "University of Baltimore, Computer Science Instructor",
        paragraph:
          "Crafted curriculum and lesson content, ensuring that students meet skill targets. Delivered lectures and provided academic mentorship."
      },
      {
        subtitle: "Code in the Schools, Instructor",
        paragraph:
          "Summer instructor at Code-Works, a 5-week intensive program. Taught Python and Django REST framework to high school students."
      },
      {
        title: "Technical Skills",
        ul: [
          "Backend: Django, SQL, PostgreSQL",
          "Frontend: React",
          "Others: Linux, LabVIEW",
          "Languages: Python, JavaScript",
          "Certifications: Currently pursuing certification in Amazon Web Services."
        ]
      },
      {
        title: "Education & Training"
      },
      {
        subtitle: "Morgan State University - 2022",
        ul: [
          "Degree: MSc in Integrated Science",
          "Highlights: Research Assistant for Dr. Dereje Seifu, characterized nanomaterials and contributed to published research."
        ]
      },
      {
        subtitle: "University of Baltimore - 2018",
        ul: ["Degree: BSc in Applied IT"]
      },
      {
        title: "Soft Skills",
        ul: [
          "Strategic thinker, excelling in efficiency and adaptability.",
          "Natural leader, passionate about team synergy.",
          "Committed to increasing diversity in the tech industry."
        ]
      },
      {
        title: "References can be provided upon request"
      }
    ]
  },
  {
    id: "grid-image-3",
    classNames: "image-horizontal",
    title: "WORK SAMPLE",
    imgURL: "/images/beach1.JPG",
    items: [
      {
        title: "Habesha Film Association",
        subtitle:
          "A Website to bridge the gab between film industry profetionals in the Horn of Africa with the rest of the world",
        img: "https://hfa.media/media/main/img/logo_main.png",
        links: [
          {
            href: "https://hfa.media/",
            text: "Live Site"
          }
        ],
        paragraph:
          "I created a web application fully built with django to help the association connect with its members, collect donations, and publish offical documments. I also created a custom user account managment system and a paywall for exclusive member content. I worked with the director of communications and other members of the leadership team to plan, design, and create the web application."
      },
      {
        title: "Encanto Oculto",
        subtitle: "A Simple Blog with Django Backend and React Frontend",
        img:
          "https://encantoocultoblog.brookdaba.repl.co/media/main/post/bee_and_key.jpeg",
        links: [
          {
            href: "https://z4rcrx-3000.csb.app/",
            text: "Demo"
          },
          {
            href: "https://replit.com/@BrookDaba/EncantoOcultoBlog",
            text: "Backend Code"
          },
          {
            href: "https://codesandbox.io/p/sandbox/encanto-oculto-z4rcrx",
            text: "Frontend Code"
          }
        ],
        paragraph:
          "I created a dynamic and engaging blog that seamlessly integrates Django as the backend and React as the frontend. This project showcases my proficiency in using Django Rest Framework as well as extending the library to create a custom backend protocol (custom user model). To enhance user experience, I leveraged Axios to efficiently retrieve data from the API to the frontend. Additionally, I implemented React Context for effective styling and made use of the versatile React Bootstrap library for creating various components. This project not only demonstrates my technical skills but also highlights my ability to deliver a user-friendly and aesthetically pleasing web application."
      },
      {
        title: "Ballet Vinyls",
        img: "/images/bv.png",
        links: [
          {
            href: "https://ng87zm-3000.csb.app/",
            text: "Demo"
          },
          {
            href: "https://codesandbox.io/p/sandbox/ballet-vinyl-ng87zm",
            text: "Code"
          }
        ],
        paragraph:
          "Ballet Vinyls is a conceptual brand that offers an immersive journey into the world of ballet through vinyl records. This project is a single-page scrolling story, brought to life using the power of React and the versatility of the GSAP framework. What makes it unique is the intricate web of multiple components within a complex hierarchy, resulting in a seamless user experience. To achieve this, I harnessed the magic of GSAP's ScrollTrigger and Flip plugins, enhancing the storytelling with elegant animations that respond to user interactions. To ensure a polished and fluid presentation, Lenis was employed to smoothen the transitions. In a world where comprehensive GSAP tutorials for React applications are scarce, I ventured to create my own implementation, making Ballet Vinyls a testament to my expertise in blending technology and artistry."
      }
    ]
  },
  {
    id: "grid-image-5",
    classNames: "image-square",
    title: "CONTACT",
    imgURL: "/images/beach1.JPG",
    items: [
      {
        form: true
      },
      {
        title: "New Title",
        paragraph:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        title: "New Title",
        paragraph:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
    ]
  }
];

export default content;
