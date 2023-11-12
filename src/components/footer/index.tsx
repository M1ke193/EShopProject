import style from "./style.module.scss";
import { Link } from "react-router-dom";
import qr from "src/assets/img/Qr.png";
import ios from "src/assets/img/ios.png";
import android from "src/assets/img/android.png";
interface Props {
  className?: string;
}

const Footer = (props: Props) => {
  const { className = "" } = props;
  return (
    <div className={`${style.footer} ${className}`}>
      <div className={style.support}>
        <h3>Suport</h3>
        <p>
          38 Ben Thanh Ward, <br /> District 1, Ho Chi Minh City, <br /> Vietnam
        </p>
        <i></i>
        <p>mnx1t@gmail.com</p>
        <i></i>
        <p>(+84) 888-135-888 </p>
      </div>
      <div className={style.account}>
        <h3>Account</h3>
        <Link to="/">My Account</Link>
        <Link to="/login">Login</Link>
        <Link to="/shop/cart">Cart</Link>
        <Link to="/">Wishlist</Link>
        <Link to="/shop">Shop </Link>
      </div>
      <div className={style.quicklink}>
        <h3>Quick Link</h3>
        <Link to="/">About Us</Link>
        <Link to="/">Privacy Policy</Link>
        <Link to="/">Terms Of Use</Link>
        <Link to="/">Contact</Link>
      </div>
      <div className={style.download}>
        <h3>Download App</h3>
        <p>Save $3 With App & New User only</p>
        <div className={style.downloadGroup}>
          <img className={style.qr} src={qr} />
          <div className={style.applink}>
            <img className={style.ios} src={ios} />
            <img className={style.android} src={android} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
