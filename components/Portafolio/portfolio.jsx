import { motion, useViewportScroll, useTransform } from "framer-motion";
import styles from './portfolio.module.css';

const tituloAnimation = {
    initial: {
        opacity: 0, y: 200
    },
    animate: {
        opacity: 1, y: 0
    },
    transition: {
        delay: 1,
        duration: 2,
    }
}




const Portfolio = () => {
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);


    return (
        <>
            <section>
                <div className={styles.fondo}>

                    <motion.h1
                        variants={tituloAnimation}
                        initial='initial'
                        whileInView='animate'
                        transition={{ duration: 1, delay: 0 }}
                        viewport={{ once: true }}
                    >Proyectos</motion.h1>

                    <motion.h3
                        variants={tituloAnimation}
                        initial='initial'
                        whileInView='animate'
                        transition={{ duration: 1.5, delay: .5 }}
                        viewport={{ once: true }}
                    >by {`{LexdeIT}`}</motion.h3>



                    <div className={styles.cajon}>

                    </div>

                    <div className={styles.wrapper}>
                        <motion.div
                            className={styles.container}
                            style={{ scale, opacity: 0 }}
                        >
                            <motion.div
                                className={styles.item}
                                style={{ scaleY: scrollYProgress, opacity: 1 }}
                            />
                        </motion.div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Portfolio;
