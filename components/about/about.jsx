import styles from "../about/about.module.css"

const About = () => {
    return (
        <>
            <div className={styles.contenedor}>

                <div className={styles.about}>
                    <br />
                    <br />
                    <h1 className={styles.titulo}>Acerca de mi</h1>
                    <br />
                    <p className={styles.informacion}>
                        Soy un estudiante de ingeniería en de Desarrollo de Software y Redes
                        especializado en desarrollo full-stack, con experiencia en tecnologías como
                        Next.js, React, MongoDB, Node.js y Redux.
                        Además, tengo un nivel C1 avanzado en inglés, certificado por mi tiempo estudiando en Toronto, Canadá.
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
                    <button className={styles.boton} onClick={() => window.open('https://bit.ly/3LGBaE3')}>
                        <span className={styles.download}></span> Descargar </button>
                </div>
                <div className={styles.subcontendero}>
                    <h1 className={styles.titulo}>Tecnologias | {"{LexdeIT Skills}"} </h1>
                    <br />
                    <br />
                    <div className={styles.iconos}>
                        <span className={styles.css}></span>
                        <span className={styles.html}></span>
                        <span className={styles.git}></span>
                        <span className={styles.react}></span>
                        <span className={styles.redux}></span>
                        <span className={styles.javascript}></span>
                        <span className={styles.nextjs}></span>
                        <span className={styles.mysql}></span>
                        <span className={styles.nodejs}></span>
                        <span className={styles.mongodb}></span>
                    </div>
                </div>


            </div>
        </>
    )
}

export default About
