import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import front from "../assests/front.png";
import "../css/HorizontalScrollCarousel.css";


const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[90vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200 setter"
    >
      <div
        style={{
          backgroundColor:"black",
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="set1"
      ></div>
      <div className=" set2">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default HorizontalScrollCarousel;


const cards = [
  {
    url: "data:image/jpeg;base64,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",
    title: "Custard",
    id: 1,
  },
  {
    url: {front},
    title: "Title 2",
    id: 2,
  },
  {
    url: {front},
    title: "Title 3",
    id: 3,
  },
  {
    url: "./assests/front.png",
    title: "Title 4",
    id: 4,
  },
];