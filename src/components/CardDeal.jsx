
import {card } from '../assets';
import styles, {layout} from '../style';
import Button from './Button';
const CardDeal = () =>  (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better
        card deal <br className='sm:block hidden' />in a few easy steps.
    </h2>
    <p className={`${styles.paragraph} max-w-[470px] mt-5`}> 
    We have filtered out some of the best credit card offers for you which will help narrow down your search and get your hands on the right one.
    </p>
    <Button styles='mt-10' />
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className='w-[100%] h-[100%]' />

      </div>
    </section>
  )
export default CardDeal