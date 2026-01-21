import { Image } from "expo-image";
import { ImageSourcePropType, StyleSheet } from "react-native";

type Props = {
  imageSource: ImageSourcePropType;
};

// ImageViewer component that displays the selected image.
export default function ImageViewer({ imageSource }: Readonly<Props>) {
  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
