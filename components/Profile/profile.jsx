import Image from "next/image";
import styles from "../Profile/profile.module.css"

const Profile = () => {
  return (
    <>
      <iframe className={styles.iframer} src="https://www.youtube.com/embed/5_Blq9W9cT8?&autoplay=1&loop=1&mute=1&showinfo=0&controls=0"></iframe>
      <div className={styles.contenedor}>

        <div className={styles.subcontenedor}>
          <div className={styles.card}>
            <Image
              src="/profile.webp"
              width={640}
              height={677}
              alt="Emmanuel Villavicencio"
              className={styles.imagen}
              ></Image>
            <h1 className={styles.titulo} >Emmanuel <br /> Villavicencio</h1>
            <p className={styles.texto}>Programador Full Stack <br />
              | Next | React | Redux | CSS | HTML | </p>
          </div>
              </div>

          <Image
            src="/Graphic-Decentralized-Box-p-800.png"
            width={800}
            height={509}
            alt="Prueba"
            className={styles.box}
          ></Image>

          <Image
            src="/Graphic-Decentralized-Base-p-800.png"
            width={800}
            height={509}
            alt="Prueba"
            className={styles.box1}
          ></Image>

          <Image
            src="/Graphic-Decentralized-Orbitals-p-800.png"
            width={800}
            height={509}
            alt="Prueba"
            className={styles.box1}
          ></Image>



      </div>

    </>
  )
}

export default Profile;