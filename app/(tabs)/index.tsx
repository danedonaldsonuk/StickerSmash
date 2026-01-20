import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      return;
    }
    alert("You did not select any image.");
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          imageSource={
            selectedImage ? { uri: selectedImage } : placeHolderImage
          }
        />
      </View>
      <View style={styles.footContainer}>
        <Button
          label="Choose a photo"
          theme="primary"
          onPress={pickImageAsync}
        />
        <Button label="Use this photo" />
      </View>
    </View>
  );
}
