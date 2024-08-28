import { useContext } from "react";
import { NavBar } from "../NavBar"
import { AboutUs } from "./AboutUs"
import { Hero } from "./Hero"
import { Leadership } from "./Leadership"
import { Mission } from "./Mission"
import { Qualifications } from "./Qualification"

import { UserContext } from "../../UserContext";

export const AboutPage = () =>{
    const { ministry, loading, error } = useContext(UserContext);

    return(
        <div>
            <Hero name={ministry.ministryDetails.name} />
            <Mission mission={ministry.ministryDetailsTwo.mission} vision={ministry.ministryDetailsTwo.vision} />
            <AboutUs about={ministry.ministryDetailsTwo.about} />
            <Leadership leader={ministry.commissionerDetails} />
            <Qualifications achievements={ministry.commissionerDetails.achievements} professional={ministry.commissionerDetails.professional} />
        </div>
    )
}