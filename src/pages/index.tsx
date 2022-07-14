import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import AboutMe from "../components/AboutMeComponents/AboutMe";
import PicAndName from "../components/AboutMeComponents/PicAndName";
import SkillsAndProjects from "../components/AboutMeComponents/SkillsAndProjects";
import ContactMe from "../components/AboutMeComponents/ContactMe";
import ToGames from "../components/AboutMeComponents/ToGames";

const Home: NextPage = () => {
  const { data, isLoading, error } = trpc.useQuery([
    "example.hello",
    { text: "from tRPC" },
  ]);
  return (
    <>
      <Head>
        <title>Shoubhit Dash | About</title>
        <link rel="icon" href="/favicon.ico" />

        <meta name="title" content="Shoubhit Dash | About" />
        <meta
          name="description"
          content="Shoubhit Dash aka nexxel's personal website"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nexxel.dev/" />
        <meta property="og:title" content="Shoubhit Dash | About" />
        <meta
          property="og:description"
          content="Shoubhit Dash aka nexxel's personal website"
        />
        <meta property="og:image" content="/nexxel.png" />
      </Head>

      <div>
        <div>{isLoading && "loading"}</div>
        <div>{error && "error"}</div>
        <div>{data && data.greeting}</div>
        <PicAndName />
        <AboutMe />
        <SkillsAndProjects />
        <ContactMe />
        <ToGames />
      </div>
    </>
  );
};

export default Home;
