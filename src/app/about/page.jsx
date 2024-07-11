import Image from "next/image";
import styles from "./about.module.css";
export const metadata = {
  title: "About",
  description: "about us",
};

const About = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.subtitle}>About Agency</h2>
          <h1 className={styles.title}>
            Unveiling the Artistry of Digital Possibilities
          </h1>
          <p className={styles.desc}>
            At PixCraft, we redefine digital creativity with fearless
            innovation. Embrace the future of digital excellence with solutions
            crafted to elevate your brand beyond expectations.
          </p>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <h1>
                30 <span className={styles.plus}>+</span>
              </h1>
              <p>Clients</p>
            </div>
            <div className={styles.box}>
              <h1>
                4 <span className={styles.plus}>+</span>
              </h1>
              <p>Years of experience</p>
            </div>
            <div className={styles.box}>
              <h1>
                230 k<span className={styles.plus}>+</span>
              </h1>
              <p>Reach</p>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/about.svg" alt="about" className={styles.image} fill />
        </div>
      </div>
    </div>
  );
};
export default About;
