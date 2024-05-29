import React from "react";
import { Ionicons } from "@expo/vector-icons";
import GridImageView from "react-native-grid-image-viewer";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

const image = {
  uri: "https://c.wallhere.com/photos/d4/d4/Star_Wars_The_Last_Jedi_Star_Wars_Kylo_Ren_movies_digital_art-1179307.jpg!d",
};

const ProfileScreen = ({ navigation }) => {
  const handleAbrirCamera = () => {
    navigation.navigate("Camera");
  };

  const handleAbrirPagamentos = () => {
    navigation.navigate("Payment");
  };

  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <View style={styles.headerContent}>
              <Image
                style={styles.avatar}
                source={{
                  uri: "https://scontent.fcac3-1.fna.fbcdn.net/v/t1.6435-9/137266356_3582997495259765_108891295063170791_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ViRTQZ_pgNMQ7kNvgFxXqry&_nc_ht=scontent.fcac3-1.fna&oh=00_AYBCR3kgDDIcywBJ_G2pJiC-G2loUA8eofrVnmG3rXmkeQ&oe=666B21FB",
                }}
              />
              <Text style={styles.name}>Alan Lenz</Text>
              <Text style={styles.arroba}>@AlanLenz</Text>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.profileDetail}>
          <View style={[styles.detailContent, { paddingRight: 10, marginRight: 5, borderRightWidth: 2, borderRightColor: "#fff" }]}>
            <Text style={styles.count}>200</Text>
            <Text style={styles.title}>Seguidores</Text>
          </View>
          <View style={styles.detailContent}>
            <Text style={styles.count}>200</Text>
            <Text style={styles.title}>Seguindo</Text>
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={handleAbrirCamera} style={[styles.buttonOne, { marginRight: 10 }]}>
                <Text style={styles.buttonOneText}>
                  <Ionicons
                    name="camera-outline"
                    size={18}
                    style={{ color: "#fff" }}
                  />
                  Tirar foto
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleAbrirPagamentos} style={styles.buttonTwo}>
                <Text style={styles.buttonTwoText}>
                  <Ionicons
                    name="checkmark-circle"
                    size={18}
                    style={{ color: "#000" }}
                  />
                  Ver planos
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.background}>
              <Text style={styles.headline_text}>Fotos</Text>
              <View style={styles.imagesGrid}>
                <GridImageView
                  data={[
                    "https://img.freepik.com/fotos-premium/por-do-sol-sobre-o-oceano-belas-paisagens-naturais_410516-12348.jpg",
                    "https://s3.wasabisys.com/instax/74/instax/2022/08/fotografias-de-paisagens-1661176157.jpeg",
                    "https://viagemeturismo.abril.com.br/wp-content/uploads/2016/12/14179421596_b95c10db10_o.jpeg?quality=90&strip=info&w=720&h=440&crop=1",
                    "https://www.submarinoviagens.com.br/bora-nessa-trip/wp-content/uploads/2021/08/Capa-8.jpg",
                    "https://img.freepik.com/fotos-premium/por-do-sol-sobre-o-oceano-belas-paisagens-naturais_410516-12348.jpg",
                    "https://s3.wasabisys.com/instax/74/instax/2022/08/fotografias-de-paisagens-1661176157.jpeg",
                    "https://viagemeturismo.abril.com.br/wp-content/uploads/2016/12/14179421596_b95c10db10_o.jpeg?quality=90&strip=info&w=720&h=440&crop=1",
                    "https://www.submarinoviagens.com.br/bora-nessa-trip/wp-content/uploads/2021/08/Capa-8.jpg",
                    "https://img.freepik.com/fotos-premium/por-do-sol-sobre-o-oceano-belas-paisagens-naturais_410516-12348.jpg",
                  ]}
                />
              </View>
            </View>
          </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#00CED1",
  },
  headerContent: {
    paddingTop: 70,
    padding: 50,
    height: 305,
    alignItems: "center",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    marginBottom: 2,
    color: "#FFFFFF",
    fontWeight: "400",
  },
  arroba: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "700",
  },
  profileDetail: {
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 275,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    backgroundColor: "#00CED1",
  },
  detailContent: {
    margin: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: "#fff",
    fontWeight: 500,
  },
  count: {
    fontSize: 18,
    fontWeight: "bold",
  },
  bodyContent: {
    alignItems: "center",
    padding: 30,
    marginTop: 40,
  },
  textInfo: {
    fontSize: 18,
    marginTop: 20,
    color: "#696969",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  buttonOne: {
    backgroundColor: "#00CED1",
    padding: 8,
    borderRadius: 10,
  },
  buttonTwo: {
    backgroundColor: "#FFF",
    padding: 8,
    borderRadius: 10,
  },
  buttonOneText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFF",
  },
  buttonTwoText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000",
  },
  description: {
    fontSize: 20,
    color: "#000",
    marginTop: 10,
    textAlign: "center",
  },
  background: {
    backgroundColor: "transparent",
  },
  headline_text: {
    color: "#000",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "600",
    marginTop: 50,
    marginBottom: 5,
    marginLeft: 20,
  },
  explore_text: {
    marginTop: 5,
    marginBottom: 10,
    color: "white",
    marginLeft: 20,
    fontSize: 12,
    fontWeight: "600",
  },
  imagesGrid: {
    flex: 1,
    width: 350,
  },
  camera: {
    flex: 1,
  },
});

export default ProfileScreen;