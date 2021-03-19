import { MouseEvent } from 'react';

const getSoundPlayerTimelineMousePosition = (event: MouseEvent<HTMLDivElement>): { width: number, left: number } => {
  const { currentTarget, pageX } = event;
  const { offsetWidth } = currentTarget;
  const left = currentTarget.getBoundingClientRect().left;

  return {
    width: offsetWidth,
    left: pageX - left
  };
};

export { getSoundPlayerTimelineMousePosition };
