import Image from "next/image";
import styles from "./postcard.module.css";
import Link from "next/link";

const PostCard = ({ post }) => {
  const date = new Date();
  const formateDate = date.toDateString();
  // console.log(date);
  // console.log(post?.createdAt?.toString().slice(0, 10), "Date from mongo");
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {post && (
          <div className={styles.imgContainer}>
            <Image src={post.img} alt="" fill className={styles.img} />
          </div>
        )}
      </div>
      <div className={styles.bottom}>
        <div className={styles.date}>
          {post?.createdAt?.toString().slice(0, 10)}
        </div>
        <h1 className={styles.title}>{post?.title}</h1>
        <p className={styles.desc}>{post?.body}</p>
        <Link className={styles.link} href={`/blog/${post.slug}`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
