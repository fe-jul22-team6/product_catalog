import styles from './ProductPage.module.scss';

export const ProductPage = () => {
  return (
    <div className="ProductPage">
      <h1 className={styles.ProductPage__title}>Template Title</h1>
      <section className={styles.ProductPage__photos}></section>
      <section className={styles.ProductPage__actions}></section>
      <div className={styles.container}>
        <section className={styles.ProductPage__about}>
          <h2 className={styles.ProductPage__about_title}>About</h2>
          <h3 className={styles.ProductPage__about_subtitle}>
            And then there was a Pro
          </h3>
          <p className={styles.ProductPage__about_text}>
            A transformative triple‑camera system that adds tons of capability
            without complexity. <br /> <br /> An unprecedented leap in battery
            life. And a mind‑blowing chip that doubles down on machine learning
            and pushes the boundaries of what a smartphone can do. Welcome to
            the first iPhone powerful enough to be called Pro.
          </p>
          <h3 className={styles.ProductPage__about_subtitle}>Camera</h3>
          <p className={styles.ProductPage__about_text}>
            Meet the first triple‑camera system to combine cutting‑edge
            technology with the legendary simplicity of iPhone. Capture up to
            four times more scene. Get beautiful images in drastically lower
            light. Shoot the highest‑quality video in a smartphone — then edit
            with the same tools you love for photos. You’ve never shot with
            anything like it.
          </p>
          <h3 className={styles.ProductPage__about_subtitle}>
            Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it.
            Love it.
          </h3>
          <p className={styles.ProductPage__about_text}>
            iPhone 11 Pro lets you capture videos that are beautifully true to
            life, with greater detail and smoother motion. Epic processing power
            means it can shoot 4K video with extended dynamic range and
            cinematic video stabilization — all at 60 fps. You get more creative
            control, too, with four times more scene and powerful new editing
            tools to play with.
          </p>
        </section>
        <section className={styles.ProductPage__techspecs}>
          <h2 className={styles.ProductPage__techspecs_title}>Tech specs</h2>
          <div className={styles.ProductPage__techspecs_wrapper}>
            <p className={styles.ProductPage__techspecs_subtitle}>Screen</p>
            <p className={styles.ProductPage__techspecs_text}>6.5” OLED</p>
          </div>
          <div className={styles.ProductPage__techspecs_wrapper}>
            <p className={styles.ProductPage__techspecs_subtitle}>Resolution</p>
            <p className={styles.ProductPage__techspecs_text}>2688x1242</p>
          </div>
          <div className={styles.ProductPage__techspecs_wrapper}>
            <p className={styles.ProductPage__techspecs_subtitle}>Processor</p>
            <p className={styles.ProductPage__techspecs_text}>
              Apple A12 Bionic
            </p>
          </div>
          <div className={styles.ProductPage__techspecs_wrapper}>
            <p className={styles.ProductPage__techspecs_subtitle}>RAM</p>
            <p className={styles.ProductPage__techspecs_text}>3 GB</p>
          </div>
          <div className={styles.ProductPage__techspecs_wrapper}>
            <p className={styles.ProductPage__techspecs_subtitle}>
              Built in memory
            </p>
            <p className={styles.ProductPage__techspecs_text}>64 GB</p>
          </div>
          <div className={styles.ProductPage__techspecs_wrapper}>
            <p className={styles.ProductPage__techspecs_subtitle}>Camera</p>
            <p className={styles.ProductPage__techspecs_text}>
              12 Mp + 12 Mp + 12 Mp (Triple)
            </p>
          </div>
          <div className={styles.ProductPage__techspecs_wrapper}>
            <p className={styles.ProductPage__techspecs_subtitle}>Zoom</p>
            <p className={styles.ProductPage__techspecs_text}>Optical, 2x</p>
          </div>
          <div className={styles.ProductPage__techspecs_wrapper}>
            <p className={styles.ProductPage__techspecs_subtitle}>Cell</p>
            <p className={styles.ProductPage__techspecs_text}>GSM, LTE, UMTS</p>
          </div>
        </section>
      </div>

      <section className={styles.ProductPage__recommended}></section>
    </div>
  );
};
