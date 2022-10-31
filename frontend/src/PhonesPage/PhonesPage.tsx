import './PhonePage.scss';
import PhoneCard from '../PhoneCard';

export const PhonesPage: React.FC = () => {
  return (
    <section className="phones">
      <div className="phones__content">
        <h1 className="phones__title">Mobile Phones</h1>
        <div className="phones__cards">
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
