import Image from 'next/image'
import illustration from "../public/illustration.png";
import styles from "../styles/home.module.scss";
import Navigation from "../components/Navigation";
import Head from 'next/head'
import Script from 'next/script'

export default function Home() {
  const initializeAuthX = () => {
    console.log('Sushi')
    const authx = AuthX("Wn9PZ3NcYMWRlWyf78Aovdok95vahmE3Sp6Js1Tp", {
      redirect_uri: "https://getchat-io.vercel.app/redirect",
      locale: 'en',
      isSpa: true,
      onComplete: (session, message) => {
        console.log('logged in ', session, message)
        console.log('Session = ', authx.getSession())
      },
      onError: function (error) {
        alert(error.message)
      }
    })

    window["authx"] = authx
  }

  const login = () => {
    authx.initiateSession()
  }

  return (
    <div>
      <Head>
        <title>Get Chat</title>
      </Head>
      <>
        <Script
          id="authx"
          src="https://ajs.radius.africa/authx.js"
          onLoad={initializeAuthX}
        />
      </>
      <Navigation name="" />
      <div className={styles['home']}>
        <div className={styles['home-content']}>
          <h1>Chat Easy: <br />a new way to chat.</h1>
          <p>The simplest, easiest and fastest way to send notifications with yours customers in real-time.
            Communicate with customers without delay.</p>
          <div className="actions">
            <button className="button button-pr" onClick={login}>Let's get started</button>
          </div>
        </div>
        <div className={styles['home-image']}>
          <Image src={illustration} />
        </div>
      </div>
    </div>
  )
}
