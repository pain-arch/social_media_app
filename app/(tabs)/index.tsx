import { FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/feed.css";
import { useAuth } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Loader } from "@/components/Loader";
import Post from "@/components/Post";
import { STORIES } from "@/constants/mock-data";
import Story from "@/components/Story";
import { Image } from "expo-image";

export default function Index() {

  const { signOut } = useAuth();

  const posts = useQuery(api.posts.getFeedPosts);


  if (posts === undefined) return <Loader />
  if (posts?.length === 0) return <NoPostsFound />

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>spotlight</Text>
        <TouchableOpacity onPress={() => signOut()}>
          <Ionicons name="log-out-outline" size={24} color={COLORS.white} />
        </TouchableOpacity>
      </View>

      <Image />

      <FlatList
        data={posts}
        renderItem={({ item }) => <Post post={item} />}
        keyExtractor={(item) => item._id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}
        ListHeaderComponent={<StorieSection />}
      />

    </View>
  );
}

const StorieSection = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={true}
      style={styles.storiesContainer}
    >
      {
        STORIES.map((story) => (
          <Story key={story.id} story={story} />
        ))
      }
    </ScrollView>
  )
}


const NoPostsFound = () => (
  <View style={{
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: "center",
    alignItems: "center",
  }}
  >
    <Text style={{ color: COLORS.primary, fontSize: 20 }}>No posts yet</Text>
  </View>
)