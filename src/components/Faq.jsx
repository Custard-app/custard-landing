import { Chevron } from "./icon";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
import { faqData } from "./index_a";
import { useCallback, useMemo } from "react";
import "../css/faq.css";
import d1 from "../assets/doodle1.png";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

const Faq = () => {
  const faqDataSize = useMemo(() => {
    return faqData.length;
  }, []);

  const generateHeaderClass = useCallback(
    (open, position) => {
      const background = open ? "bg-gray-300/30" : "bg-white";
      const border =
        position === faqDataSize ? (open ? "border-b" : "") : "border-b";
      return `transition-[background] flex items-center justify-between w-full ${border} ${background}`;
    },
    [faqDataSize]
  );

  const generateBodyClass = useCallback(
    (open, position) => {
      return position === faqDataSize ? "" : open ? "border-b" : "";
    },
    [faqDataSize]
  );

  return (
    <>
      <div className="head">Frequently Asked Questions</div>
      <section className="faq">
        <Accordion
          className="rounded-md overflow-hidden accordion"
        >
          {faqData.map((item, index) => (
            <AccordionItem key={index}>
              {({ open }) => (
                <>
                  <AccordionHeader 
                    className={generateHeaderClass(open, index + 1)}
                  >
                    <span className=" fs-1 font-bold ">
                      {item.title}
                    </span>

                    <Chevron
                      className={`w-6 h-6 fs-3 transition duration-300 ${
                        open ? "rotate-90" : ""
                      }`}
                    />
                  </AccordionHeader>

                  <AccordionBody className={generateBodyClass(open, index + 1)}>
                    <div className="p-4 fs-5 text-sm ">
                      {item.content}
                    </div>
                  </AccordionBody>
                </>
              )}
            </AccordionItem>
          ))}
        </Accordion>
        <div className="lap-img">
          <img src={d1} alt="" />
        </div>
      </section>
    </>
  );
};

export default Faq;