import { useState, useRef } from "react";

const ITEMS_PER_PAGE = 20;
const SCROLL_THRESHOLD = 100;
const INIT_THRESHOLD = 0.7;

const EndlessScroll = ({ children }) => {
  const endlessRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [itemsLimit, setItemsLimit] = useState(ITEMS_PER_PAGE);
  const [threshold, setThreshold] = useState(INIT_THRESHOLD);

  return children({
    itemsLimit,
    endlessRef,
    loadMoreItems: (event) => {
      // event.preventDefault();
      const newScale = scale + event.deltaY * -0.005;
      setScale(Math.min(Math.max(0, newScale), 4));

      if (endlessRef.current) {
        endlessRef.current.style.transform = `scale(${scale})`;
      }

      if (newScale < scale) {
        // zoom out
        console.log("zoom out", { scale, threshold, itemsLimit });
        if (scale < threshold) {
          setItemsLimit(itemsLimit + ITEMS_PER_PAGE);
          setThreshold(threshold / 2);
        }
      } else {
        console.log("zoom in", { scale, threshold, itemsLimit });
        // if (scale > threshold) {
        //   setItemsLimit(itemsLimit - ITEMS_PER_PAGE);
        //   setThreshold(threshold * 2);
        // }
      }
    },
  });
};

export default EndlessScroll;
