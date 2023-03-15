import styles from "../services/services.module.css";

const Services = () => {
    return (
        <>
            <iframe className={styles.videofondo} src="https://www.youtube.com/embed/RR2EI8EEOOw&autoplay=1&loop=1&mute=1&showinfo=0&controls=0"></iframe>

            <div className={styles.principal}>
                <br />
                <h1 className={styles.titulo}>Servicios</h1>
                <h3 className={styles.titulo}>Servicios que ofrezco a mis clientes</h3>
                <br />
                <br />
                <div className={styles.contenedor}>

                    <div className={styles.card}>
                        <div className={styles.subcontenedor}>
                            <span className={styles.responsive}></span>
                            <br />
                            <h3 className={styles.titulo}>Full Responsive</h3>
                            <p className={styles.parrafo}>
                                Su sitio se mostrará correctamente en cualquier dispositivo,
                                incluidas computadoras de escritorio, tabletas y teléfonos móviles.
                            </p>
                        </div>
                    </div>


                    <div className={styles.card}>
                        <div className={styles.subcontenedor}>
                            <span className={styles.rocket}></span>
                            <br />
                            <h3 className={styles.titulo}>Rendimiento</h3>
                            <p className={styles.parrafo}>
                                Retener a los usuarios es crucial para mejorar las conversiones.
                                Los sitios de alto rendimiento atraen y retienen a los usuarios
                            </p>
                        </div>
                    </div>


                    <div className={styles.card}>
                        <div className={styles.subcontenedor}>
                            <span className={styles.developer}></span>
                            <br />
                            <h3 className={styles.titulo}>Desarrollo</h3>
                            <p className={styles.parrafo}>
                                Conozco la importancia del diseño web y puedo ayudarte a crear un sitio web que te encantará.
                                Con las ultimas tecnologias utilizadas por las companias mas grandes del mundo!
                            </p>
                        </div>
                    </div>


                    <div className={styles.card}>
                        <div className={styles.subcontenedor}>
                            <span className={styles.socialmedia}></span>
                            <br />

                            <h3 className={styles.titulo}>Integración de redes sociales</h3>
                            <p className={styles.parrafo}>
                                Hay muchas plataformas sociales por ahí, y usted debe promover su presencia en ellas en su sitio web.
                            </p>
                        </div>
                    </div>


                    <div className={styles.card}>
                        <div className={styles.subcontenedor}>
                            <span className={styles.creativedesign}></span>
                            <br />

                            <h1 className={styles.titulo}>Diseño creativo</h1>
                            <p className={styles.parrafo}>
                                Un buen y atractivo diseño web te ayuda a mantener tus leads en tu sitio,
                                que es la cara digital de tu negocio.
                            </p>
                        </div>
                    </div>


                    <div className={styles.card}>
                        <div className={styles.subcontenedor}>
                            <span className={styles.seo}></span>
                            <br />

                            <h3 className={styles.titulo}>SEO</h3>
                            <p className={styles.parrafo}>
                                Optimizaré su sitio con una estrategia inteligente de optimización de motores de
                                búsqueda para generar clientes potenciales.
                            </p>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Services;