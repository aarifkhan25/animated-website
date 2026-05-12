
import  Main from "./pages/Main.jsx";
import Team from "./pages/Team.jsx";
import Company from "./pages/Company.jsx";
import Talent from "./pages/Talent.jsx";
import StartHiring from './pages/StartHiring.jsx';
import FractionalTalent from './pages/FractionalTalent.jsx';
import ChooseUs from './pages/ChooseUs.jsx';
import YourExpectations from './pages/YourExpectations.jsx';
import HireFractionally from './pages/HireFractionally.jsx';
import Quesitons from "./pages/Quesitons.jsx";
export default function Home() {
 
  return (
    <>
      {/* // hero section */}
     <Main></Main>

      {/* //team section */}
      <Team></Team>

      {/* //Company section */}
     <Company></Company>

      {/* //talent section */}
     <Talent></Talent>

    {/* start hiring */}
    <StartHiring></StartHiring>

{/* FractionalTalent */}
<FractionalTalent></FractionalTalent>

{/* why choose us */}
    <ChooseUs></ChooseUs>

{/* your expectations */}
    <YourExpectations></YourExpectations>

{/* hire Fractionally */}
<HireFractionally></HireFractionally>

{/* questions */}
<Quesitons></Quesitons>
    </>
    
  );
}
