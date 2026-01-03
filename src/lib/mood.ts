export type Mood = "dawn" | "flow" | "golden" | "midnight";

export interface MoodConfig {
  name: string;
  description: string;
  hours: [number, number]; // [start, end) in 24h format
}

export const MOOD_CONFIGS: Record<Mood, MoodConfig> = {
  dawn: {
    name: "Dawn",
    description: "Morning energy",
    hours: [6, 11],
  },
  flow: {
    name: "Flow",
    description: "Deep focus",
    hours: [11, 17],
  },
  golden: {
    name: "Golden",
    description: "Afternoon calm",
    hours: [17, 20],
  },
  midnight: {
    name: "Midnight",
    description: "Late night grinding",
    hours: [20, 6], // Wraps around midnight
  },
};

export function getMoodForHour(hour: number): Mood {
  // Normalize hour to 0-23
  const h = ((hour % 24) + 24) % 24;

  if (h >= 6 && h < 11) return "dawn";
  if (h >= 11 && h < 17) return "flow";
  if (h >= 17 && h < 20) return "golden";
  return "midnight";
}

export function getCurrentMood(): Mood {
  const now = new Date();
  return getMoodForHour(now.getHours());
}

export function getGreeting(mood: Mood): string {
  switch (mood) {
    case "dawn":
      return "Good morning";
    case "flow":
      return "Let's focus";
    case "golden":
      return "Good afternoon";
    case "midnight":
      return "Burning the midnight oil";
  }
}

export function getMotivationalMessage(
  mood: Mood,
  tasksRemaining: number
): string {
  if (tasksRemaining === 0) {
    return "You're all caught up. Take a moment to breathe.";
  }

  if (tasksRemaining === 1) {
    return "Just one task left. You've got this.";
  }

  switch (mood) {
    case "dawn":
      return `${tasksRemaining} tasks to conquer today. Start with a quick win.`;
    case "flow":
      return `${tasksRemaining} tasks in your orbit. Deep work time.`;
    case "golden":
      return `${tasksRemaining} tasks remaining. Wrap up what matters.`;
    case "midnight":
      return `${tasksRemaining} tasks left. Pace yourself, night owl.`;
  }
}
