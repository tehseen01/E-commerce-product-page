import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import styles from "../styles/Home.module.scss";

const ProductCount = () => {
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };

  const addCart = () => {
    const get = JSON.parse(localStorage.getItem("data")) || null;
    localStorage.setItem("data", JSON.stringify(get + count));
    window.location.reload();
  };

  return (
    <div className={styles.countBtns}>
      <div className={styles.count}>
        <button onClick={minus} disabled={count === 0 || (count < 0 && true)}>
          <FaMinus />
        </button>
        <span>{count}</span>
        <button onClick={plus}>
          <FaPlus />
        </button>
      </div>
      <button
        className={styles.addToCart}
        disabled={count === 0 || (count < 0 && true)}
        onClick={addCart}
      >
        <BsCart3 />
        Add to cart
      </button>
    </div>
  );
};

export default ProductCount;
