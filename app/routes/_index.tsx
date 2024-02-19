import { Container, Flex, VStack, Box } from "@chakra-ui/react";
import type { MetaFunction } from "@remix-run/node";
import BlobSlider from "~/components/BlobSlider";
import Intro from "~/components/Intro";
import Navbar from "~/components/Navbar";
import HomeSection from "~/components/HomeSection";
import ProjectsSection from "~/components/ProjectsSection";

export const meta: MetaFunction = () => {
  return [
    { title: "Yusuf Yusuf Portfolio" },
    {
      name: "Find out about my work so far.",
      content: "Welcome to my portfolio!",
    },
  ];
};

export default function Index() {
  return (
    <>
      <HomeSection />
      <ProjectsSection />
    </>
  );
}
