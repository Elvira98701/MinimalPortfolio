import { useModal } from "@components/Modal/ModalContext";
import Button from "@components/Button";
import Form from "@components/Form";

import styles from "./Contacts.module.scss";

const Contacts = () => {
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
          <Button onClick={() => openModal(<Form />)}>
            Contact me now
            <svg
              width="13"
              height="14"
              viewBox="0 0 13 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.292893 11.7929C-0.0976311 12.1834 -0.0976311 12.8166 0.292893 13.2071C0.683418 13.5976 1.31658 13.5976 1.70711 13.2071L0.292893 11.7929ZM13 1.5C13 0.947716 12.5523 0.5 12 0.5L3 0.5C2.44771 0.5 2 0.947716 2 1.5C2 2.05229 2.44771 2.5 3 2.5H11V10.5C11 11.0523 11.4477 11.5 12 11.5C12.5523 11.5 13 11.0523 13 10.5L13 1.5ZM1.70711 13.2071L12.7071 2.20711L11.2929 0.792894L0.292893 11.7929L1.70711 13.2071Z"
                fill="white"
              />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
