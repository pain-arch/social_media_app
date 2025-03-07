import { COLORS } from '@/constants/theme'
import { styles } from '@/styles/auth.css'
import { useSSO } from '@clerk/clerk-expo'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { View, Text, Image, TouchableOpacity } from 'react-native'

export default function Login() {

    const { startSSOFlow } = useSSO(); // Clerk SSO Hook
    const router = useRouter();

    const handleGoogleSignIn = async () => {
        // Implement Google Sign In
        try {
            const { createdSessionId, setActive } = await startSSOFlow({ strategy: "oauth_google" });

            console.log("createdSessionId", createdSessionId);
            
            if (setActive && createdSessionId) {
                setActive({ session: createdSessionId })
                router.push("/(tabs)");
            }
        }
        catch (error) {
            console.log("Error signing in with Google", error);
        }
    }

    return (
        <View style={styles.container}>

            {/* Brand Section */}
            <View style={styles.brandSection}>
                <View style={styles.logoContainer}>
                    <Ionicons name='leaf' size={32} color={COLORS.primary} />
                </View>
                <Text style={styles.appName}>Spotlight</Text>
                <Text style={styles.tagline}>don't miss anything</Text>
            </View>

            {/* Illustration */}
            <View style={styles.illustrationContainer}>
                <Image
                    source={require('../../assets/images/auth-bg-2.png')}
                    style={styles.illustration}
                    resizeMode='cover'
                />
            </View>

            {/* Login Section */}
            <View style={styles.loginSection}>
                <TouchableOpacity
                    style={styles.googleButton}
                    onPress={handleGoogleSignIn}
                    activeOpacity={0.9}
                >
                    <View style={styles.googleIconContainer}>
                        <Ionicons name="logo-google" size={20} color={COLORS.surface} />
                    </View>
                    <Text style={styles.googleButtontext}>Continue with Google</Text>
                </TouchableOpacity>
                <Text style={styles.termsText}>
                    By continuing, you agree to our Terms and Privacy Policy
                </Text>
            </View>
        </View>
    )
}