import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import styles from "./MenuSocialMedia.module.scss";

export function MenuSocialMedia() {
  return (
    <ul className={styles.list}>
      <li className={styles.link}>
        <a href="https://www.facebook.com/people/Marko-Meyer-Denis-Sch%C3%A4del-GbR/100088167489681/">
          <FaFacebookF />
        </a>
      </li>
      <li className={styles.link}>
        <a href="https://instagram.com/markomeyer74?igshid=ZDdkNTZiNTM">
          <FaInstagram />
        </a>
      </li>

      <li className={styles.link}>
        <a href="#">
          <FaLinkedinIn />
        </a>
      </li>
    </ul>
  );
}
