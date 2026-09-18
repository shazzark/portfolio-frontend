// app/_lib/techicon.js

import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiVercel,
  SiGithub,
  SiFigma,
  SiRender,
  SiSupabase,
  SiFramer,
} from "react-icons/si";
import { Server, Layout, Wrench } from "lucide-react";

import { MdWeb } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";

import { ShieldCheck, Network, CloudUpload } from "lucide-react";

const techIconMap = {
  // Frontend
  react: SiReact,
  nextjs: SiNextdotjs,
  tailwind: SiTailwindcss,
  typescript: SiTypescript,
  javascript: SiJavascript,
  html5: SiHtml5,
  css3: SiCss3,

  // Backend
  nodejs: SiNodedotjs,
  express: SiExpress,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  reactnative: SiReact,
  api: Network,
  auth: ShieldCheck,
  database: FaDatabase,
  deploy: CloudUpload,
  supabase: SiSupabase,

  // Tools
  git: SiGit,
  vercel: SiVercel,
  github: SiGithub,
  figma: SiFigma,
  render: SiRender,
  framer: SiFramer,

  // frontend: MdWeb,
  // category icons
  Server: Server,
  Layout: Layout,
  Wrench: Wrench,
};

export default techIconMap;
