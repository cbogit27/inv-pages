import InvestmentCard from "./components/inv-card";
import InvestmentHeroPage from "./components/inv-hero";
import InvestmentTextImage from "./components/inv-image-text";
import InvestmentText from "./components/inv-text";

export default function InvestmentPage(){
    return (
        <>
            <InvestmentHeroPage/>
            <InvestmentText/>
            <InvestmentCard/>
            <InvestmentTextImage/>
        </>
    )
}