import AboutMe from "../components/AboutMeComponents/AboutMe";
import PicAndName from "../components/AboutMeComponents/PicAndName";
import SkillsAndProjects from "../components/AboutMeComponents/SkillsAndProjects";
import ContactMe from "../components/AboutMeComponents/ContactMe";
import ToGames from '../components/AboutMeComponents/ToGames'

function AboutMePage() {
  return (
    <div>
      <PicAndName />
      <AboutMe />
      <SkillsAndProjects />
      <ContactMe />
      <ToGames/>
    </div>
  );
}
export default AboutMePage;
