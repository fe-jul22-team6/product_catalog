import styles from './PhonePage.module.scss';
import PhoneCard from '../PhoneCard';

export const PhonesPage: React.FC = () => {
  return (
    <section className={styles.phones}>
      <div className={styles.phones__content}>
        <h1 className={styles.phones__title}>Mobile Phones</h1>
        <div className={styles.phones__cards}>
          <PhoneCard />
          <PhoneCard />
          <PhoneCard />
          <PhoneCard />
          <PhoneCard />
          <PhoneCard />
          <PhoneCard />
        </div>
      </div>
    </section>
  );
};
