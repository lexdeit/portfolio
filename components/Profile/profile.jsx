import { motion } from 'framer-motion';
import styles from "../Profile/profile.module.css";
import { useState, useEffect } from "react";
import Spline from '@splinetool/react-spline';

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
      x: 500,
      borderRadius: '50%',
      width: '5em',
      height: '5em',
    },
    //Animacion que va a realizar
    animate: {
      opacity: 1,
      x: 0,
      width: '20em',
      height: '20em',
      //Transicion
      transition: {
        type: 'spring',
        duration: 1.5,
        delay: 1.3
      }

    }
  }


  return (
    <>
      <section id="profile">

        {isScreenBig && <iframe className={styles.iframer} src="https://www.youtube.com/embed/RhlQvbvMg-0?&autoplay=1&loop=1&mute=1&showinfo=0&controls=0" />}
        <div className={styles.contenedor}>

          <div className={styles.subcontenedor}>



            <div>

              <motion.h1
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >Programador <br /> {`{Full Stack}`} </motion.h1>

              <motion.h5
                initial={{ opacity: 0, y: 100, }}
                whileInView={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >

                Tecnologias de vanguardia

              </motion.h5>

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

              {/* <Spline scene="https://prod.spline.design/g9q8B7AyJ3VvEy1a/scene.splinecode" /> */}

            </>

          </div>
        </div>

      </section>
    </>
  )
}

export default Profile;