import React from 'react';
import styles from './featured.module.css';
import Image from 'next/image';

const Featured = () => {
  // Example data - you can replace this with actual dynamic data
  const exampleTitle = "Exciting New Features";
  const exampleImage = "/post.jpg"; // Replace with your image path
  const examplePostTitle = "Introducing Our Latest Update";
  const examplePostDesc = "Discover the innovative enhancements in our latest release. This update brings you a smoother, more intuitive experience.";

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{exampleTitle}</h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          {/* Make sure to replace 'exampleImage' with the actual image source */}
          <Image src={exampleImage} alt="featured" width={500} height={500} />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.postTitle}>{examplePostTitle}</h2>
          <p className={styles.postDesc}>{examplePostDesc}</p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
