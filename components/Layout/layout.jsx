import Head from "next/head";
import styles from "../Layout/layout.module.css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const Layout = ({ children, title, description }) => {
    const [showMenu, setShowMenu] = useState(false);
    const now = new Date();

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>


            {/* Menu de computadora */}
            <nav className={styles.nav}>

                <Image
                    src="/logotransparent.webp"
                    width={50}
                    height={50}
                    alt="logo"
                    className={styles.logo}
                />
                <div className={styles.botones}>

                    <Link href="#profile">
                        <h1 className={styles.menuletras}>Home </h1>
                    </Link>

                    <Link href="#about">
                        <h1 className={styles.menuletras}>About</h1>
                    </Link>

                    <Link href="#services">
                        <h1 className={styles.menuletras}>Services</h1>
                    </Link>

                    <Link href="#portfolio">
                        <h1 className={styles.menuletras}>Portfolio</h1>
                    </Link>
                </div>

                <div className={styles.iconos}>
                    <span className={styles.github} onClick={() => window.open('https://github.com/lexdeit')} />
                    <span className={styles.instagram} onClick={() => window.open('https://www.instagram.com/lexteckg/')} />
                    <span className={styles.linkedin} onClick={() => window.open('https://www.linkedin.com/in/lexdeit/')} />
                </div>

            </nav>

            {/* Menu de celular o tablet */}
            <nav className={styles.mobile}>

                <div className={styles.divcentrado}>
                    <Image
                        src="/logotransparent.webp"
                        width={50}
                        height={50}
                        alt="logo"
                        className={styles.logo}
                        onClick={() => window.open('https://www.facebook.com/lexsinver/')}
                    />
                </div>

                <div className={styles.divcentrado} onClick={() => setShowMenu(!showMenu)}>
                    <span className={styles.burger} />
                </div>

                <div className={styles.divcentrado}>
                    <span className={styles.github} onClick={() => window.open('https://github.com/lexdeit')} />
                </div>
            </nav>

            {/* Menu con iconos Mobile */}
            {showMenu && <div className={styles.submenumobile}>
                <Link href="#profile">
                    <span className={styles.homemobile} />
                    <h1 className={styles.menuletras}>Home</h1>
                </Link>

                <Link href="#about">
                    <span className={styles.aboutmobile} />
                    <h1 className={styles.menuletras}>About</h1>
                </Link>

                <Link href="#services">
                    <span className={styles.servicesmobile} />
                    <h1 className={styles.menuletras}>Services</h1>
                </Link>
                {/* onClick={() => window.open('https://api.whatsapp.com/send?phone=4915776104366&text=%C2%A1Hola,%20Emmanuel!%20%C2%BFC%C3%B3mo%20est%C3%A1s?')} */}
                <Link href="#portfolio">
                    <span className={styles.contactmobile} />
                    <h1 className={styles.menuletras}>Portfolio</h1>
                </Link>


            </div>}

            <main>{children}</main>

            <footer className={styles.footer}>
                © {now.getFullYear()} All right reserved | Made with ❤️ by LexdeIT | Made with {"{ Next }"}
            </footer>
        </>
    )
}

Layout.defaultProps = {
    title: "LexdeIT | Portfolio",
    description: "Full Stack Developer",
}

export default Layout;