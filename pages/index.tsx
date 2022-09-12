import Image from 'next/image'
import illustration from "../public/illustration.png";
import styles from "../styles/home.module.scss";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <div>
      <Navigation name="" />
      <div className={styles['home']}>
        <div className={styles['home-content']}>
          <h1>Chat Easy: <br />a new way to chat.</h1>
          <p>The simplest, easiest and fastest way to send notifications with yours customers in real-time.
            Communicate with customers without delay.</p>
          <div className="actions">
            <button className="button button-pr">Let's get started</button>
          </div>
        </div>
        <div className={styles['home-image']}>
          <Image src={illustration} />
        </div>
      </div>
    </div>
  )
}
