import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import FavouriteCertifications from "../components/FavouriteCertifications";
import Hero from "../components/Hero";
import "semantic-ui-css/semantic.min.css";
import Script from "next/script"

export default function Home() {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID
  return (
    <>
    <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}/>
    <Script id="google-analytics" strategy="afterInteractive">
      {
        `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', ${GA_ID});
        `
      }
    </Script>
    <ContainerBlock
      title="Xi Ouyang - Innovator, Tech Lead, Developer"
      description="Developer portfolio to show what I have done"
    >
      <Hero />
      <FavouriteCertifications />
    </ContainerBlock>
    </>
  );
}
