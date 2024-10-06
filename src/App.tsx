import "./App.css";
import SmoothScroll from "./components/SmoothScroll";
import { motion } from "framer-motion";

const emojis = [
  "😀",
  "😍",
  "😃",
  "😄",
  "😁",
  "😆",
  "☺️",
  "😊",
  "😇",
  "🙂",
  "🙃",
  "😉",
  "😌",
  "🤩",
];

function BoxItem() {
  return (
    <motion.div
      className="box"
      whileInView={{ opacity: 1 }}
      initial={{
        opacity: 0,
        background: "rgba(255, 255, 255, 0.1)",
      }}
      whileHover={{
        scale: 1.025,
        background: "rgba(255, 255, 255, 0.15)",
      }}
      transition={{
        type: "spring",
      }}
    >
      {emojis[Math.floor(Math.random() * emojis.length)]}
    </motion.div>
  );
}

export default function App() {
  return (
    <>
      <SmoothScroll>
        <div className="item">
          <h1>Smooth Scrolling Demo</h1>
          <p>
            A smooth-scrolling demo built with{" "}
            <a href="https://framer.com/motion">Framer Motion</a> and React.
            Start scrolling down!
          </p>

          <p>
            Source Code:{" "}
            <a href="https://replit.com/@IroncladDev/FramerSmoothScroll?v=1">
              https://replit.com/@IroncladDev/FramerSmoothScroll?v=1
            </a>
          </p>

          <p></p>
        </div>
        <div className="item">
          <div className="box-grid">
            {new Array(12).fill(0).map((_, i) => (
              <BoxItem key={i} />
            ))}
          </div>
        </div>
        <div className="item">
          <h1>We be scrollin' smooooth</h1>
          <p>Some more emojis to make you happy</p>

          <div className="box-grid">
            {new Array(12).fill(0).map((_, i) => (
              <BoxItem key={i} />
            ))}
          </div>
        </div>
        <div className="item">
          <h1>The scrolling continues</h1>
          <p>
            Tired of scrolling? Try scrolling on a non-smooth-scrolling website.
          </p>
          <div className="box-grid">
            {new Array(24).fill(0).map((_, i) => (
              <BoxItem key={i} />
            ))}
          </div>
        </div>
        <div className="item">
          <h1>You've reached the end</h1>
          <p>Well that's unfortunate.</p>
          <p>Give your mouse a break.</p>

          <video
            src="/mouse.mov"
            autoPlay
            controls
            loop
            width="504"
            height="206"
          />
        </div>
        <div className="item">
          <p>
            Made with 🔥 by <a href="https://connerow.dev">IroncladDev</a>
          </p>
        </div>
      </SmoothScroll>
    </>
  );
}
