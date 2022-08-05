import styles from "./AboutMe.module.css";
import Card from "../ui/Card";

const AboutMe = () => {
  return (
    <div className={styles.main}>
      <Card>
        <section className={styles.section}>
          <h1>About Me</h1>
          <p>
            Who would have thought that gaming would lead me to where I am
            today? As someone who has played through many classic titles such as
            Bioshock, Dark Souls, Far Cry and much more, programming started as
            a little hobby of mine. Never have I thought that this hobby would
            end up being my career, but here I am and ready to take on new
            challenges every day.
          </p>
          <p>
            I am a student in computer science at McGill University who is
            enthusiastic and unafraid to tackle problems that are being thrown
            my way. I believe this mentality is required in order for me to
            continue growing as a developer. While I do not have any previous
            work experience, I strive to learn more every day in order to be a great addition 
            to any future team I will join. This mindset
            in addition to my great teamworking and communication skills are
            the key to releasing any successful products in my opinion.
          </p>
          <p>
            Do not hesitate to contact me. I will be glad to get to know you.
          </p>
        </section>
      </Card>
    </div>
  );
};
export default AboutMe;
