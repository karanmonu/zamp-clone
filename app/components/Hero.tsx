"use client";
import * as React from "react";
import Image from "next/image";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.contentColumn}>
        <div className={styles.content}>
          <h1 className={styles.heading}>Finance without friction.</h1>
          <div className={styles.textContainer}>
            <p className={styles.description}>
              AI that works for you, not around you. Zamp gives modern finance
              teams the power to move fast, stay in control, and stay ahead.
            </p>
            <button className={styles.ctaButton} aria-label="Let's Talk">
              Let's Talk
            </button>
          </div>
        </div>
      </div>
      <div className={styles.imageColumn}>
        <Image
          src="/assets/cheetah.png"
          alt="Finance illustration"
          className={styles.image}
          width={800}
          height={415}
          priority
        />
      </div>
    </section>
  );
}
