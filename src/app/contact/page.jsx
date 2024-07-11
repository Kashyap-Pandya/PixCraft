import Image from "next/image";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact",
  description: "Contact description",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/contact1.svg"
          alt="contact image"
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email Address" required />
          <input
            type="tel"
            pattern="[0-9]{10}"
            placeholder="Phone Number (Optional)"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
            required
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
