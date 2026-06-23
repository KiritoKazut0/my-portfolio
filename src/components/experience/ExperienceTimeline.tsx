import ExperienceCard from "./ExperienceCard";
import { experiences } from "../../data/experiencies";


export default function ExperiencieTimeLine() {

    return (
        <div className="flex flex-col gap-0">
            {experiences.map((exp, index) => (
               <ExperienceCard key={index} experiencie={exp}/>
            ))}
        </div>
    );
}