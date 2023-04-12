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
                    <div className={styles.cajon}>

                        <div className={styles.yellow}><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat consequuntur, voluptate, et perferendis dolor rem aliquid adipisci unde distinctio quos, non minus iure laudantium optio est fugiat obcaecati quis architecto.</p></div>

                        <div className={styles.blue}><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique deleniti eum culpa est provident, quia eius tempora fugiat dolore. Exercitationem officia, mollitia quam eaque dolores neque iste vero consequatur consectetur!</p></div>

                        <div className={styles.orange}><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae eaque minima porro debitis perferendis deleniti dolore numquam aliquid, molestias error at dignissimos, consectetur maxime quia quod nesciunt totam odit velit.</p></div>

                        <div className={styles.white}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, et! Odit sed, ipsa, dolores ducimus tempore voluptatem quo animi vitae laboriosam corrupti sapiente rerum et velit eveniet consectetur similique praesentium?</p></div>

                        <div className={styles.pink}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nisi, sed iusto ducimus mollitia blanditiis harum maxime ad dicta fuga, a numquam nulla explicabo qui hic dolore modi, porro quae?</p></div>
                        
                        <div className={styles.red}><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci voluptates nisi doloremque culpa, eum vero sequi aspernatur veritatis dolore natus, perferendis possimus distinctio vitae corporis cumque, itaque numquam consectetur quia!</p></div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Portfolio;
