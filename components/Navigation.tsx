import type { NextPage } from 'next';
import Link from "next/link";
import { useRouter } from 'next/router'

import styles from "../styles/navigation.module.scss";

interface NavigationInterface {
  name: string
}

const Navigation: NextPage<NavigationInterface> = ({ name }) => {
  const login = () => {
    window["authx"].initiateSession()
  }

  const logout = () => {
    window["authx"].logout()
  }

  const redirect = () => {
    const router = useRouter();
    router.push("/redirect")
  }

  return (
    <div className={styles.navigation}>
      <Link href="/">
        <h2>GetChat</h2>
      </Link>
      <ul className={ `${styles['navigation-links']} ${name ? 'hide' : ''}`}>
        <li><a href="https://www.google.com"></a> Features</li>
        <li><a href="https://www.google.com"></a> Pricing</li>
        <li><a href="https://www.google.com"></a> Documentation</li>
      </ul>
      <div>
        {
          name ?
            <div className={styles.user}>
              <span></span>
              <p>{name}</p>
              <button className="button button-pr button-sm" onClick={logout}>Logout</button>
            </div>
            :
            <button className="button button-wh" onClick={login}>Continue to dashboard</button>
        }
      </div>

    </div>
  )
}

export default Navigation
