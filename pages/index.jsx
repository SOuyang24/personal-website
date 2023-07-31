import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import FavouriteCertifications from "../components/FavouriteCertifications";
import Hero from "../components/Hero";
import "semantic-ui-css/semantic.min.css";

export default function Home() {
  return (
    <ContainerBlock
      title="Xi Ouyang - Innovator, Tech Lead, Developer"
      description="Developer portfolio to show what I have done"
    >
      <Hero />
      <FavouriteCertifications />
    </ContainerBlock>
  );
}
