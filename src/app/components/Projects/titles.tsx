'use client';

import React, { useEffect, useState } from 'react';
import styles from './titles.module.scss';

interface TitlesProps {
  data: { title: string }[];
  setSelectedProject: (index: number) => void;
}

export default function Titles({ data, setSelectedProject }: TitlesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentTitle = data[currentIndex].title;
    if (charIndex < currentTitle.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + currentTitle[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100); // velocidade da digitação (ms)
      return () => clearTimeout(timeout);
    } else {
      const delayBeforeNext = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % data.length);
        setTypedText('');
        setCharIndex(0);
      }, 1200); // tempo entre palavras
      return () => clearTimeout(delayBeforeNext);
    }
  }, [charIndex, currentIndex, data]);

  useEffect(() => {
    setSelectedProject(currentIndex);
  }, [currentIndex, setSelectedProject]);

  return (
    <div className={styles.titles}>
      <div className={styles.title}>
        <div className={styles.wrapper}>
          <p className={styles.animatedText}>{typedText}</p>
          <span className={styles.cursor}></span>
        </div>
      </div>
    </div>
  );
}
