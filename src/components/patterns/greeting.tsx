"use client";

import { motion } from "framer-motion";
import { useMood } from "@/components/providers/mood-provider";
import { getGreeting, getMotivationalMessage } from "@/lib/mood";

interface GreetingProps {
  userName?: string;
  tasksRemaining: number;
}

export function Greeting({ userName, tasksRemaining }: GreetingProps) {
  const { mood } = useMood();
  const greeting = getGreeting(mood);
  const message = getMotivationalMessage(mood, tasksRemaining);

  return (
    <motion.div
      className="mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-text-primary mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        {greeting}
        {userName && (
          <span className="text-text-secondary">, {userName}</span>
        )}
      </motion.h1>

      <motion.p
        className="text-lg text-text-secondary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {message}
      </motion.p>
    </motion.div>
  );
}
