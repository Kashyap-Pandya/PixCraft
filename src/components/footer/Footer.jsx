import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <span className={styles.logospan}> PixCraft &lt;🎨/&gt;</span>
      </div>
      <div className={styles.text}>
        PixCraft&copy; 2024 All rights reserved.
      </div>
    </div>
  );
};
export default Footer;
