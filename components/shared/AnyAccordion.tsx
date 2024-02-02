import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CustomPortableText } from "./CustomPortableText";
import { Key } from "react";

export function AnyAccordion({value}) {
  const {title, items} = value;
  return (   
    <>
    <div className="font-extrabold tracking-tight md:text-3xl">
      {title}
    </div>
    <Accordion type='single' collapsible className="w-full">
      {items.map((item: any, key: Key) => (
        <AccordionItem key={key} value={item.trigger}>
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>
            <CustomPortableText value={item.body} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
    </>
  )
}
