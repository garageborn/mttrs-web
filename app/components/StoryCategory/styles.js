import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "text": {
        "fontSize": 0.7,
        "marginTop": 0.3,
        "color": "#999  &:hover {    text-decoration: underline"
    }
});