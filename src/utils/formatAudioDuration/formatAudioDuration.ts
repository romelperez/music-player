const formatNumberLength = (n: number): string => {
  return n > 9 ? String(n) : `0${n}`;
};

const formatAudioDuration = (duration: number): string => {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.round(duration % 60);

  return `${formatNumberLength(minutes)}:${formatNumberLength(seconds)}`;
};

export { formatAudioDuration };
