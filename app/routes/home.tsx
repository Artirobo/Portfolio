import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio" },
    { name: "description", content: "Welcome to Manish Portofolio Router!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
