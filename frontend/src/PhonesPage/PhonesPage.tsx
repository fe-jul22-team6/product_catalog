import './PhonePage.scss';
import PhoneCard from '../PhoneCard';

export const PhonesPage: React.FC = () => {
  return (
    <section className="phones">
      <h1 className="phones__title">Mobile Phones</h1>
      <div className="phones__content">
        <PhoneCard />
        <PhoneCard />
      </div>
    </section>
  );
};
