import { socialsList } from "./data";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerInner} container`}>
        <small className={styles.footerCopyright}>
          Copyright ©2024 Adrian Hajdin
        </small>
        <ul className={styles.footerList}>
          {socialsList.map(({ id, image }) => (
            <li className={styles.footerItem} key={id}>
              <a href="#" target="_blank" className={styles.footerLink}>
                {image}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
