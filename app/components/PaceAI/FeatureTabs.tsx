"use client";
import { useState } from "react";
import styles from "./FeatureTabs.module.css";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  {
    title: "Automate Any financial process",
    description:
      "Any financial process. Any financial process, Any financial process, Any financial process, Any financial process.",
  },
  {
    title: "Data Transformation",
    description:
      "Transform your raw financial data into actionable insights and clean reports.",
  },
  {
    title: "Extract key data",
    description:
      "Automatically extract critical data points from documents, emails, or spreadsheets.",
  },
  {
    title: "Browser control",
    description:
      "Control browser interactions to automate repetitive online financial tasks.",
  },
  {
    title: "Assistance",
    description:
      "Get AI-driven assistance for decision-making, reporting, and client communication.",
  },
];

export default function FeatureTabs() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.tabContainer}>
      <div className={styles.tabsCard}>
        <div className={styles.tabNav}>
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`${styles.tabItem} ${
                activeIndex === index ? styles.active : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <h4 className={styles.tabTitle}>{tab.title}</h4>
            </div>
          ))}
        </div>

        <div className={styles.tabContent}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className={styles.tabDescriptionWrapper}
            >
              <p className={styles.tabDescription}>
                {tabs[activeIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
