import { useEffect } from "react";

const useDocTitle = (title) => {
  useEffect(() => {
    if (title) {
      document.title = `${title} - E-Commerce Store`;
    } else {
      document.title = "The Perfect Audio Store";
    }
  }, [title]);

  return null;
};

export default useDocTitle;
