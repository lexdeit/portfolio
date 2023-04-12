import styles from "../about/about.module.css";
import { motion } from 'framer-motion';
import TypewriterComponent from 'typewriter-effect';


const About = () => {

    const techIcons = [styles.javascript, styles.html, styles.css, styles.git, styles.react, styles.redux, styles.nextjs, styles.nodejs, styles.express, styles.mysql, styles.mongodb, styles.sequalize];
    const countryIcons = [styles.germany, styles.canada, styles.uk, styles.republica, styles.uae, styles.france, styles.italy];


    //Animacion del contenedor padre
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
        hidden: { y: 20, opacity: 0, rotateZ: 100 },
        visible: { y: 0, opacity: 1, rotateZ: 0 },
    }






    return (
        <>
            <section id="about">

                <div className={styles.contenedor}>

                    <div className={styles.about}>
                        <br />
                        <br />

                        <h1 style={{ textAlign: 'left' }}>Quien soy?</h1>
                        <h5 style={{ textAlign: "left" }}>
                            <TypewriterComponent
                                options={{
                                    autoStart: true,
                                    loop: true,
                                    delay: 50,
                                    deleteSpeed: 50,
                                    strings: [
                                        "Estudiante de Software",
                                        "Full Stack Developer",
                                        "Diseñador Web",
                                        "Back-End Developer",
                                        "Front-End Developer"
                                    ],
                                }}

                            />

                        </h5>
                        <br />

                        <p className={styles.informacion}>

                            Estudiante de ingeniería en Desarrollo de Software y Redes
                            especializado en desarrollo Full-Stack, con experiencia en tecnologías como
                            React, Redux, Next, Node, Express. <br /> <br />
                            Además, cuento con un certificado nivel B2.1 que obtuve en EF en mi tiempo en Toronto, Canadá,
                            sin embargo en mi ultimo examen obtuve un C1 Avanzado.
                            También he obtenido un certificado de principiante en alemán después de un curso intensivo en Berlín.
                        </p>

                        <br />
                        <p className={styles.informacion}>Mi pasion me a llevado a</p>

                        <motion.div
                            variants={containerAnimation}
                            initial="hidden"
                            whileInView="visible"
                            className={styles.paises}>

                            {countryIcons.map(icono => {
                                return (
                                    <motion.span
                                        variants={iconTechVariants}
                                        className={icono}
                                    />
                                )
                            })}

                        </motion.div>


                        <br />
                        <p className={styles.informacion}>Si eres un reclutador te dejo mi CV</p>
                        <br />

                        <button data-text="Awesome" className={styles.button} onClick={() => window.open('https://bit.ly/3mipxJ6')}>
                            <span className="actual-text">&nbsp;Curriculum&nbsp;</span>
                            <span className={styles.hovertext} aria-hidden="true">&nbsp;Curriculum&nbsp;</span>
                        </button>


                    </div>


                    <div className={styles.subcontendero}>
                        <h1 className={styles.titulo}>Tecnologias <br className={styles.espacio} /> {"{LexdeIT Skills}"} </h1>
                        <br />
                        <br />


                        <motion.div
                            variants={containerAnimation}
                            initial="hidden"
                            whileInView="visible"
                            className={styles.iconos}>

                            {techIcons.map(icono => {
                                return (
                                    <motion.span
                                        variants={iconTechVariants}
                                        className={icono}
                                    />
                                )
                            })}

                        </motion.div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default About
