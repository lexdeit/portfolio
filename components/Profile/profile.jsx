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



            <div>

              <h1 className={styles.titulo} >Programador <br />{`{ Full Stack }`}</h1>
              <p className={styles.subtitulo}>Tecnologias de vanguardia</p>
            </div>




            <>
              <Image
                src="/profile.webp"
                width={500}
                height={500}
                alt="Emmanuel Villavicencio"
                className={styles.imagen}
                priority
              />
            </>





          </div>
        </div>

      </section>
    </>
  )
}

export default Profile;