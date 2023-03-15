import Image from "next/image";
import styles from "../Profile/profile.module.css"

const Profile = () => {
  return (
    <>
      <iframe className={styles.iframer} src="https://www.youtube.com/embed/RR2EI8EEOOw?&autoplay=1&loop=1&mute=1&showinfo=0&controls=0"></iframe>
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

        </div>
      </div>

    </>
  )
}

export default Profile;