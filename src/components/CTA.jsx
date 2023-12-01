import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Tasking just got easier.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      From dynamic workflow creation to real-time collaboration features powered by the Latest in Tech including Langchain & GPT-4.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button text={"Try FloMaker"}/>
    </div>
  </section>
);

export default CTA;
