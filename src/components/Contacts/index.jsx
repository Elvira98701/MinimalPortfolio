import { Button, Form, IconArroy } from "@components";
import { useModal } from "@components/Modal/ModalContext";

import styles from "./Contacts.module.scss";

export const Contacts = () => {
  const { openModal } = useModal();

  return (
    <section className={styles.contacts} id="contact">
      <div className={`${styles.contactsInner} container`}>
        <div className={styles.contactsBody}>
          <h2>
            Ready to take <span className={styles.contactsAccent}>your</span>{" "}
            digital presence to the next level?
          </h2>
          <p className={styles.contactsDescription}>
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals.
          </p>
          <Button onClick={() => openModal(<Form />)} type="button">
            Contact me now
            <IconArroy />
          </Button>
        </div>
      </div>
    </section>
  );
};
