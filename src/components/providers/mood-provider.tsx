"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { getCurrentMood, type Mood } from "@/lib/mood";

interface MoodContextValue {
  mood: Mood;
  setMood: (mood: Mood | "auto") => void;
  isAuto: boolean;
}

const MoodContext = createContext<MoodContextValue | null>(null);

export function useMood() {
  const context = useContext(MoodContext);
  if (!context) {
    throw new Error("useMood must be used within a MoodProvider");
  }
  return context;
}

interface MoodProviderProps {
  children: ReactNode;
  defaultMood?: Mood | "auto";
}

export function MoodProvider({
  children,
  defaultMood = "auto",
}: MoodProviderProps) {
  const [isAuto, setIsAuto] = useState(defaultMood === "auto");
  const [mood, setMoodState] = useState<Mood>(() =>
    defaultMood === "auto" ? getCurrentMood() : defaultMood
  );

  // Update mood based on time when in auto mode
  useEffect(() => {
    if (!isAuto) return;

    // Update immediately
    setMoodState(getCurrentMood());

    // Check every minute for mood changes
    const interval = setInterval(() => {
      setMoodState(getCurrentMood());
    }, 60000);

    return () => clearInterval(interval);
  }, [isAuto]);

  // Apply mood to document
  useEffect(() => {
    document.documentElement.setAttribute("data-mood", mood);
  }, [mood]);

  const setMood = (newMood: Mood | "auto") => {
    if (newMood === "auto") {
      setIsAuto(true);
      setMoodState(getCurrentMood());
    } else {
      setIsAuto(false);
      setMoodState(newMood);
    }
  };

  return (
    <MoodContext.Provider value={{ mood, setMood, isAuto }}>
      {children}
    </MoodContext.Provider>
  );
}
