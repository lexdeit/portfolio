import Head from "next/head";
import styles from "../Layout/layout.module.css";
import Image from "next/image";
import Link from "next/link";

const Layout = ({ children, title, description }) => {
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
                    className={styles.logo}
                />
                <div className={styles.botones}>


                    <Link href="/home">
                        <h1 className={styles.menuletras}>Home </h1>
                    </Link>

                    <Link href="/about">
                        <h1 className={styles.menuletras}>About</h1>
                    </Link>

                    <Link href="/services">
                        <h1 className={styles.menuletras}>Services</h1>
                    </Link>

                    <Link href="/contact">
                        <h1 className={styles.menuletras}>Contact</h1>
                    </Link>
                </div>

                <div className={styles.iconos}>
                    <span className={styles.github} onClick={() => window.open('https://github.com/lexdeit')}></span>
                    <span className={styles.instagram} onClick={() => window.open('https://www.instagram.com/lexteckg/')}></span>
                    <span className={styles.linkedin} onClick={() => window.open('https://www.linkedin.com/in/lexdeit/')}></span>
                </div>

            </nav>

            {/* Menu de celular o tablet */}
            <nav className={styles.mobile}>

                <div className={styles.divcentrado}>
                    <Image
                        src="/logotransparent.webp"
                        width={50}
                        height={50}
                        className={styles.logo}
                    />
                </div>

                <div className={styles.divcentrado}>
                    <span className={styles.burger}></span>
                </div>

                <div className={styles.divcentrado}>
                    <span className={styles.instagram}></span>
                </div>
            </nav>

            <main>{children}</main>

            <footer className={styles.footer}>
                © {now.getFullYear()} All right reserved | Made with ♥ by @lexteckg | Made with {"{Next | React}"}
            </footer>
        </>
    )
}

Layout.defaultProps = {
    title: "LexdeIT | Portfolio",
    description: "Full Stack Developer",
}

export default Layout;