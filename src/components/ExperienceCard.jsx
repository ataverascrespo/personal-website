import React, { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";

const ExperienceCard = ({ positionTitle, positionDates, companyTitle, companyImage, companyImageAlt }) => {
    useEffect(() => {
        const callback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate-slideInUp");
                }
            });
        };

        const observer = new IntersectionObserver(callback);
        document.querySelectorAll(".slideIn").forEach((target) => {
            observer.observe(target);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="relative group w-full h-full flex flex-col items-center" slot="experience">
            <Card className="dark:bg-neutral-800 w-full h-full shadow-md hover:shadow-xl py-12 group-hover:blur-sm group-hover:scale-[0.98] group-hover:duration-600 duration-300 text-center">
                <div className="w-full h-full flex flex-col items-center justify-center gap-2 tracking-tight">
                    <img className="object-cover w-48 xl:w-72" src={companyImage} alt={companyImageAlt} />
                    <p className="w-full text-xl tracking-tighter xxs:text-2xl md:text-3xl font-semibold text-center">
                        {companyTitle}
                    </p>
                </div>
                <p className="text-sm text-neutral-600">Hover/click for more info</p>
            </Card>

            <div class="absolute dark:bg-neutral-700 shadow-xl rounded-md -bottom-[325px] w-full p-6 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-300 duration-300 text-center ">
                <p className="text-base xxs:text-lg md:text-xl xl:text-2xl font-bold">{positionTitle}</p>
                <p className="text-sm md:text-base xl:text-lg text-neutral-200">{positionDates}</p>
            </div>

        </div>
    );
};

export default ExperienceCard;
