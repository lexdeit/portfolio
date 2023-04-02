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
      y: '-50vh',
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

              <h1>Programador <br />{`{ Full Stack }`}</h1>

              <motion.p
                initial={{ opacity: 0, y: '100vh' }}
                animate={{ opacity: 1, y: 0 }}
                whileInView={{opacity: 0}}
              >Tecnologias de vanguardia</motion.p>

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