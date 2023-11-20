import { StatusBar } from "expo-status-bar";
import {
	ScrollView,
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function App() {
	return (
		<>
			<ScrollView
				contentContainerStyle={styles.container}
				style={styles.scrollView}>
				<View style={styles.header}>
					<Image source={require("./assets/logo.png")} style={styles.img} />
				</View>
				<View style={styles.container}>
					<View style={styles.block_1}>
						<View style={styles.block_container}>
							<Text style={styles.title}>Interstellar</Text>
							<View style={styles.subtitle}>
								<Text style={styles.subtitle_text}>2014</Text>
								<Text style={styles.subtitle_text}>PG-13</Text>
								<Text style={styles.subtitle_text}>2h 49min</Text>
								<Text style={styles.subtitle_text}>
									Adventure, Drama, Sci-Fi
								</Text>
							</View>
							<View style={styles.film}>
								<Image
									source={require("./assets/film.jpg")}
									style={styles.img_film}></Image>
								<View style={styles.description}>
									<Text style={styles.description_text}>
										A team of explorers travel through a wormhole in space in an
										attempt to ensure humanity's survival.
									</Text>
									<TouchableOpacity
										style={styles.btn}
										activeOpacity={0.8}
										onPress={() => {
											console.log("pressed !");
										}}>
										<Text style={styles.btnText}>+ ADD TO WATCHLIST</Text>
									</TouchableOpacity>
								</View>
							</View>
							<View style={styles.rating}>
								<View style={styles.rate}>
									<FontAwesome name="star" size={24} color="#E6B91E" />
									<Text style={styles.rate_text}>
										<Text style={[styles.star, styles.rate_text_bold]}>
											8.6
										</Text>
										/10
									</Text>
									<Text style={styles.sub_text}>1.1M</Text>
								</View>
								<View style={[styles.rate, styles.rate_this]}>
									<FontAwesome name="star-o" size={24} color="white" />
									<Text style={[styles.rate_text, styles.rate_text_bold]}>
										RATE THIS
									</Text>
								</View>
								<View style={[styles.rate, styles.rating_metascore]}>
									<Text style={styles.rate_metascore}>74</Text>
									<Text style={styles.rate_text}>Metascore</Text>
									<Text style={styles.sub_text}>46 critic reviews</Text>
								</View>
							</View>
						</View>
					</View>
					<View style={styles.block_2}>
						<View style={styles.block_container}>
							<View style={styles.block_2_header}>
								<Text style={styles.block_2_title}>Top Billed Cast</Text>
								<Text style={styles.block_2_lien}>SEE ALL</Text>
							</View>
							<View style={styles.block_2_diapo}>
								<ScrollView
									horizontal={true}
									showsHorizontalScrollIndicator={false}>
									<View style={styles.card}>
										<Image
											source={require("./assets/matthew.jpg")}
											style={styles.card_img}></Image>
										<View style={styles.card_character}>
											<Text numberOfLines={1} style={styles.card_name}>
												Matthew McConaughey
											</Text>
											<Text style={styles.card_role}>Cooper</Text>
										</View>
									</View>
									<View style={styles.card}>
										<Image
											source={require("./assets/anne.jpg")}
											style={styles.card_img}></Image>
										<View style={styles.card_character}>
											<Text style={styles.card_name}>Anne Hathaway</Text>
											<Text style={styles.card_role}>Brand</Text>
										</View>
									</View>
									<View style={styles.card}>
										<Image
											source={require("./assets/jessica.jpg")}
											style={styles.card_img}></Image>
										<View style={styles.card_character}>
											<Text style={styles.card_name}>Jessica Ch</Text>
											<Text style={styles.card_role}>Murph</Text>
										</View>
									</View>
									<View style={styles.card}>
										<Image
											source={require("./assets/mackenzie.jpg")}
											style={styles.card_img}></Image>
										<View style={styles.card_character}>
											<Text style={styles.card_name}>Mackenzie</Text>
											<Text style={styles.card_role}>Mackenzie</Text>
										</View>
									</View>
								</ScrollView>
							</View>
							<View style={styles.credits}>
								<Text style={styles.credits_title}>Director</Text>
								<Text style={styles.credits_name}>Christopher Nolan</Text>
							</View>
							<View style={styles.credits}>
								<Text style={styles.credits_title}>Writters</Text>
								<Text style={styles.credits_name}>
									Jonathan Nolan (written by) and Christopher Nolan (written by)
								</Text>
							</View>
						</View>
					</View>
				</View>

				<StatusBar style="auto" />
			</ScrollView>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#191919",
	},
	header: {
		backgroundColor: "#393939",
		height: 47,
	},
	scrollView: {
		marginTop: Constants.statusBarHeight,
	},
	img: {
		width: 50,
		height: 50,
		marginLeft: 10,
		resizeMode: "contain",
	},
	block_1: {
		backgroundColor: "#212121",
		height: 325,
	},
	block_container: {
		marginLeft: 10,
		marginRight: 10,
	},
	title: {
		color: "#fff",
		fontSize: 30,
		marginTop: 10,
	},
	subtitle: {
		marginTop: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		width: "80%",
	},
	subtitle_text: {
		color: "#fff",
		fontSize: 12,
	},
	film: {
		flexDirection: "row",
	},
	img_film: {
		width: 100,
		height: 140,
		marginTop: 20,
	},
	description: { marginLeft: 15 },
	description_text: {
		width: "40%",
		color: "#fff",
		fontSize: 12,
		lineHeight: 17,
		marginTop: 20,
	},
	btn: {
		backgroundColor: "#1F77BD",
		marginTop: 20,
		padding: 10,
		borderRadius: 5,
		width: "45%",
	},
	btnText: {
		color: "#fff",
		fontSize: 12,
		textAlign: "center",
		fontWeight: "bold",
	},
	rating: {
		flexDirection: "row",
		justifyContent: "center",
		marginTop: 20,
	},
	rate: {
		alignItems: "center",
		width: "33%",
	},
	rate_text: {
		color: "#fff",
		fontSize: 12,
		textAlign: "center",
		marginTop: 5,
	},
	rate_text_bold: {
		fontWeight: "bold",
		color: "#fff",
	},
	star: {
		fontSize: 15,
	},
	sub_text: {
		color: "#747474",
		fontSize: 10,
		textAlign: "center",
		marginTop: 2,
	},
	rate_metascore: {
		color: "#fff",
		fontSize: 15,
		backgroundColor: "#62C74F",
		textAlign: "center",
		marginTop: 5,
		padding: 1,
	},
	block_2: {
		marginTop: 15,
		marginBottom: 20,
		backgroundColor: "#212121",
	},
	block_2_header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: 18,
		marginBottom: 18,
	},
	block_2_title: {
		color: "#fff",
		fontSize: 22,
	},
	block_2_lien: {
		color: "#2BA1EA",
		fontSize: 12,
		fontWeight: "bold",
	},

	block_2_diapo: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	card: {
		marginRight: 6,
		width: 140,
	},
	card_img: {
		width: 140,
		height: 190,
		resizeMode: "cover",
	},
	card_character: {
		paddingTop: 10,
		paddingBottom: 10,
		backgroundColor: "#2A2A2A",
	},
	card_name: {
		color: "#fff",
		fontSize: 12,
		marginLeft: 10,
		marginRight: 25,
	},
	card_role: {
		color: "#A1A1A1",
		fontSize: 12,
		marginLeft: 10,
		marginRight: 25,
	},
	credits: {
		marginTop: 15,
	},
	credits_title: {
		color: "#fff",
		fontSize: 14,
	},
	credits_name: {
		color: "#A1A1A1",
		fontSize: 12,
	},
});
