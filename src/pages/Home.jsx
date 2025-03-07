import Footer from "../component/Footer";
import Header from "../component/Header";
import LearnMoreBaner from "../component/LearnMoreBaner";
import Specialisation from "../component/specialisation";
import TopDoctors from "../component/TopDoctors";

function Home() {
  return (
    <div>
      <Header />
      <Specialisation />
      <TopDoctors />
      <LearnMoreBaner />
    </div>
  );
}

export default Home;
