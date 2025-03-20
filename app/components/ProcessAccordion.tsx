"use client";
import { processStepsData } from "../data/processStepsData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

export function ProcessAccordion() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="py-2 bg-white mx-auto px-4">
      <h2 className="bg-[#7E8038] font-space-grotesk text-black text-4xl font-bold rounded-lg px-7 py-2 uppercase mb-12 ml-[8.8rem] tracking-wide w-[193px] h-[51px] flex items-center justify-center">
        PROCESS
      </h2>

      <div className="w-full max-w-[2900px] px-[8.2rem]">
        <Accordion type="single" collapsible className="w-full space-y-10">
          {processStepsData.map((step) => {
            const isOpen = openItem === `item-${step.id}`;

            return (
              <AccordionItem
                key={step.id}
                value={`item-${step.id}`}
                className={`rounded-3xl overflow-hidden border border-black mb-4 transition-all duration-300 ${
                  isOpen ? "bg-white" : "bg-[#7E8038]"
                }`}
                style={{
                  width: "100%", 
                  height: isOpen ? "auto" : "155px",
                }}
              >
                <AccordionTrigger
                  className={`flex items-center justify-between px-4 py-2 text-2xl font-semibold relative transition-colors duration-300 ${
                    isOpen ? "bg-white text-black" : "bg-[#7E8038] text-black"
                  } hover:no-underline focus:no-underline`}
                  onClick={() => handleToggle(`item-${step.id}`)}
                >
                  <div className="flex items-center w-full">
                    <span className="mr-3 text-[60px] font-inter font-medium text-black px-12 py-3 rounded-md leading-[121%] tracking-[0]">
                      {String(step.id).padStart(2, "0")}
                    </span>
                    <span className="flex-1 text-[30px] font-inter font-medium py-10 leading-[121%]">
                      {step.title}
                    </span>
                  </div>
                  <div className="w-[58px] h-[58px] flex items-center justify-center rounded-full bg-white text-black font-bold text-5xl cursor-pointer border-[1px] border-black relative">
                    <span>{isOpen ? "-" : "+"}</span>
                  </div>
                </AccordionTrigger>

                <AccordionContent
                  className={`text-black text-lg leading-relaxed transition-all duration-300 ${
                    isOpen
                      ? "bg-white border-t-2 border-black mt-3 w-[90%] mx-auto px-[7px] py-[20px]"
                      : "border-t border-gray-300"
                  }`}
                >
                  <div className="w-full">{step.description}</div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}
