// src/data/works.ts

interface WorkImage {
    url: string;
    alt: string;
    caption?: string;
    isFeatured?: boolean;
    width?: number;
    height?: number;
  }
  
  interface Work {
    id: string;
    title: string;
    tags: string[];
    description: string;
    images: WorkImage[];
    memory?: string;
  }
  
  export const works: Work[] = [
    {
      id: "01",
      title: "JellyBoo",
      tags: ["Brand", "UX/UI"],
      description: "Combining design expertise with front-end development capabilities to deliver comprehensive digital experiences.",
      images: [
        {
          url: "/images/jellyboo/mascot.png",
          alt: "JellyBoo mascot illustration",
          isFeatured: true
        },
        {
          url: "/images/jellyboo/ui-design.png",
          alt: "JellyBoo UI design showcase",
          caption: "Main dashboard interface"
        },
        {
          url: "/images/jellyboo/mobile.png",
          alt: "JellyBoo mobile version",
          caption: "Mobile responsive design"
        }
      ],
      memory: "LUV this little dude"
    },
    {
      id: "02",
      title: "Mineral",
      tags: ["Development"],
      description: "Your description here",
      images: [
        {
          url: "/images/mineral/hero.png",
          alt: "Mineral work hero image",
          isFeatured: true
        },
        {
          url: "/images/mineral/process.png",
          alt: "Development process visualization",
          caption: "Our development workflow"
        }
      ]
    }
  ];