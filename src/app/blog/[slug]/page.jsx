import { getPost } from "@/lib/data";
import styles from "./singlepostpage.module.css";
import Image from "next/image";
import { Suspense } from "react";
import PostUser from "@/components/postUser/PostUser";

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.desc,
  };
};

const getData = async (slug) => {
  try {
    const res = await fetch(`http://localhost:3000/api/blog/${slug}`);

    if (!res.ok) {
      throw new Error("something went wrong");
    }

    const data = await res.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  // const post = await getPost(slug);
  const post = await getData(slug);

  return (
    <div className={styles.container}>
      {post?.img && (
        <div className={styles.imgContainer}>
          <Image src={post.img} alt="" fill className={styles.img} />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles?.detail}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {post.createdAt.toString().slice(0, 10)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};
export default SinglePostPage;
