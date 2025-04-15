import { View, Text, ScrollView } from 'react-native'
import { styles } from "../../styles/feed.css";
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { Loader } from '@/components/Loader';
import { COLORS } from '@/constants/theme';
import { Image } from 'expo-image';

export default function Booksmarks() {

  const bookmarkedPosts = useQuery(api.bookmarks.getBookmarkedPosts);

  if (bookmarkedPosts === undefined) return <Loader />
  if (bookmarkedPosts.length === 0) return <NoBooksFound />

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Booksmarks</Text>
      </View>

      <ScrollView
        contentContainerStyle={{
          padding: 8,
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >

        {
          bookmarkedPosts.map((post) => {
            if (!post) return null;
            return (
              <View key={post?._id} style={{ width: "33.33%", padding: 1}}>
                <Image
                  source={post?.imageUrl}
                  style={{width: "100%", aspectRatio: 1}}
                  contentFit="cover"
                  transition={200}
                  cachePolicy="memory-disk"

                  />
              </View>
            )
          })
        }
      </ScrollView>
    </View>
  )
}

function NoBooksFound() {
  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: COLORS.background,
    }}>
      <Text style={{ color: COLORS.primary, fontSize: 22 }}>No bookmarks found</Text>
    </View>
  )
}