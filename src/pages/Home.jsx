import React from 'react';
import { FaRegImage } from 'react-icons/fa';
import Post from '../components/Post';
import Question from '../components/Question';
import styles from '../styles/Home.module.css';

const posts = [
  {
    profile: '/images/user.jpg',
    name: 'St. John Smith',
    time: '5 min',
    text: [
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit officiis delectus repudiandae dolor. Temporibus voluptas, consequuntur nesciunt non quaerat autem.',
      '#Lorem #ipsum #dolor #sit #amet #consectetur #adipisicing #elit #Minima #exercitationem #Lorem #ipsum #dolor #sit #amet #consectetur #adipisicing #elit #Minima #exercitationem',
    ],
    image: '/images/men.png',
  },
  {
    profile: '/images/user.jpg',
    name: 'Mitchel Smith',
    time: '2 min',
    text: [
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit officiis delectus repudiandae dolor. Temporibus voluptas, consequuntur nesciunt non quaerat autem.',
      '#Lorem #ipsum #dolor #sit #amet #consectetur #adipisicing #elit #Minima #exercitationem #Lorem #ipsum #dolor #sit #amet #consectetur #adipisicing #elit #Minima #exercitationem',
    ],
  },
];

const questions = [
  {
    image: '/images/user.jpg',
    text: 'What moisturizer should I use in winter time? My skin is...',
  },
  {
    image: '/images/user.jpg',
    text: 'What is difference between dry and dehydrated skin?',
  },
  {
    image: '/images/user.jpg',
    text: 'My skin is so dry and sensitive. Suggest me some sunscreen that wont cause reaction.',
  },
  {
    image: '/images/user.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    image: '/images/user.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam',
  },
];

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.timeline}>
        <div className={styles.addPost}>
          <div className={styles.profile}>
            <img src="/images/user.jpg" alt="user profile" />
          </div>
          <div className={styles.fields}>
            <input type="text" placeholder="Ask questions..." />
            <div className={styles.upload}>
              <div className={styles.inputFile}>
                <input type="file" id="file" />
                <label htmlFor="file">
                  <FaRegImage size={15} /> &nbsp;Upload photo
                </label>
              </div>

              <div className={styles.buttons}>
                <button>Cancel</button>
                <button className={styles.filled}>Post</button>
              </div>
            </div>
          </div>
        </div>

        {/* Posts */}
        {posts.map((pst) => (
          <Post post={pst} />
        ))}
      </div>

      {/* Suggestions */}
      <div className={styles.suggestions}>
        <div className={styles.userProfile}>
          <img
            src="/images/background.jpg"
            alt="background"
            className={styles.background}
          />
          <div className={styles.user}>
            <img src="/images/user.jpg" alt="user" />
          </div>
          <div className={styles.userInformation}>
            <h3>John Smith</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
              autem iste architecto dolores nesciunt obcaecati rem ullam tempore
              ea nemo illo porro eum officiis eos perferendis, rerum molestiae
              minus id temporibus iusto non delectus exercitationem sequi. Eum
              vel, provident earum, ratione, at ea adipisci saepe expedita odio
              maiores quos. Provident?
            </p>
            <button>View Profile</button>
          </div>
        </div>

        {/* Questions */}
        <div className={styles.questions}>
          <h2>Best questions for you.</h2>
          {questions.map((question) => (
            <Question question={question} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
