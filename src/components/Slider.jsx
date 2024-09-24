import { Carousel } from "react-responsive-3d-carousel";
import ExperienceCard from "./ExperienceCard";

export default function Slider(props) {
  return (
    <Carousel width="275px" showStatus={false} depth={4} autoPlay={false} transitionTime={500} spread={"wide"} client:only="react">
        <ExperienceCard
            companyTitle="Nasdaq Verafin"
            positionTitle="Software Developer"
            positionDates="Aug 2024 - Present"
            companyImage="/experience/nasdaq.png"
            companyImageAlt="Daystar Limited"
        />

        <ExperienceCard
            companyTitle="Government of Ontario"
            positionTitle="Software/DevOps Developer"
            positionDates="Aug 2023 - Aug 2024"
            companyImage="/experience/OntarioGov.png"
            companyImageAlt="Government of Ontario"
        />
        
        <ExperienceCard
            companyTitle="Daystar Limited"
            positionTitle="Software Developer Intern"
            positionDates="Apr 2022 - Aug 2023"
            companyImage="/experience/Daystar.png"
            companyImageAlt="Daystar Limited"
        />
    </Carousel>

  );
}