import { motion } from 'framer-motion';
import styles from "../Profile/profile.module.css";
import { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";



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

              <motion.h1
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >Programador <br /> {`{Full Stack}`} </motion.h1>

              <motion.h6
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >Tecnologias de vanguardia</motion.h6>

            </div>




            <>
              <Spline scene="https://prod.spline.design/g9q8B7AyJ3VvEy1a/scene.splinecode" />



            </>





          </div>
        </div>

      </section>
    </>
  )
}

export default Profile;