import React, { useMemo, useState } from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";

/**
 * QUICK CUSTOMIZE:
 * - Change imageUrl, fullName, aboutMe, funFact to your own info.
 */
const imageUrl =
  "https://michael-portfolio-flax.vercel.app/static/media/my.c9b7915463da031be76c.png"; // sample avatar
const fullName = "Michael Chinemelu";
const aboutMe =
  "Frontend developer (React/React Native). I love building clean UIs and teaching programming.";
const funFact =
  "I can debug Tailwind classes faster than I can find my TV remote.";

export default function App() {
  // UI state
  const [showAbout, setShowAbout] = useState(true); // toggles About vs Fun Fact
  const [isDark, setIsDark] = useState(false); // theme switch

  // Theme palette (kept tiny & readable)
  const theme = useMemo(
    () =>
      isDark
        ? {
            name: "dark",
            bg: "#0b1220",
            card: "#121a2a",
            text: "#eef2ff",
            subText: "#cbd5e1",
            accent: "#5b9cff",
            border: "#1f2a44",
            switchTrackOn: "#3b475d",
            switchTrackOff: "#cbd5e1",
            switchThumb: "#f8fafc",
          }
        : {
            name: "light",
            bg: "#f5f7fb",
            card: "#ffffff",
            text: "#0b1220",
            subText: "#475569",
            accent: "#2563eb",
            border: "#e2e8f0",
            switchTrackOn: "#93c5fd",
            switchTrackOff: "#cbd5e1",
            switchThumb: "#ffffff",
          },
    [isDark]
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.bg }]}>
      <StatusBar
        barStyle={isDark ? "light-content" : "dark-content"}
        backgroundColor={theme.bg}
      />

      {/* Header row: title + theme switch */}
      <View style={styles.headerRow}>
        <Text style={[styles.appTitle, { color: theme.text }]}>
          Personal Info Card
        </Text>

        <View style={styles.switchRow}>
          <Text style={[styles.switchLabel, { color: theme.subText }]}>
            {isDark ? "Dark" : "Light"}
          </Text>
          <Switch
            value={isDark}
            onValueChange={setIsDark}
            trackColor={{
              false: theme.switchTrackOff,
              true: theme.switchTrackOn,
            }}
            thumbColor={theme.switchThumb}
          />
        </View>
      </View>

      {/* Card */}
      <View
        style={[
          styles.card,
          {
            backgroundColor: theme.card,
            borderColor: theme.border,
          },
        ]}
      >
        <Image source={{ uri: imageUrl }} style={styles.avatar} />

        <Text style={[styles.name, { color: theme.text }]}>{fullName}</Text>

        <Text style={[styles.sectionLabel, { color: theme.subText }]}>
          {showAbout ? "About Me" : "Fun Fact"}
        </Text>

        <Text style={[styles.bodyText, { color: theme.text }]}>
          {showAbout ? aboutMe : funFact}
        </Text>

        <Pressable
          onPress={() => setShowAbout((s) => !s)}
          style={({ pressed }) => [
            styles.button,
            {
              backgroundColor: theme.accent,
              opacity: pressed ? 0.85 : 1,
              shadowColor: isDark ? "#000" : theme.accent,
            },
          ]}
        >
          <Text style={styles.buttonText}>
            {showAbout ? "Show Fun Fact" : "Show About Me"}
          </Text>
        </Pressable>
      </View>

    </SafeAreaView>
  );
}

const AVATAR_SIZE = 120;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 8,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  appTitle: {
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 0.3,
  },
  switchRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  switchLabel: {
    fontSize: 14,
  },
  card: {
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    alignItems: "center",

    
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    
    elevation: 3,
  },
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    marginBottom: 14,
  },
  name: {
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 6,
  },
  sectionLabel: {
    fontSize: 13,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginTop: 4,
    marginBottom: 6,
  },
  bodyText: {
    fontSize: 15,
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 16,
  },
  button: {
    width: "100%",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",

    
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
   
    elevation: 2,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 15,
  },
  footer: {
    textAlign: "center",
    marginTop: 18,
    fontSize: 13,
  },
});
