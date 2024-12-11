import styles from "./Link.module.css";

const Link = ({children, href, ...props}) => {
  return (
    <a className={styles.link} href={href} {...props}>
      {children}
    </a>
  );
};

export default Link;