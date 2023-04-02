import styles from "../about/about.module.css";
import { motion } from 'framer-motion';

const About = () => {

    const techIcons = [styles.javascript, styles.html, styles.css, styles.git, styles.react, styles.redux, styles.nextjs, styles.nodejs, styles.express, styles.mysql, styles.mongodb, styles.sequalize];

    const iconTechVariants = {

        initial: {
            opacity: 0,
            y: '-5vh',
        },

        animate: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring'
            }
        }
    }

    const countryIcons = [styles.germany, styles.canada, styles.uk, styles.republica, styles.uae, styles.france, styles.italy];

    const iconCountryVariants = {
        initial: {
            opacity: 0,
            y: '-5vh',
        },

        animate: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring'
            }
        }
    }


    return (
        <>
            <section id="about">

                <div className={styles.contenedor}>

                    <div className={styles.about}>
                        <br />
                        <br />
                        <h1 className={styles.titulo}>Acerca de mi</h1>
                        <br />
                        <p className={styles.informacion}>
                            Soy un estudiante de ingeniería en Desarrollo de Software y Redes
                            especializado en desarrollo Full-Stack, con experiencia en tecnologías como
                            React, Redux, Next, Node, Express. <br /> <br />
                            Además, cuento con un certificado nivel B2.1 que obtuve en EF en mi tiempo en Toronto, Canadá,
                            sin embargo en mi ultimo examen obtuve un C1 Avanzado.
                            También he obtenido un certificado de principiante en alemán después de un curso intensivo en Berlín.
                        </p>
                        <br />
                        <p className={styles.informacion}>Algunos paises que eh visitado</p>
                        <div className={styles.paises}>
                            {countryIcons.map(icono => {
                                return (
                                    <motion.span
                                        variants={iconCountryVariants}
                                        initial='initial'
                                        animate='animate'
                                        className={icono}
                                    />
                                )
                            })}
                        </div>
                        <br />
                        <p className={styles.informacion}>Si eres un reclutador te dejo mi CV</p>
                        <br />

                        <button data-text="Awesome" className={styles.button} onClick={() => window.open('https://bit.ly/3LGBaE3')}>
                            <span className="actual-text">&nbsp;Curriculum&nbsp;</span>
                            <span className={styles.hovertext} aria-hidden="true">&nbsp;Curriculum&nbsp;</span>
                        </button>

                    </div>
                    <div className={styles.subcontendero}>
                        <h1 className={styles.titulo}>Tecnologias <br className={styles.espacio} /> {"{LexdeIT Skills}"} </h1>
                        <br />
                        <br />


                        <div className={styles.iconos}>
                            {techIcons.map(icono => {
                                return (
                                    <motion.span
                                        variants={iconTechVariants}
                                        // initial='initial'
                                        animate='animate'
                                        className={icono}
                                        drag
                                        dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                                        dragElastic={0.1}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
