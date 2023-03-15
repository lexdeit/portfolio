import Image from "next/image";
import styles from "../Profile/profile.module.css"

const Profile = () => {
  return (
    <>
      <iframe className={styles.iframe} src="https://www.youtube.com/embed/5_Blq9W9cT8?&autoplay=1&loop=1&mute=1&showinfo=0&controls=0"></iframe>
      <div className={styles.contenedor}>
        <div className={styles.card}>

          <Image
            src="/profile.webp"
            width={640}
            height={677}
            alt="Emmanuel Villavicencio"
            className={styles.imagen}
          ></Image>
          <h1 className={styles.titulo} >Emmanuel Villavicencio</h1>
          <p className={styles.texto}>Programador Full Stack</p>

          <div className={styles.iconos}>
            <span className={styles.instagram} onClick={() => window.open('https://www.instagram.com/lexteckg/')}></span>
            <span className={styles.linkedin} onClick={() => window.open('https://www.linkedin.com/in/lexdeit/')}></span>
            <span className={styles.github} onClick={() => window.open('https://github.com/lexdeit')}></span>
          </div>
        </div>
      </div>

    </>
  )
}

export default Profile;