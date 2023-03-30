import styles from "../about/about.module.css"

const About = () => {
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
                            <span className={styles.germany}></span>
                            <span className={styles.mexico}></span>
                            <span className={styles.canada}></span>
                            <span className={styles.uk}></span>
                            <span className={styles.republica}></span>
                            <span className={styles.uae}></span>
                            <span className={styles.france}></span>
                            <span className={styles.italy}></span>
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
                            <span className={styles.javascript}></span>
                            <span className={styles.html}></span>
                            <span className={styles.css}></span>
                            <span className={styles.git}></span>
                            <span className={styles.react}></span>
                            <span className={styles.redux}></span>
                            <span className={styles.nextjs}></span>
                            <span className={styles.nodejs}></span>
                            <span className={styles.express}></span>
                            <span className={styles.mysql}></span>
                            <span className={styles.mongodb}></span>
                            <span className={styles.sequalize}></span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
