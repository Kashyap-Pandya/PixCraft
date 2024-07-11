import { handleGithubLogin } from "@/lib/action";
import styles from "./login.module.css";
import LoginForm from "@/components/loginForm/LoginForm";
import Image from "next/image";
const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button className={styles.github}>
            Login with Github{" "}
            <Image
              className={styles.img}
              src="/github.png"
              width={50}
              height={50}
              alt="github logo"
            />{" "}
          </button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
