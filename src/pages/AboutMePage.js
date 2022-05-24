import AboutMe from "../components/AboutMeComponents/AboutMe";
import PicAndName from "../components/AboutMeComponents/PicAndName";
import SkillsAndProjects from "../components/AboutMeComponents/SkillsAndProjects";

function AboutMePage() {
  return (
    <div>
      <PicAndName />
      <AboutMe />
      <SkillsAndProjects />
    </div>
  );
}
export default AboutMePage;
