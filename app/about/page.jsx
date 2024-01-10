
'use client';

import { Carousel } from 'flowbite-react';

export default function About() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={5000}>
        <img src="https://tse1.mm.bing.net/th?id=OIP.RuZJnryIZ08Z_BO2C7E-UgHaEo&pid=Api&P=0&h=220" alt="..." />
        <img src="https://tse2.mm.bing.net/th?id=OIP.RoPkFCz6bXazc-VWw6MbHwHaEK&pid=Api&P=0&h=220" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </Carousel>
    </div>
  );
}
