import styles from '../styles/Testimonials.module.css'
import quoteImg from '../assests/quotes.png'
import Image from 'next/image'

function Testimonials() {
    return (
        <div className={styles.container}>
            <div className={styles.topContent}>
                <div data-aos="fade-right" className={styles.topLeft}>
                    <span style={{
                        fontWeight: "500",
                        fontSize: "25px",
                        lineHeight: "30px"
                    }}>
                        OUR HAPPY CUSTOMERS
                    </span><br />
                    What our customers
                    say about us
                    <hr className={styles.line} />
                </div>
                <div data-aos="fade-left" className={styles.topRight}>
                    <div>
                        <Image src={quoteImg} />
                    </div>
                    <div style={{
                        marginLeft: "70px",
                        color: "#32584A",
                        textAlign: "left"
                    }}>
                        Lorem ipsum dolor sit amet consectetur. In praesent ac sit scelerisque lacus. Faucibus tincidunt commodo mi.<br />
                        <span style={{
                            fontWeight: "700",
                            fontSize: "40px",
                            lineHeight: "49px"
                        }}>
                            Jane Doe
                        </span><br />
                        <span style={{
                            fontWeight: "500",
                            fontSize: "30px",
                            lineHeight: "37px",
                            color: "rgba(50, 88, 74, 0.7)"
                        }}>
                            Product Specialist, Lorem Co.
                        </span><br />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials