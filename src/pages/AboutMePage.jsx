import AboutMe from "../components/AboutMeComponents/AboutMe";
import WorkExperience from '../components/AboutMeComponents/WorkExperience'
import PicAndName from "../components/AboutMeComponents/PicAndName";
import SkillsAndProjects from "../components/AboutMeComponents/SkillsAndProjects";
import ContactMe from "../components/AboutMeComponents/ContactMe";
import ToGames from '../components/AboutMeComponents/ToGames'

const AboutMePage = () => {
  return (
    <div>
      <PicAndName />
      <AboutMe />
      <WorkExperience/>
      <SkillsAndProjects />
      <ContactMe />
      <ToGames/>
    </div>
  );
}
export default AboutMePage;
