import { JSX, useEffect, useState, KeyboardEvent } from "react";
import { RatingProps } from "@/components/Rating/Rating.props";
import StarIcon from "./star.svg";
import cn from "classnames";
import styles from "./Rating.module.css";

export const Rating = ({
  isEditable = false,
  rating,
  setRating,
  ...otherProps
}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, index: number) => {
      return (
        <span
          onMouseEnter={() => changeDisplay(index + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => handleRating(index + 1)}
          className={cn(styles.star, {
            [styles.filled]: index < currentRating,
            [styles.editable]: isEditable,
          })}
        >
          <StarIcon
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGElement>) =>
              isEditable && handleSpace(index + 1, e)
            }
          />
        </span>
      );
    });

    setRatingArray(updatedArray);
  };

  const changeDisplay = (i: number) => {
    if (!isEditable) {
      return;
    }

    constructRating(i);
  };

  const handleRating = (rating: number) => {
    if (!isEditable || !setRating) {
      return;
    }

    setRating(rating);
  };

  const handleSpace = (rating: number, e: KeyboardEvent<SVGElement>) => {
    if (e.code != "Space") {
      return;
    }

    handleRating(rating);
  };

  return (
    <div {...otherProps}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};
