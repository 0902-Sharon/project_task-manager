import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Real-time Collaboration <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      The real-time collaborative features, including commenting and interactive chatbot, redefine how teams interact and collaborate, transcending traditional project management boundaries.
      </p>

      <Button text={"Try AutoReader"} styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={"src/assets/blackDevice.png"} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
