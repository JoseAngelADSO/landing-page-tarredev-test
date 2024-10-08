import { Phone } from "lucide-react";

import { dataAboutMe, dataSlider } from "@/data";

import Title from "./shared/title";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Button } from "./ui/button";
import Image from "next/image";

const AboutMe = () => {
    return (
        <div className="p-6 md:px-12 md:py-30 max-w-5xl mx-auto" id="about-me">
            <Title title="Sobre mi" subtitle="Conóceme" />

            <div className="grid md:grid-cols-2">
                <div className="py-12 md:py-0 flex items-center justify-center">
                    {/* CAROUSEL */}
                    <Carousel
                        opts={{
                            align: "start"
                        }}
                        orientation="vertical"
                        className="w-full max-w-xs h-fit"
                    >
                        <CarouselContent className="-mt-1 h-[200px]">
                            {dataSlider.map((data) => (
                                <CarouselItem key={data.id}>
                                    <div className="flex items-center justify-center">
                                        <Image
                                            src={data.url}
                                            alt="Image"
                                            width={250} height={400}
                                            className="w-full h-auto rounded-lg" />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
                <div>
                    <div className="grid md:grid-cols-3 mt-7 gap-4"
                    >
                        {dataAboutMe.map((data) => (
                            <div key={data.id} className="border border-white-10 
                        rounded-xl p-4 shadow-md shadow-slate-100 dark:bg-slate-800">
                                {data.icon}
                                <p className="my-2">{data.name}</p>
                                <p className="text-gray-400">{data.description}</p>
                            </div>
                        ))}
                    </div>
                    <p className="my-8"> Soy un programador junior entusiasta con una sólida base en lenguajes de programación como HTML/CSS. Me apasiona el desarrollo web y tengo experiencia en la creación de aplicaciones interactivas y sitios responsivos. A lo largo de mis estudios y proyectos personales, he aprendido a trabajar con frameworks como React y Angular, así como a implementar buenas prácticas de codificación y control de versiones utilizando Git.

Soy un aprendiz rápido y disfruto resolver problemas complejos, buscando constantemente oportunidades para mejorar mis habilidades. Me considero un buen comunicador y un jugador de equipo, siempre dispuesto a colaborar y aprender de mis colegas. Mi objetivo es contribuir a proyectos innovadores y seguir creciendo profesionalmente en el campo del desarrollo de software..</p>

                    <Button>
                        <Phone size={20} className="mr-2" />Hablamos
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;