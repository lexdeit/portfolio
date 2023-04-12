import { motion } from "framer-motion";
import styles from './portfolio.module.css';

const tituloAnimation = {
    initial: {
        opacity: 0, y: 200
    },
    animate: {
        opacity: 1, y: 0
    },
    transition: {
        duration: 2,
    }
}


const containerAnimation = {
    hidden: { opacity: 1, scale: 0 }, visible: {
        opacity: 1, scale: 1, transition: {
            delayChildren: 0,
            staggerChildren: 0.1
        }
    }
}


//Animacion individual de cada icono
const iconTechVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
}


const Portfolio = () => {
    return (
        <>
            <section className={styles.fondo}>
                <motion.h1
                    variants={tituloAnimation}
                    initial='initial'
                    transition='transition'
                    whileInView='animate'
                >Proyectos</motion.h1>

<motion.img
                        src='./loveglow.webp'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            repeatType: "mirror",
                            duration: 6,
                            repeat: Infinity,
                        }}
                        alt="Emmanuel Villavicencio"
                        className={styles.imagen}
                        priority
                    />

                    <motion.img
                        src='./shadowlove.webp'
                        initial={{ opacity: 0.5, y: 50 }}
                        animate={{ opacity: 0.8 }}
                        transition={{
                            repeatType: "mirror",
                            duration: 6,
                            repeat: Infinity
                        }}
                        alt="Emmanuel Villavicencio"
                        className={styles.imagen}
                        priority
                    />

                    <motion.img
                        src='./loveemoji.webp'
                        initial={{ y: 30, rotateZ: -45 }}
                        animate={{ y: 0, type: 'ease', rotateZ: 45 }}
                        transition={{
                            repeatType: "mirror",
                            duration: 6,
                            repeat: Infinity
                        }}
                        drag
                        dragConstraints={{ left: 0, right: 0, bottom: 0, top: 0 }}
                        dragElastic={0.04}
                        className={styles.imagen}
                        alt="Emmanuel Villavicencio"
                        priority
                    />

                    {/* Like emoji */}
                    <motion.img
                        src='./glowemoji.webp'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            repeatType: "mirror",
                            duration: 3,
                            repeat: Infinity
                        }}
                        alt="Emmanuel Villavicencio"
                        className={styles.like}
                        priority
                    />

                    <motion.img
                        src='./shadowlike.webp'
                        initial={{ opacity: 0.5, y: 50 }}
                        animate={{ opacity: 0.8 }}
                        transition={{
                            repeatType: "mirror",
                            duration: 3,
                            repeat: Infinity
                        }}
                        alt="Emmanuel Villavicencio"
                        className={styles.like}
                        priority
                    />

                    <motion.img
                        src='./likeemoji.webp'
                        initial={{ y: 30, rotateZ: 90 }}
                        animate={{ y: 0, type: 'ease', rotateZ: -90 }}
                        transition={{
                            repeatType: "mirror",
                            duration: 8,
                            repeat: Infinity
                        }}
                        drag
                        dragConstraints={{ left: 0, right: 0, bottom: 0, top: 0 }}
                        dragElastic={0.04}
                        className={styles.like}
                        alt="Emmanuel Villavicencio"
                        priority
                    />

                    {/* wow emoji */}
                    <motion.img
                        src='./wowglow.webp'
                        initial={{ opacity: 0, scale: 1 }}
                        animate={{ opacity: 1, scale: 1.3 }}
                        transition={{
                            repeatType: "mirror",
                            duration: 5,
                            repeat: Infinity
                        }}
                        alt="Emmanuel Villavicencio"
                        className={styles.wow}
                        priority
                    />

                    <motion.img
                        src='./shadowwow.webp'
                        initial={{ opacity: 0, y: 50, scale: 1 }}
                        animate={{ opacity: 1, scale: 1.3 }}
                        transition={{
                            repeatType: "mirror",
                            duration: 5,
                            repeat: Infinity
                        }}
                        alt="Emmanuel Villavicencio"
                        className={styles.wow}
                        priority
                    />

                    <motion.img
                        src='./wowemoji.webp'
                        initial={{ y: 40, }}
                        animate={{ y: 0, type: 'ease' }}
                        transition={{
                            repeatType: "mirror",
                            duration: 5,
                            repeat: Infinity
                        }}
                        drag
                        dragConstraints={{ left: 0, right: 0, bottom: 0, top: 0 }}
                        dragElastic={0.04}
                        className={styles.wow}
                        alt="Emmanuel Villavicencio"
                        priority
                    />

                <motion.div
                    variants={containerAnimation}
                    initial='hidden'
                    whileInView='visible'
                    className={styles.cajon}>

                    <motion.div
                        variants={iconTechVariants}
                    >
                        <img src="./rickandmorty.webp" alt="" />
                    </motion.div>

                    <motion.div
                        variants={iconTechVariants}
                    >
                        <img src="./gnamx.webp" alt="" />
                    </motion.div>

                    <motion.div
                        variants={iconTechVariants}
                    >
                        <img src="./pokeapp.webp" alt="" />
                    </motion.div>

                    <motion.div
                        variants={iconTechVariants}
                    >
                        <img src="./Card.webp" alt="" />
                    </motion.div>

                </motion.div>

            </section>
        </>
    )
}

export default Portfolio;
