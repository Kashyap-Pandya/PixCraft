import Image from "next/image";
import styles from "./home.module.css";

export default function Home() {
  return (
    <h1 className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          Transforming Ideas into Digital Arts
          <span className={styles.dot}>.</span>
        </h1>

        <p className={styles.desc}>
          Innovation is at the heart of PixCraft. We provide cutting-edge web
          design solutions that help your business stand out in the digital
          world.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image
            src="/brands2.png"
            alt="brands image"
            fill
            className={styles.heroImg}
            unoptimized={true}
          />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/hero.svg"
          fill
          className={styles.heroImg}
          alt="hero image"
        />
      </div>
    </h1>
  );
}
