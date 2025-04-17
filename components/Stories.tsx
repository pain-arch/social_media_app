import { STORIES } from '@/constants/mock-data'
import { styles } from '@/styles/feed.css'
import { ScrollView } from 'react-native'
import Story from './Story'


export default function StoriesSection() {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}
            style={styles.storiesContainer}>
            {
                STORIES.map((story) => (
                    <Story key={story.id} story={story}/>
                ))
            }
        </ScrollView>
    )
}