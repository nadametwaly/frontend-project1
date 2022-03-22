import { Fragment } from "react";

import Header from "./Header";
import HomeBodyScreens from "./HomeBodyScreens";
import Slider from "./Slider";
import StartScreen from "./StartScreen";
const HomeScreen = () => {
  return (
    <Fragment>
      <StartScreen />
      <Header name="New Articles" />
      <Slider />
      <Header name="CHIPIONS" />
      <HomeBodyScreens body="A long-term educational program, focusing on the Electronics Engineering field, aiming to achieve it through a series of extensive sessions, workshops and labs, covering a wide range of specialties in the electronics field in detail, in addition to providing the necessary mentorship for the students who will participate in the program throughout its different stages." />
      <Header name="ABOUT US" />
      <HomeBodyScreens body="IEEE SSCS AlexSC is formed to meet the needs of undergraduate and postgraduate students interested in the field of fabricated integrated circuit designs and all of its related topics. Exploiting the growing interest and successive developments in the electronics field in Egypt, the chapter holds a series of events and activities that aims at providing the future electronics engineers with the knowledge and skills they need." />
    </Fragment>
  );
};

export default HomeScreen;
