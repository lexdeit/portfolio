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
      y: '-500',
      borderRadius: '50%',
      width: '5em',
      height: '5em',
    },
    //Animacion que va a realizar
    animate: {
      opacity: 1,
      y: 0,
      width: '20em',
      height: '20em',
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

              <motion.h1
                initial={{ opacity: 0, y: 100, textAlign: 'left', fontWeight: '500' }}
                whileInView={{ opacity: 1, y: 0 }}
              >Programador <br />{`{ Full Stack }`}</motion.h1>

              <motion.h6
                initial={{ opacity: 0, y: 100, textAlign: 'left' }}
                whileInView={{ opacity: 1, y: 0 }}
              >Tecnologias de vanguardia</motion.h6>

            </div>




            <>

              <motion.img
                src='./profile.webp'
                variants={imageVariants}
                initial='initial'
                animate='animate'
                transition='transition'
                alt="Emmanuel Villavicencio"
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