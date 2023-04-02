import Image from "next/image";
import { motion } from 'framer-motion';
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

  const imageVariants = {
    //Estado inicial
    initial: {
      opacity: 0,
      y: '-100vh',
      borderRadius: '50%',
    },
    //Animacion que va a realizar
    animate: {
      opacity: 1,
      y: 0,
      //Transicion
      transition: {
        type: 'spring'
      }

    }
  }


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
              {/* <Image
                src="/profile.webp"
                width={500}
                height={500}
                alt="Emmanuel Villavicencio"
                className={styles.imagen}
                priority
              /> */}

              <motion.img
                src='./profile.webp'
                variants={imageVariants}
                initial='initial'
                animate='animate'
                transition='transition'
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