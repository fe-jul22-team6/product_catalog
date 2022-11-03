import styles from './HomePage.module.scss';
import PhoneCard from '../PhoneCard';
import { Loader } from '../Loader';
import * as phonesApi from '../../api/phones';
import { useEffect, useState } from 'react';
import { Phone } from '../../../../backend/src/types/Phone';
import favorite from '../../images/favorite.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const HomePage: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [newPhones, setNewPhones] = useState<Phone[]>([]);
  const [hotPhones, setHotPhones] = useState<Phone[]>([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    phonesApi
      .getAll()
      .then(setPhones)
      .catch(() => setError(true))
      .finally(() => setIsLoading(false));

    phonesApi
      .getNew()
      .then(setNewPhones)
      .catch(() => setError(true))
      .finally(() => setIsLoading(false));

    phonesApi
      .getDiscound()
      .then(setHotPhones)
      .catch(() => setError(true))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <section className={styles.phones}>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <h1 className={styles.phones__title}>Something went wrong</h1>
      ) : phones.length ? (
        <div className={styles.phones__content}>
          <h1 className={styles.phones__title}>
            Welcome to Nice Gadgets store!
          </h1>

          <div className={styles.phones__new}>
            <h1 className={styles.phones__subtitle}>Brand new models</h1>
            <Swiper
              spaceBetween={16}
              slidesPerView={1.5}
              breakpoints={{
                640: { slidesPerView: 2.5 },
                1200: { slidesPerView: 4 },
              }}
            >
              {newPhones.map((phone) => (
                <SwiperSlide>
                  <PhoneCard phone={phone} likeImg={favorite} key={phone.id} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className={styles.phones__hot}>
            <h1 className={styles.phones__subtitle}>Hot prices</h1>
            <Swiper
              spaceBetween={16}
              slidesPerView={1.5}
              breakpoints={{
                640: { slidesPerView: 2.5 },
                1200: { slidesPerView: 4 },
              }}
            >
              {hotPhones.map((phone) => (
                <SwiperSlide>
                  <PhoneCard phone={phone} likeImg={favorite} key={phone.id} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      ) : (
        <h1 className={styles.phones__title}>No phones yet</h1>
      )}
    </section>
  );
};
