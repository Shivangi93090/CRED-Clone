import { useEffect } from "react";
import BrandCarousel from "../components/BrandCarousal";
import Branding from "../components/Branding";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../redux/actions/userActions";

const HomeScreen = () => {
  return (
    <>
      <Branding />
      {/* <BrandCarousel /> */}
    </>
  );
};

export default HomeScreen;
