import gsap from "@assets/icons/logos/gsap.svg";
import logo from "@assets/icons/logos/logo.svg";
import logo2 from "@assets/icons/logos/logo2.svg";
import logo3 from "@assets/icons/logos/logo3.svg";
import next from "@assets/icons/logos/next.svg";
import react from "@assets/icons/logos/react.svg";
import tailwind from "@assets/icons/logos/tailwind.svg";
import threejs from "@assets/icons/logos/threejs.svg";
import ts from "@assets/icons/logos/ts.svg";
import img1 from "@assets/images/projects/1.avif";
import img2 from "@assets/images/projects/2.avif";
import img3 from "@assets/images/projects/3.avif";
import img4 from "@assets/images/projects/4.avif";

export const projectsList = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    description:
      "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    image: img1,
    link: "/project/1",
    icons: [react, tailwind, ts, threejs, logo3],
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    description:
      "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    image: img2,
    link: "/project/2",
    icons: [next, tailwind, ts, logo2, logo],
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    description:
      "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    image: img3,
    link: "/project/3",
    icons: [react, tailwind, ts, threejs, logo],
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    description:
      "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects.",
    image: img4,
    link: "/project/4",
    icons: [next, tailwind, ts, threejs, gsap],
  },
];
