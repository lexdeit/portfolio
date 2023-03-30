import Image from "next/image";
import styles from "../Profile/profile.module.css";
import { useState, useEffect } from "react";


const Profile = () => {
  const [isScreenBig, setIsScreenBig] = useState(false);

  const handleResize = () => {
    setIsScreenBig(window.innerWidth >= 1200);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <>
      <section id="profile">

        {isScreenBig && <iframe className={styles.iframer} src="https://www.youtube.com/embed/RhlQvbvMg-0?&autoplay=1&loop=1&mute=1&showinfo=0&controls=0"></iframe>}
        <div className={styles.contenedor}>

          <div className={styles.subcontenedor}>
            <div className={styles.card}>
              <Image
                src="/profile.webp"
                width={640}
                height={677}
                alt="Emmanuel Villavicencio"
                className={styles.imagen}
                priority

              ></Image>
              <h1 className={styles.titulo} >Emmanuel <br /> Villavicencio</h1>
              <p className={styles.texto}>Programador Full Stack <br />
                | Next | React | Redux | CSS | HTML | </p>
            </div>
          </div>

          <Image
            src="/Graphic-Decentralized-Box-p-800.webp"
            width={800}
            height={509}
            alt="Prueba"
            className={styles.box}
            priority
          ></Image>

          <Image
            src="/Graphic-Decentralized-Base-p-800.webp"
            width={800}
            height={509}
            alt="Prueba"
            className={styles.box1}
            priority

          ></Image>

          <Image
            src="/Graphic-Decentralized-Orbitals-p-800.webp"
            width={800}
            height={509}
            alt="Prueba"
            className={styles.box1}
            priority

          ></Image>



        </div>

      </section>
    </>
  )
}

export default Profile;