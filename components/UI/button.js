import Link from "next/link";
import classes from "./button.module.css";
const Button = (props) => {
  const { children, link } = props;
  if (link) {
    return (
      <Link href={link}>
        <a className={classes.btn}>{children}</a>
      </Link>
    );
  }
  return (
    <button className={classes.btn} {...props}>
      {children}
    </button>
  );
};
export default Button;
