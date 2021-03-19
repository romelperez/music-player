import { formatAudioDuration } from './formatAudioDuration';

test('Should return pairs of minutes and seconds under 1 minute with single digits and double digis', () => {
  expect(formatAudioDuration(0)).toBe('00:00');
  expect(formatAudioDuration(4)).toBe('00:04');
  expect(formatAudioDuration(45)).toBe('00:45');
});

test('Should return pairs of minutes and seconds over 1 minute with single digits and double digis', () => {
  expect(formatAudioDuration(60 + 15)).toBe('01:15');
  expect(formatAudioDuration((60 * 25) + 7)).toBe('25:07');
  expect(formatAudioDuration((60 * 72) + 39)).toBe('72:39');
});
