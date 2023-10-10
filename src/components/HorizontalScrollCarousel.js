// Photos from https://citizenofnowhe.re/lines-of-the-city
import "../css/styles.css";
import { useRef } from "react";
import {
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
} from "framer-motion";

function useParallax(value, distance) {
  value = useMotionValue(0);
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <>
      <div className="scrollSection">
        <div ref={ref} className="stick-image animate__animated ">
          <img
            className="scrollimg"
            width="100%"
            src={`/assets/${id.img}.png`}
            alt=""
          />
        </div>
        <div className="scrollContent animate__animated ">
        <section>
          <h2 className="h2scroll">{`${id.heading}`}</h2>
          <h1 className="h1scroll">{`${id.content}`}</h1>
        </section>
        </div>
      </div>
    </>
  );
}

function HorizontalScrollCarousel() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {cards.map((image) => (
        <Image id={image} />
      ))}
    </>
  );
}

export default HorizontalScrollCarousel;

function reveal() {
  var reveals = document.querySelectorAll(".scrollContent");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("animate__fadeIn");
    }
  }
}
function revealimg() {
  var reveals = document.querySelectorAll(".stick-image");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("animate__fadeIn");
    }
  }
}

window.addEventListener("scroll", reveal);
window.addEventListener("scroll", revealimg);

const cards = [
  {
    img: "",
    heading:
      "Custard is the last thing your community needs. (join the waitlist if you get the joke) Here's a little story for you to check out and get some clarity into how custard+community exactly works.",
    content: "",
  },
  {
    img: "doodle 2",
    heading: "Communities saved your Great⁹⁹ grandpa. (and you)",
    content:
      "Until 40,000 years ago, Neanderthals set out to find all the Sapiens and were ready to get rid of all of them. Spears ready, they marched shouting unintelligible words.",
  },
  {
    img: "doodle 2",
    heading: "Continue",
    content:
      " Sapiens decided to form communities and band together to form a plan. Pushed all the Neanderthals in a valley and blocked both the ends. Won the war. Thanks to which you are reading this on your marvelous digital device.",
  },
  {
    img: "doodle 3",
    heading: "Stories lead the way.",
    content:
      "Your great⁹⁹ grandpa told the story of his fallen enemy's demise to his community. These stories became the force driving humans together and leading the way towards us right now.",
  },
  {
    img: "doodle 3",
    heading: "Continue",
    content:
      " Every civilization was a band of communities living together. They became very big with time but the core idea of communities never changed. ( the sunglasses were a luxury back then)",
  },
  {
    img: "doodle 4",
    heading: "The Social Dance Tribe",
    content:
      "Shunyaum observed the power of communities and set out to create a latin dance family of his own. He had an expertise in the Latin Dance styles Bachata, Kizumba and Salsa. ",
  },
  {
    img: "doodle 4",
    heading: "Continue",
    content:
      "He brought them to his people in a studio in Jaipur, Rajasthan, India. People joined him in his crazy, wholesome adventure of creating a community.",
  },
  {
    img: "doodle 5",
    heading: "Custard meets The Social Dance Tribe",
    content:
      "Shunyaum needed custard to simplify running the dance community and grow it further. The perfect feedback loop for him to get better at his work, easy membership renewals for members and personalized calendar of events and classes for everyone.",
  },
  {
    img: "doodle 5",
    heading: "Continue",
    content:
      " Custard is exponentially more useful combining all the features a community creator or a member could need.",
  },
  {
    img: "doodle 6",
    heading: '"Custard does it for me" - Shunyaum',
    content:
      'This is it. The epitome of Human social life. The connection we live for. This support of "one more human being" selfless and unconditional, is what community is all about. ',
  },
  {
    img: "doodle 6",
    heading: '"Let\'s Grow Together " - Shunyaum',
    content:
      "Shunyaum enjoys his community socials without being worried about keeping the environment gated, and inclusive simultaneously.",
  },
  {
    img: "doodle 6",
    heading: "Conclusion",
    content:
      "There are no protagonists in the community building space, but there surely are successful community builders. Build your community with custard.",
  },
];

// import { motion, useTransform, useScroll } from "framer-motion";
// import { useRef } from "react";
// import d1 from "../assets/doodle2.png";
// import "../css/HorizontalScrollCarousel.css";

// const HorizontalScrollCarousel = () => {
//   const targetRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//   });

//   const x = useTransform(scrollYProgress, [0,1], ["-5%","-465%"]);

//   return (
//     <section ref={targetRef} className="relative h-[1350vh] backdrop-blur-lg">
//       <div className="sticky top-0 flex h-screen items-center overflow-hidden backg">
//         <motion.div style={{ x }} className="flex gap-8 base">
//           {cards.map((card) => {
//             return <Card card={card} key={card.id} />;
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// const Card = ({ card }) => {
//   return (
//     <div
//       key={card.id}
//       className="group relative h-[450px] w-[450px] bg-neutral-200 setter"
//     >
//       <div
//         style={{
//           backgroundImage: `url(${d1})`,
//           backgroundSize: "contain",
//           backgroundRepeat:"no-repeat",
//           backgroundPosition: "center",
//         }}
//         className="set1"
//       ></div>
//       <div className="set2">
//         <div className="bg-gradient-to-br from-white/20 to-white/0 text-6xl font-black uppercase backdrop-blur-lg pp">
//           <h1 className="head">{card.title}</h1>
//           <p>{card.content}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HorizontalScrollCarousel;

// const cards = [
//   {
//     url: {d1},
//     title: "Communities saved your Great⁹⁹ grandpa. (and you)",
//     content:"Until 40,000 years ago, Neanderthals set out to find all the Sapiens and were ready to get rid of all of them. Spears ready, they marched shouting unintelligible words. Sapiens decided to form communities and band together to form a plan. Pushed all the Neanderthals in a valley and blocked both the ends. Won the war. Thanks to which you are reading this on your marvelous digital device.",
//     id: 1,
//   },
//   {
//     url: "./assets/doodle1.png",
//     title: "Stories lead the way.",
//     content:"Your great^99 grandpa told the story of his fallen enemy's demise to his community. These stories became the force driving humans together and leading the way towards us right now. Every civilization was a band of communities living together. They became very big with time but the core idea of communities never changed. ( the sunglasses were a luxury back then)",
//     id: 2,
//   },
//   {
//     url: {d1},
//     title: "The Social Dance Tribe",
//     content:"Shunyaum observed the power of communities and set out to create a latin dance family of his own. He had an expertise in the Latin Dance styles Bachata, Kizumba and Salsa. He brought them to his people in a studio in Jaipur, Rajasthan, India. People joined him in his crazy, wholesome adventure of creating a community.",
//     id: 3,
//   },
//   {
//     url: "./assests/front.png",
//     title: "Custard meets The Social Dance Tribe",
//     content:"Shunyaum needed custard to simplify running the dance community and grow it further. The perfect feedback loop for him to get better at his work, easy membership renewals for members and personalized calendar of events and classes for everyone. Custard is exponentially more useful combining all the features a community creator or a member could need.",
//     id: 4,
//   },
//   {
//     url: "./assests/front.png",
//     title: "'Custard does it for me' - Shunyaum",
//     content:"This is it. The epitome of Human social life. The connection we live for. This support of 'one more human being' selfless and unconditional, is what community is all about. Shunyaum enjoys his community socials without being worried about keeping the environment gated, and inclusive simultaneously.",
//     id: 5,
//   },
// ];
