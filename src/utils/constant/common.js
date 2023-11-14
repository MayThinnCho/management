import { Dimensions } from "react-native";

const Device = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
  isTablet: Dimensions.get("window").width > 600
}

const Flex = {
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  col: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  colCenter: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrap: {
    flexWrap: 'wrap',
  }
}

const ImageSize = {
  contain: {
    width: "100%",
    height: "100%",
    resizeMode: 'contain',
  },
  cover: {
    width: "100%",
    height: "100%",
    resizeMode: 'cover',
  }
}

export default common = { Device, Flex, ImageSize }