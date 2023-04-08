import { motion } from "framer-motion";
import styles from './portfolio.module.css';
import { useState } from "react";


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
                </div>
            </section>
        </>
    )
}

export default Portfolio;
