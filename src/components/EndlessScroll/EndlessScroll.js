import { useState } from "react";

const ITEMS_PER_PAGE = 20;

const EndlessScroll = ({ children }) => {
  const [itemsLimit, setItemsLimit] = useState(ITEMS_PER_PAGE);
  const [threshold, setThreshold] = useState(0);

  return children({
    itemsLimit,
    loadMoreItems: (event) => {
      const { scrollHeight, scrollTop } = event.target;
      const initThreshold = (scrollHeight * 2) / 3;
      if (scrollTop > (threshold || initThreshold)) {
        setItemsLimit(itemsLimit + ITEMS_PER_PAGE);
        setThreshold(scrollHeight);
      }
    },
  });
};

export default EndlessScroll;
