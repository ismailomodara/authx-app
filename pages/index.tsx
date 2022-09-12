import Image from 'next/image'
import illustration from "../public/illustration.png";
import styles from "../styles/home.module.scss";
import Navigation from "../components/Navigation";
import Head from 'next/head'

export default function Home() {
  const signup = () => {
    window["authx"].initiateSession()
  }

  return (
    <div>
      <Head>
        <title>Get Chat</title>
      </Head>
      <Navigation name="" />
      <div className={styles['home']}>
        <div className={styles['home-content']}>
          <h1>Chat Easy: <br />a new way to chat.</h1>
          <p>The simplest, easiest and fastest way to send notifications with yours customers in real-time.
            Communicate with customers without delay.</p>
          <button className="button button-pr" onClick={signup}>Let get started</button>
        </div>
        <div className={styles['home-image']}>
          <Image src={illustration} alt="Image" />
        </div>
      </div>
    </div>
  )
}
