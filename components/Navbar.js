import Link from "next/link";
import Image from "next/image";
import { logo, menu, close, cart, avatar, pro1Thum } from "./imports";
import { useEffect, useState } from "react";
import styles from "/styles/navbar.module.scss";
import clsx from "clsx";
import { BsCart3 } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [cart, setCart] = useState(false);
  const [data, setData] = useState(null);

  const handelNav = () => {
    setToggle(!toggle);
    setShowMenu(!showMenu);
  };

  const handelCart = () => {
    setCart(!cart);
  };

  const remove = () => {
    localStorage.removeItem("data");
    window.location.reload();
  };

  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem("data")) || null;
    setData(getData);
  }, [data]);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src={logo} alt="logo" />
      </div>
      <nav className={clsx(styles.nav, showMenu && styles.show)}>
        <div
          className={clsx(styles.menuBtn, toggle && styles.show)}
          onClick={handelNav}
        >
          <div>
            <Image src={menu} alt="menu-icon" className={styles.menuIcon} />
          </div>
          <div>
            <Image src={close} alt="close-icon" className={styles.closeIcon} />
          </div>
        </div>
        <ul>
          <li>
            <Link href="/">Collections</Link>
          </li>
          <li>
            <Link href="/">Men</Link>
          </li>
          <li>
            <Link href="/">Women</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.rightNav}>
        <div
          onClick={handelCart}
          className={clsx(styles.cartIcon, cart && styles.color)}
        >
          <BsCart3 className={styles.icon} />
          <div className={styles.dataCounter}>{data}</div>
        </div>
        <Image src={avatar} alt="avatar" className={styles.avatar} />
      </div>

      {/* ----CART---- */}

      <div className={clsx(styles.cart, cart && styles.hidden)}>
        <h2>Cart</h2>
        {data === null ? (
          <div className={styles.cartEmpety}>
            <p>Your cart is empty</p>
          </div>
        ) : (
          <div className={styles.cartbox}>
            <div className={styles.cartItem}>
              <Image
                src={pro1Thum}
                alt="thumbnail"
                className={styles.itemThumb}
              />
              <div>
                <p>Fall Limited Edition Sneakers</p>
                <p>
                  $125.00 x {data} &nbsp;
                  <span className={styles.span}>${125 * data}.00</span>
                </p>
              </div>
              <button onClick={remove}>
                <FaTrashAlt />
              </button>
            </div>
            <button className={styles.checkoutBtn}>Checkout</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
