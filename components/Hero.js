import Image from 'next/image'
import styles from '../styles/Hero.module.css'
import leftImg from '../assests/Marketing_1.png'


function Hero() {
    return (
        <div>
            <section className={styles.container}>
                <div className={styles.navbar}>
                    <div data-aos="fade-right" className={styles.navLeft} >
                        MARKALL
                    </div>
                    <div data-aos="fade-down" className={styles.navCenter}>
                        <span className={styles.links}>Services</span>
                        <span className={styles.links}>Pricing</span>
                        <span className={styles.links}>About Us</span>
                    </div>
                    <div data-aos="fade-left" className={styles.navRight}>
                        <button className={styles.getStartedButton}>Get  Started</button>
                    </div>
                </div>
                <div className={styles.main}>
                    <div data-aos="fade-right" className={styles.mainLeft}>
                        <div className={styles.tagline}>
                            Reach your -  audience & convert your leads
                        </div>
                        <br />
                        <br />
                        <div className={styles.belowTagLines}>
                            Get your customers with SEO, rank your business with email marketing, build sales leads
                        </div>
                        <div className={styles.belowTagLines}>
                            <button className={styles.getStartedButton}>Get  Started</button>
                            <button className={styles.watchDemo}>Watch Demo</button>
                        </div>
                    </div>
                    <div  data-aos="fade-left" className={styles.leftGrid}>
                        <Image className={styles.leftImg} src={leftImg} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero