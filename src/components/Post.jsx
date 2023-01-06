import React from 'react';
import {
  FaHeart,
  FaRegCommentAlt,
  FaShareAlt,
  FaRegBookmark,
} from 'react-icons/fa';
import styles from '../styles/components/Post.module.css';

const Post = ({ post }) => {
  return (
    <div className={styles.post}>
      <div className={styles.profile}>
        <img src={post.profile} alt="user profile" />
        <div>
          <h3>{post.name}</h3>
          <span>{post.time}</span>
        </div>
      </div>
      <div className={styles.text}>
        {post.text.map((p) => (
          <p>{p}</p>
        ))}
      </div>
      {post.image && (
        <img src="/images/men.png" alt="men" className={styles.image} />
      )}
      <div className={styles.actions}>
        <div>
          <FaHeart size={14} color="red" />
          <span>100+ Likes</span>
        </div>
        <div>
          <FaRegCommentAlt size={14} />
          <span>Comment</span>
        </div>
        <div>
          <FaShareAlt size={14} />
          <span>Share</span>
        </div>
        <div>
          <FaRegBookmark size={14} />
          <span>Save</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
