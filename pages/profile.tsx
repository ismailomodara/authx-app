import Image from 'next/image'
import Navigation from "../components/Navigation";

import styles from "../styles/profile.module.scss";
import profileAv from "../public/profile.png";

export default function Profile() {
  const profile = {
    name: "Ismail Omodara",
    email: "ismail@nqlb.co"
  }
  return (
    <div>
      <Navigation name={profile.name} />
      <div className={styles.profile}>
        <div className={styles['profile-image']}>
          <Image src={profileAv} alt="Image" />
        </div>
        <div className={styles["profile-content"]}>
          <h1>Welcome home,</h1>
          <p>{profile.name}</p>
        </div>
      </div>
    </div>
  )
}
