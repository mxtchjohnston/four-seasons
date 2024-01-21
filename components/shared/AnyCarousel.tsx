"use client"
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { EmblaOptionsType, EmblaPluginType } from 'embla-carousel';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import Autoplay from 'embla-carousel-autoplay'

type Props = { children: React.ReactNode, opts?: EmblaOptionsType, plugins?: EmblaPluginType[] };

function AnyCarousel({ children, opts}: Props) {
  return (
    <Carousel className="relative overflow-hidden" opts={opts} plugins={[WheelGesturesPlugin(), Autoplay({delay: 5000})]}>
      <CarouselContent className="flex">
        {React.Children.map(children, (child) => (
          <CarouselItem className="min-w-full flex justify-center items-center">
            {child}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute top-1/2 transform -translate-y-1/2 left-4 cursor-pointer" />
      <CarouselNext className="absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer" />
    </Carousel>
  )
}

export default AnyCarousel