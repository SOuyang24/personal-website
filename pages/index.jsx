import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import LatestCode from "../components/LatestCode";
import Hero from "../components/Hero";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";
import "semantic-ui-css/semantic.min.css";

export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title="Simon Ouyang - Innovator, Tech Lead, Developer"
      description="Developer portfolio to show what I have done"
    >
      <Hero />
      {/* <FavouriteProjects />
      <LatestCode repositories={repositories} /> */}
    </ContainerBlock>
  );
}

export const getServerSideProps = async () => {
  console.log(process.env.GITHUB_AUTH_TOKEN);
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);
  // console.log("REPOSITORIES", repositories);

  return {
    props: {
      repositories,
    },
  };
};
