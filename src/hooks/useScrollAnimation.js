import { useScroll, useTransform } from "framer-motion";

const useScrollAnimation = (targetRef) => {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.75]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return [scale, opacity];
};

export default useScrollAnimation;
