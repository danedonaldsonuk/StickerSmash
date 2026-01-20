import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import { StyleSheet, View } from "react-native";

const placeHolderImage = require("@/assets/images/background-image.png");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
  },
  text: {
    color: "#ffffff",
  },
  button: {
    marginTop: 20,
    color: "#fff",
    textDecorationLine: "underline",
    fontSize: 20,
  },
  imageContainer: {
    flex: 1,
  },
  footContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imageSource={placeHolderImage} />
      </View>
      <View style={styles.footContainer}>
        <Button label="Choose a photo" theme="primary" />
        <Button label="Use this photo" />
      </View>
    </View>
  );
}
