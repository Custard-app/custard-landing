import { Chevron } from "./icon";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
import { faqData } from "./index_a";
import { useCallback, useMemo } from "react";

const Faq = () => {
  const faqDataSize = useMemo(() => {
    return faqData.length;
  }, []);

  const generateHeaderClass = useCallback(
    (open, position) => {
      const background = open ? "bg-gray-300/30" : "bg-white";
      const border =
        position === faqDataSize ? (open ? "border-b" : "") : "border-b";
      return `transition-[background] flex items-center justify-between w-full px-4 py-3 ${border} ${background}`;
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
    <section>
      <Accordion
        className="rounded-md overflow-hidden border"
        alwaysOpen={true}
      >
        {faqData.map((item, index) => (
          <AccordionItem key={index}>
            {({ open }) => (
              <>
                <AccordionHeader
                  className={generateHeaderClass(open, index + 1)}
                >
                  <span className="text-sm font-semibold text-gray-600">
                    {item.title}
                  </span>

                  <Chevron
                    className={`w-6 h-6 text-gray-500 transition duration-300 ${
                      open ? "rotate-90" : ""
                    }`}
                  />
                </AccordionHeader>

                <AccordionBody className={generateBodyClass(open, index + 1)}>
                  <div className="p-4 text-sm text-gray-500">
                    {item.content}
                  </div>
                </AccordionBody>
              </>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default Faq;
