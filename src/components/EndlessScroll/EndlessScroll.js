import { useState } from "react";

const ITEMS_PER_PAGE = 20;
const SCROLL_THRESHOLD = 100;
const INIT_THRESHOLD = 500;

const EndlessScroll = ({ children }) => {
  const [itemsLimit, setItemsLimit] = useState(ITEMS_PER_PAGE);
  const [threshold, setThreshold] = useState(INIT_THRESHOLD);

  return children({
    itemsLimit,
    loadMoreItems: (event) => {
      if (event.target.scrollTop > threshold) {
        setItemsLimit(itemsLimit + ITEMS_PER_PAGE);
        setThreshold(event.target.scrollHeight - SCROLL_THRESHOLD);
      }
    },
  });
};

export default EndlessScroll;
