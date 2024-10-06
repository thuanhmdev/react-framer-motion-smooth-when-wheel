import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useLayoutEffect, useRef, useState } from "react";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.1, // Điều chỉnh "quán tính" của animation. Giá trị càng lớn, animation càng chậm khi bắt đầu và kết thúc
    stiffness: 100, // Điều chỉnh "độ đàn hồi" của animation. Giá trị càng cao, animation càng nhanh và "bật" mạnh hơn
    damping: 30, // Điều chỉnh "độ mượt" của animation. Giá trị này kiểm soát mức độ animation sẽ "dừng lại" mượt mà như thế nào
  });

  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const y = useTransform(
    smoothProgress,
    [0, 1],
    contentHeight ? [0, -(contentHeight - window.innerHeight)] : [0, 0]
  );

  useLayoutEffect(() => {
    const handleResize = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div style={{ height: contentHeight }} />
      <motion.div
        className="scrollBody"
        style={{
          y,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          overflowY: "hidden",
        }}
        ref={contentRef}
      >
        {children}
      </motion.div>
    </>
  );
}
