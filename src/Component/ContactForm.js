import BackBtn from './BackBtn';
import styles from './About.module.css';

const ContactForm = () => {
  const formsubmit = (form) => {
    form.submit();
  };
  return (
    <>
      <BackBtn />
      <div className={styles.contactform}>
        {' '}
        <form action="https://formspree.io/f/mzbqjbed" method="POST" className={styles.myform}>
          <p className={styles.infoform}>
            <strong>
              Feel free to submit your
              inquiries for additional details.

            </strong>

          </p>
          <input name="fullname" type="text" placeholder="Full Name" className={styles.inputfield} />
          <input name="email" type="email" placeholder="Email" />
          <textarea name="textarea" rows={6} placeholder="Message" className={styles.textarr} />
          <button type="submit" onSubmit={formsubmit}>Submit</button>

        </form>
      </div>
    </>
  );
};
export default ContactForm;
