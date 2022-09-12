import type { NextPage } from 'next';
import Link from "next/link";

import styles from "../styles/navigation.module.scss";

interface NavigationInterface {
  name: string
}

const Navigation: NextPage<NavigationInterface> = ({ name }) => {

  return (
    <div className={styles.navigation}>
      <h2>GetChat</h2>
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
              <Link href="/">
                <button className="button button-pr button-sm">Logout</button>
              </Link>
            </div>
            :
            <Link href="/profile">
              <button className="button button-wh">Continue to dashboard</button>
            </Link>
        }
      </div>

    </div>
  )
}

export default Navigation
