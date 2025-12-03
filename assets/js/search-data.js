// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-the-best-goodbyes",
      
        title: "The best goodbyes",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/best-goodbyes/";
        
      },
    },{id: "post-ho-chi-minh-trail-racing-giants-pt-2-phong-nha",
      
        title: "Ho Chi Minh Trail Racing Giants Pt 2: Phong Nha",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/HCMC-racing-giantspt2/";
        
      },
    },{id: "post-ho-chi-minh-trail-racing-giants-part-1",
      
        title: "Ho Chi Minh trail racing giants: Part 1",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/HCMC-racing-giants/";
        
      },
    },{id: "books-foundational-papers-in-complexity-science-part-1",
          title: 'Foundational Papers in Complexity Science Part 1',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/foundational/";
            },},{id: "news-best-phd-poster-award-at-unique-retreat-congratulations-to-my-best-friend-vj-on-my-left-right-arrow-for-winning-best-poster-in-masters-category-it-was-a-lot-of-fun-and-learning-experience",
          title: 'Best PhD poster award at UNIQUE retreat. Congratulations!! 🥳🥳🥳 to my best friend...',
          description: "",
          section: "News",},{id: "news-my-first-scientific-talk-at-world-s-biggest-neuroscience-conference-society-for-neuronscience-sfn-2025-a-lot-of-amazing-scientists-from-many-places-came-together-to-showcase-their-work-including-me-in-addition-this-was-my-first-time-organising-a-symposium-at-such-level-thanks-to-the-support-of-my-pi-it-was-a-whelming-but-worth-it-experience",
          title: 'My first scientific talk at world’s biggest neuroscience conference - Society for Neuronscience...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
