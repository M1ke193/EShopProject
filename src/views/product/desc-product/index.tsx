import { useState } from "react";
import style from "./style.module.scss";
import ProductStart from "src/components/product-star";
import Input from "src/components/base/input";
import { Button } from "src/components/base/button";
import fakeData from "./fakeData.json";

const DescProduct = () => {
  const [activeReview, setActiveReview] = useState(false);
  const [starReview, setStarReview] = useState(0);

  const handleRate = (index: number) => {
    if (starReview === index) {
      setStarReview(0);
    } else {
      setStarReview(index);
    }
  };

  return (
    <div className={style.groupDesc}>
      <div className={`${style.slide}`}>
        <span
          className={activeReview ? "" : style.active}
          onClick={() => setActiveReview(false)}
        >
          Description
        </span>
        <span
          className={activeReview ? style.active : ""}
          onClick={() => setActiveReview(true)}
        >
          Reviews
        </span>
      </div>
      <div className={style.descContent}>
        <div
          className={`${style.description} ${
            activeReview ? "" : style.contenActive
          }`}
        >
          <div className={style.groupText}>
            <div className={style.leftDesc}>
              <h5 className={style.titleDesc}>Specifications:</h5>
              <p className={style.textDesc}>{fakeData.Specifications}</p>
            </div>
            <div className={style.rightDesc}>
              <h5 className={style.titleDesc}>Care & Maintenance:</h5>
              <p className={style.textDesc}>{fakeData.Maintenance}</p>
            </div>
          </div>
          <ul className={style.bottomDesc}>
            <li>
              <div>
                <img src="/icon1.png" />
              </div>
              Easy Returns
            </li>
            <li>
              <div>
                <img src="/icon2.png" />
              </div>
              Quality Service
            </li>
            <li>
              <div>
                <img src="/icon3.png" />
              </div>
              Original Product
            </li>
          </ul>
        </div>
        <div
          className={`${style.reviewWrap} ${
            activeReview ? style.contenActive : ""
          }`}
        >
          <div className={style.reviews}>
            <div className={style.comment}>
              <h6 className={style.titleDesc}>1 Review for this product</h6>
              <div className={style.singleComment}>
                <div className={style.imgContainer}>
                  <img src="/avatar.png" />
                </div>
                <div className={style.commentText}>
                  <div className={style.groupStar}>
                    <span>Đinh Nhựt Minh</span>
                    <ProductStart rate={3} className={style.star} />
                  </div>
                  <p className={style.textDesc}>{fakeData.review}</p>
                </div>
              </div>
            </div>
            <div className={style.writeComment}>
              <h6 className={style.titleDesc}>Add a Review</h6>
              <p className={style.textDesc}>
                Your email address will not be published. Required fields are
                marked *
              </p>
              <div className={style.ratingGroup}>
                <span className={style.ratingTitle}>Your Rating</span>
                <ul className={style.star}>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <li key={index} onClick={() => handleRate(index + 1)}>
                      {index + 1 <= starReview ? (
                        <i
                          className={`fa-solid fa-star ${style.fullColor}`}
                        ></i>
                      ) : (
                        <i className="fa-regular fa-star"></i>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={style.textareaWrap}>
                <label htmlFor={style.textarea}>Others Notes (optinal)</label>
                <textarea
                  id={style.textarea}
                  placeholder="Your comment"
                ></textarea>
              </div>
              <div className={style.groupInput}>
                <Input
                  label="Name"
                  id="Name"
                  required={true}
                  className={style.inputComment}
                ></Input>
                <Input
                  label="Email"
                  id="Email"
                  required={true}
                  className={style.inputComment}
                ></Input>
              </div>
              <Button
                color="blue"
                variant="contained"
                className={style.buttonComment}
              >
                Submit Comment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescProduct;
