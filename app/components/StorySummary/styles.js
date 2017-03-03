import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "@value notSmall from \"//styles/media-queriescss\";container": {
        "lostCenter": 45.5,
        "marginBottom": 0.625
    },
    "triangle": {
        "width": 0,
        "height": 0,
        "background": "transparent",
        "borderLeft": "7px solid transparent",
        "borderRight": "7px solid transparent",
        "borderBottom": "8px solid",
        "position": "absolute"
    },
    "triangleContainer": {
        "position": "absolute",
        "zIndex": 1,
        "marginLeft": 0.9375
    },
    "outerTriangle": {
        "composes": "triangle",
        "borderBottomColor": "#DDDDDD"
    },
    "innerTriangle": {
        "composes": "triangle",
        "marginTop": 1,
        "borderBottomColor": "#F7F7F8"
    },
    "box": {
        "position": "relative",
        "marginTop": 8,
        "paddingTop": 0.9375,
        "paddingRight": 0.9375,
        "paddingBottom": 0.9375,
        "paddingLeft": 0.9375,
        "borderRadius": 5,
        "backgroundColor": "#F7F7F8",
        "border": "1px solid #DDDDDD"
    },
    "boxNotExpanded": {
        "composes": "box",
        "maxHeight": 10,
        "overflow": "hidden"
    },
    "headlineContainer": {
        "display": "flex",
        "flexFlow": "row"
    },
    "logoContainer": {
        "marginTop": 0.625,
        "marginRight": 0.3125
    },
    "headline": {
        "color": "#666666",
        "fontSize": 1,
        "fontWeight": "500",
        "marginTop": 5,
        "paddingLeft": 5
    },
    "text": {
        "fontSize": 0.875,
        "lineHeight": 1.4375,
        "opacity": 0.95,
        "color": "#666",
        "paddingBottom": 1
    },
    "footer": {
        "position": "absolute",
        "bottom": 0,
        "left": 0,
        "right": 0,
        "width": "100%",
        "zIndex": 1
    },
    "footerWithGradient": {
        "composes": "footer",
        "height": 4
    },
    "gradient": {
        "height": 2,
        "background": "linear-gradient(-180deg, rgba(247, 247, 248, 0.2) 0%, #F7F7F8 100%)"
    },
    "button": {
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center",
        "flexFlow": "row",
        "background": "#F7F7F8",
        "fontSize": 0.8125,
        "fontWeight": "500",
        "color": "#2D2D2B",
        "cursor": "pointer",
        "height": 2,
        "borderBottomLeftRadius": 5,
        "borderBottomRightRadius": 5
    },
    "buttonText": {
        "marginRight": 0.5
    },
    "expandButtonTriangle": {
        "composes": "triangle",
        "borderLeft": "5px solid transparent",
        "borderRight": "5px solid transparent",
        "marginTop": 7,
        "marginRight": 3,
        "marginBottom": 7,
        "marginLeft": 3,
        "position": "relative"
    },
    "showMoreTriangle": {
        "composes": "expandButtonTriangle",
        "borderBottom": 0,
        "borderTop": "5px solid #2D2D2B"
    },
    "showLessTriangle": {
        "composes": "expandButtonTriangle",
        "borderBottom": "5px solid #2D2D2B"
    }
});