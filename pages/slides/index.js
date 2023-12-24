import React from 'react'
import Image from 'next/image.js'
import Link from 'next/link.js';

export default function slides() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
        <div>
          <Image 
            src="/Mesa_de_trabajo_1.png"
            width={500}
            height={500}
            alt={`Querido Pablo, amigo querido, En este juego de rimas, te tengo entretenido.`}
            priority={true}
            className={`w-auto`}
          />
        </div>
        <div>
          <Image 
            src="/Mesa_de_trabajo_2.png"
            width={500}
            height={500}
            alt={`Suelo usar emojis, ¡es mi tradición! Subo historias en Instagram con mucha emoción.`}
            priority={true}
            className={`w-auto`}
          />
        </div>
        <div>
          <Image 
            src="/Mesa_de_trabajo_3.png"
            width={500}
            height={500}
            alt={`Hablar como si tuviera veinte años es mi afán, La juventud en las palabras siempre está en mi plan.`}
            priority={true}
            className={`w-auto`}
          />
        </div>
        <div>
          <Image 
            src="/Mesa_de_trabajo_3.png"
            width={500}
            height={500}
            alt={`Hablar como si tuviera veinte años es mi afán, La juventud en las palabras siempre está en mi plan.`}
            priority={true}
            className={`w-auto`}
          />
        </div>
        <div>
          <Image 
            src="/Mesa_de_trabajo_4.png"
            width={500}
            height={500}
            alt={`Prometo empezar con el gimnasio este 2024, Pero sabes que mi constancia es solo un rumor.`}
            priority={true}
            className={`w-auto`}
          />
        </div>
        <div>
          <Image 
            src="/Mesa_de_trabajo_5.png"
            width={500}
            height={500}
            alt={`En esta Navidad, un regalo especial te daré, Adivina quién soy, y mi secreto revelaré.`}
            priority={true}
            className={`w-auto`}
          />
        </div>
        <div className={`flex min-h-screen flex-col items-center justify-evenly p-12`}>
          <div className={`text-center`}>
            <h1 className={`text-3xl font-bold mb-2 drop-shadow`}>¿Todavía no adivinaste?</h1>
            <h3 className={`text-sm drop-shadow`}>Dale click al botón y vas a ver quien soy</h3>
          </div>
          <div className={`flex items-center flex-wrap justify-center drop-shadow`}>
            <Link href="/reveal" className={`bg-white text-black py-1 px-12 rounded mb-2`}>Revelar</Link>
          </div>
        </div>
    </>
  )
}
