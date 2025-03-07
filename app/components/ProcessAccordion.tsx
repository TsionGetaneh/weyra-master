"use client";

import { processStepsData } from "../data/processStepsData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function ProcessAccordion() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
      <h2 className="inline-block bg-[#7d7c38] text-black text-3xl font-bold rounded-[20px] px-4 py-2 text-start mb-6">
          PROCESS
        </h2>
        <div className="max-w-2xl mx-auto space-y-4">
          <Accordion type="single" collapsible className="w-full">
            {processStepsData.map((step) => (
              <AccordionItem
                key={step.id}
                value={`item-${step.id}`}
                className="rounded-lg overflow-hidden px-4 py-2 mb-4"
              >
                <AccordionTrigger className="flex items-center justify-between bg-[#7d7c38] text-white px-6 py-4 text-lg font-semibold rounded-md hover:bg-[#616161] transition">
                  <span className="flex items-center">
                    <span className="mr-4 bg-white text-green-700 font-bold px-3 py-1 rounded-full">
                      {step.id}
                    </span>
                    {step.title}
                  </span>
                </AccordionTrigger>

                <AccordionContent className="px-6 py-4 bg-white text-black">
                  {step.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        


      </div>
    </section>
  );
}
