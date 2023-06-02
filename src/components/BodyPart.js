import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";
import Back from "../assets/icons/body-part-back.png";
import Chest from "../assets/icons/body-part-chest.png";
import LowerArms from "../assets/icons/body-part-lowerArms.png";
import UpperArms from "../assets/icons/body-part-upperArms.png";
import LoweLegs from "../assets/icons/body-part-lowerLegs.png";
import UpperLegs from "../assets/icons/body-part-upperLegs.png";
import Cardio from "../assets/icons/body-part-cardio.png";
import Waist from "../assets/icons/body-part-waist.png";
import Shoulders from "../assets/icons/body-part-shoulders.png";
import Neck from "../assets/icons/body-part-neck.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  const bodyPartIcons = () => {
    if (item === "chest") {
      return Chest;
    } else if (item === "back") {
      return Back;
    } else if (item === "lower arms") {
      return LowerArms;
    } else if (item === "upper arms") {
      return UpperArms;
    } else if (item === "lower legs") {
      return LoweLegs;
    } else if (item === "upper legs") {
      return UpperLegs;
    } else if (item === "cardio") {
      return Cardio;
    } else if (item === "waist") {
      return Waist;
    } else if (item === "shoulders") {
      return Shoulders;
    } else if (item === "neck") {
      return Neck;
    } else {
      return Icon;
    }
  };

  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={
        bodyPart === item
          ? {
              borderTop: "4px solid #FF2625",
              background: "#fff",
              borderBottomLeftRadius: "20px",
              width: "270px",
              height: "282px",
              cursor: "pointer",
              gap: "47px",
            }
          : {
              background: "#fff",
              borderBottomLeftRadius: "20px",
              width: "270px",
              height: "282px",
              cursor: "pointer",
              gap: "47px",
            }
      }
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img
        src={bodyPartIcons()}
        alt="dumbbell"
        style={{ width: "40px", height: "40px" }}
      />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        fontFamily="Alegreya"
        color="#3A1212"
        textTransform="capitalize"
      >
        {" "}
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
