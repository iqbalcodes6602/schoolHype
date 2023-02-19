import styles from '../styles/Features.module.css'
import imgRight from '../assests/Automation_1.png'
import Image from 'next/image'
function Features() {
    return (
        <div className={styles.container}>
            <div className={styles.topContent}>
                <div data-aos="fade-right" className={styles.topLeft}>
                    <span style={{
                        fontWeight: "500",
                        fontSize: "25px",
                        lineHeight: "30px"
                    }}>
                        Our Features
                    </span><br />
                    Know your audience
                    and boost sales
                    <hr className={styles.line} />
                </div>
                <div data-aos="fade-left" className={styles.topRight}>
                    Effective emails convey the most significant substance to a client at the proper time which is our marketing approaches include scheduled emails.
                </div>
            </div>
            <div className={styles.bottomContent}>
                <div data-aos="fade-left" className={styles.bottomLeft}>
                    <span style={{
                        fontWeight: "700",
                        fontSize: "35px",
                        lineHeight: "43px"
                    }}>
                        Save precious time
                        with automation
                    </span><br />
                    Lorem ipsum dolor sit amet consectetur. Sed id luctus posuere massa leo purus cras commodo. Volutpat massa fusce sit libero ut mollis risus.<br /><br />
                    <span style={{
                        fontWeight: "500",
                        fontSize: "35px",
                        lineHeight: "37px"
                    }}>
                        Save precious time
                        with automation
                    </span>
                </div>
                <div data-aos="fade-right" className={styles.bottomRight}>
                    <Image className={styles.rightImg} src={imgRight} />
                </div>
            </div>
        </div >
    )
}

export default Features