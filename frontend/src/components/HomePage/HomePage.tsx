import styles from './HomePage.module.scss';
import { PhoneCard } from '../PhoneCard';
import { Loader } from '../Loader';
import * as phonesApi from '../../api/phones';
import { useEffect, useState } from 'react';
import { Phone } from '../../../../backend/src/types/Phone';
import iphone14 from '../../images/banner-iphone14.png';
import iphone14small from '../../images/banner-iphone14-small.png';
import iphonesmall from '../../images/iphone-small.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const HomePage: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [newPhones, setNewPhones] = useState<Phone[]>([]);
  const [hotPhones, setHotPhones] = useState<Phone[]>([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    phonesApi
      .getNew()
      .then(setNewPhones)
      .catch(() => setError(true));

    phonesApi
      .getDiscound()
      .then(setHotPhones)
      .catch(() => setError(true));

    phonesApi
      .getAll()
      .then(setPhones)
      .catch(() => setError(true))
      .finally(() => setIsLoading(false));
  }, []);

  const onTablet = useMediaQuery({
    query: '(max-width: 640px)',
  });

  return (
    <section className={styles.phones}>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <h1 className={styles.phones__title}>Something went wrong</h1>
      ) : (
        <div className={styles.phones__content}>
          <h1 className={styles.phones__title}>
            Welcome to Nice Gadgets store!
          </h1>

          <div className={styles.phones__banner}>
            <Swiper
              spaceBetween={16}
              slidesPerView={1}
              modules={[Pagination, Navigation]}
              loop={true}
              pagination={{
                clickable: true,
                el: '.swiper-custom-pagination',
              }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
            >
              <SwiperSlide>
                <img
                  src={onTablet ? iphone14small : iphone14}
                  alt="iphone14 banner"
                  className={styles.phones__banner_img}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={
                    onTablet
                      ? iphonesmall
                      : 'https://product-catalog-8d6r.onrender.com/static/img/banner-phones.png'
                  }
                  alt="phones banner"
                  className={styles.phones__banner_img}
                />
              </SwiperSlide>
            </Swiper>
            <div className="swiper-buttons">
              <div className="swiper-button-prev" />
              <div className="swiper-button-next" />
            </div>
            <div className="swiper-custom-pagination" />
          </div>

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
                  <PhoneCard phone={phone} key={phone.id} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className={styles.phones__categories}>
            <h1 className={styles.phones__subtitle}>Shop by category</h1>
            <div className={styles.phones__categories__content}>
              <NavLink to="/phones" className={styles.phones__categories__card}>
                <div
                  className={`${styles.phones__categories__photo} ${styles.phones__categories_phonesimg}`}
                ></div>
                <p className={styles.phones__categories__title}>
                  Mobile phones
                </p>
                <p className={styles.phones__categories__subtitle}>
                  {phones.length} models
                </p>
              </NavLink>
              <NavLink
                to="/tablets"
                className={styles.phones__categories__card}
              >
                <div
                  className={`${styles.phones__categories__photo} ${styles.phones__categories_tabletsimg}`}
                ></div>
                <p className={styles.phones__categories__title}>Tablets</p>
                <p className={styles.phones__categories__subtitle}>0 models</p>
              </NavLink>
              <NavLink
                to="/accessories"
                className={styles.phones__categories__card}
              >
                <div
                  className={`${styles.phones__categories__photo} ${styles.phones__categories_accessoriesimg}`}
                ></div>
                <p className={styles.phones__categories__title}>Accessories</p>
                <p className={styles.phones__categories__subtitle}>0 models</p>
              </NavLink>
            </div>
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
                  <PhoneCard phone={phone} key={phone.id} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </section>
  );
};
