import styles from "../services/services.module.css";
import Image from "next/image";
import { motion } from "framer-motion";


const Services = () => {
    return (
        <>
            <section id="services">
                <div className={styles.principal}>
                    <br />
                    <h1 >Servicios</h1>
                    <h3>Servicios que ofrezco a mis clientes</h3>
                    <br />
                    <br />
                    <div className={styles.contenedor}>

                        <div className={styles.card}>

                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className={styles.subcontenedor}>
                                <Image
                                    src={"/responsive.webp"}
                                    width={166}
                                    height={272}
                                    alt="logo"

                                />
                                <br />
                                <h4 >Full Responsive</h4>
                                <p >
                                    Su sitio se mostrará correctamente en cualquier dispositivo,
                                    incluidas computadoras de escritorio, tabletas y teléfonos móviles.
                                </p>
                            </motion.div>

                        </div>


                        <div className={styles.card}>

                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className={styles.subcontenedor}>

                                <Image
                                    src={"/rocket.webp"}
                                    width={150}
                                    height={250}
                                    alt="logo"

                                />

                                <br />
                                <h4 >Rendimiento</h4>
                                <p >
                                    Esencial para retener a tus usuarios y el éxito de tu sitio web.
                                    Lo que lleva a una mayor satisfacción del cliente y un mejor desempeño de tu negocio en línea.
                                </p>
                            </motion.div>
                        </div>


                        <div className={styles.card}>

                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className={styles.subcontenedor}>

                                <Image
                                    src={"/virtualworld.webp"}
                                    width={200}
                                    height={230}
                                    alt="logo"

                                />

                                <br />
                                <h4>Tecnologia de <br />
                                    Vanguardia</h4>
                                <p>
                                    Utilizo las últimas tecnologías en diseño web
                                    para asegurarme de que tu sitio esté a la altura de las mejores compañías del mundo!
                                </p>
                            </motion.div>
                        </div>


                        <div className={styles.card}>

                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className={styles.subcontenedor}>

                                <Image
                                    src={"/socialmedia.webp"}
                                    width={320}
                                    height={200}
                                    alt="logo"

                                />

                                <br />

                                <h4 >Redes Sociales</h4>
                                <p >
                                    Hay muchas plataformas sociales por ahí, y usted debe promover su presencia en ellas en su sitio web.
                                </p>
                            </motion.div>
                        </div>


                        <div className={styles.card}>

                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className={styles.subcontenedor}>
                                <Image
                                    src={"/creativedesign.webp"}
                                    width={200}
                                    height={190}
                                    alt="logo"

                                />
                                <br />

                                <h4 >Diseño creativo</h4>
                                <p >
                                    Un buen y atractivo diseño web te ayuda a mantener tus leads en tu sitio,
                                    que es la cara digital de tu negocio.
                                </p>
                            </motion.div>
                        </div>


                        <div className={styles.card}>
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className={styles.subcontenedor}>

                                <Image
                                    src={"/seo.webp"}
                                    width={190}
                                    height={190}
                                    alt="logo"
                                />

                                <br />
                                <br />

                                <h4 >SEO</h4>
                                <p>
                                    Optimizaré su sitio con una estrategia inteligente de optimización de motores de
                                    búsqueda para generar clientes potenciales.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services;