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
    <section className="py-12 bg-gray-50 container mx-auto px-6">
      <h2 className="inline-block bg-[#7d7c38] text-white text-2xl font-bold rounded-[20px] px-4 py-2 text-start mb-6">
        PROCESS
      </h2>
      <div className="max-w-2xl mx-auto space-y-4">
        <Accordion type="single" collapsible className="w-full">
          {processStepsData.map((step) => (
            <AccordionItem
              key={step.id}
              value={`item-${step.id}`}
              className="rounded-lg overflow-hidden shadow-lg mb-4"
            >
              <AccordionTrigger
                className="flex items-center justify-between bg-[#7d7c38] text-white px-6 py-4 text-lg font-semibold rounded-t-md hover:bg-[#616161] transition relative"
                onClick={() => handleToggle(`item-${step.id}`)}
              >
                <div className="flex items-center w-full">
                  <span className="mr-4 bg-white text-green-700 font-bold px-3 py-1 rounded-full">
                    {step.id}
                  </span>
                  <span className="flex-1">{step.title}</span>
                </div>

                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black font-bold text-2xl cursor-pointer my-auto">
                  <span>{openItem === `item-${step.id}` ? "-" : "+"}</span>
                </div>
              </AccordionTrigger>

              <AccordionContent className="px-6 py-4 bg-white text-black rounded-b-md">
                {step.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
