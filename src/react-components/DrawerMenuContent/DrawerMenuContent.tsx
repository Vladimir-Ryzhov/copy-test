import { drawerLinks } from "../../data/links";
import { MenuSocialMedia } from "../MenuSocialMedia/MenuSocialMedia";
import { FaPhone, FaEnvelope, FaGlobe } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";

import styles from "./DrawerMenuContent.module.scss";

export function DrawerMenuContent({ currentPath }: { currentPath: string }) {
  const norm = (url: string) => {
    try {
      return new URL(url, "http://x").pathname;
    } catch {
      return url;
    }
  };

  return (
    <div className={styles["inner-wrapper"]}>
      <img src="/assets/icons/MainLogo.svg" alt="main logo" />
      <ul className={styles.list}>
        {drawerLinks.map((link, index) => {
          const isActive = norm(currentPath) === norm(link.url);

          return (
            <li key={index}>
              <a
                href={link.url}
                className={`${styles.link} ${isActive ? styles.active : ""}`}
              >
                {link.title}
              </a>
            </li>
          );
        })}
      </ul>

      <div className={styles.description}>
        Jedes Kind ist ein Geschenk – und verdient jemanden, der es behütet,
        versteht und beschützt. Protectino ist genau dieser Schutzengel auf
        jedem Schritt des Lebens.
      </div>

      <h2 className={styles.title}>Kontaktinformation</h2>

      <ul className={styles["list-links"]}>
        <li>
          <FaPhone />
          <a href="tel:041547946169">04154 / 7946169</a>
        </li>
        <li>
          <FaEnvelope />
          <a href="mailto:info@protectino4kids.de">info@protectino4kids.de</a>
        </li>
        <li>
          <FaGlobe />
          <a href="www.protectino4kids.de">www.protectino4kids.de</a>
        </li>
        <li>
          <FaMapMarkerAlt />
          <a href="adress:Poststr. 39, 22946 Trittau">
            Poststr. 39, 22946 Trittau
          </a>
        </li>
      </ul>

      <MenuSocialMedia />
    </div>
  );
}
