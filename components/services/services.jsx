import styles from "../services/services.module.css";
import Image from "next/image";

const Services = () => {
    return (
        <>
            <section id="services">
                <div className={styles.principal}>
                    <br />
                    <h1 className={styles.encabezado}>Servicios</h1>
                    <h3 className={styles.subtitulo}>Servicios que ofrezco a mis clientes</h3>
                    <br />
                    <br />
                    <div className={styles.contenedor}>

                        <div className={styles.card}>
                            <div className={styles.subcontenedor}>
                                <Image
                                    src={"/responsive.webp"}
                                    width={166}
                                    height={272}
                                ></Image>
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

                                <Image
                                    src={"/rocket.webp"}
                                    width={150}
                                    height={250}
                                ></Image>

                                <br />
                                <h3 className={styles.titulo}>Rendimiento</h3>
                                <p className={styles.parrafo}>
                                    Esencial para retener a tus usuarios y el éxito de tu sitio web.
                                    Lo que lleva a una mayor satisfacción del cliente y un mejor desempeño de tu negocio en línea.
                                </p>
                            </div>
                        </div>


                        <div className={styles.card}>
                            <div className={styles.subcontenedor}>

                                <Image
                                    src={"/virtualworld.webp"}
                                    width={200}
                                    height={230}
                                ></Image>

                                <br />
                                <h3 className={styles.titulo}>Tecnologia de <br />
                                    Vanguardia</h3>
                                <p className={styles.parrafo}>
                                    Utilizo las últimas tecnologías en diseño web
                                    para asegurarme de que tu sitio esté a la altura de las mejores compañías del mundo!
                                </p>
                            </div>
                        </div>


                        <div className={styles.card}>
                            <div className={styles.subcontenedor}>
                                <Image
                                    src={"/socialmedia.webp"}
                                    width={340}
                                    height={250}
                                ></Image>
                                <br />

                                <h3 className={styles.titulo}>Integración de redes sociales</h3>
                                <p className={styles.parrafo}>
                                    Hay muchas plataformas sociales por ahí, y usted debe promover su presencia en ellas en su sitio web.
                                </p>
                            </div>
                        </div>


                        <div className={styles.card}>
                            <div className={styles.subcontenedor}>
                                <Image
                                    src={"/creativedesign.webp"}
                                    width={225}
                                    height={250}
                                ></Image>
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
                                <Image
                                    src={"/seo.webp"}
                                    width={225}
                                    height={225}
                                ></Image>
                                <br />
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
            </section>
        </>
    )
}

export default Services;