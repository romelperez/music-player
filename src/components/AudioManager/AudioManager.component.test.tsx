import React, { FC, Component } from 'react';
import { render } from '@testing-library/react';

import { AudioManager } from './AudioManager.component';

test('should render audio component with classname "audio-manager", and with the audio URL', () => {
  let propsReceived: any;
  class AudioComponent extends Component {
    render () {
      propsReceived = this.props;
      return null;
    }
    pause () {}
    play () {}
  }
  const setIsLoading = jest.fn();
  const setIsPlaying = jest.fn();
  const setIsError = jest.fn();
  const setAudioDurationTrack = jest.fn();
  const setAudioDurationTotal = jest.fn();

  render(
    <AudioManager
      AudioComponent={AudioComponent as any}
      audioURL='abc'
      isPlaying
      setIsLoading={setIsLoading}
      setIsPlaying={setIsPlaying}
      setIsError={setIsError}
      setAudioDurationTrack={setAudioDurationTrack}
      setAudioDurationTotal={setAudioDurationTotal}
    />
  );

  expect(propsReceived.className).toMatch(/^audio-manager /);
  expect(propsReceived.src).toBe('abc');
});

test('should pause, and set time to 0 on "audioURL" change', () => {
  const pause = jest.fn();
  class AudioComponent extends Component {
    render() { return null; }
    pause() { pause(); }
    play() {}
  }
  const audioRef: any = {};
  const propsProvided: any = {
    isPlaying: true,
    AudioComponent,
    audioRef
  };

  const { rerender } = render(<AudioManager audioURL='ABC' {...propsProvided} />);

  audioRef.current.currentTime = 777;
  rerender(<AudioManager audioURL='XYZ' {...propsProvided} />);

  expect(pause).toHaveBeenCalledTimes(1);
  expect(audioRef.current.currentTime).toBe(0);
});

test('should pause if "isPlaying=false" and play if otherwise', () => {
  const pause = jest.fn();
  const play = jest.fn();
  class AudioComponent extends Component {
    render() { return null; }
    pause() { pause(); }
    play() { play(); }
  }
  const propsProvided: any = {
    audioURL: 'ABC',
    AudioComponent
  };

  const { rerender } = render(<AudioManager isPlaying={false} {...propsProvided} />);

  expect(pause).toHaveBeenCalledTimes(1);
  expect(play).toHaveBeenCalledTimes(0);

  rerender(<AudioManager isPlaying={true} {...propsProvided} />);

  expect(pause).toHaveBeenCalledTimes(1);
  expect(play).toHaveBeenCalledTimes(1);
});

test('should set initial audio state on start loading', () => {
  let propsReceived: any;
  class AudioComponent extends Component {
    render() { propsReceived = this.props; return null; }
    pause() { }
    play() { }
  }
  const setIsLoading = jest.fn();
  const setIsPlaying = jest.fn();
  const setIsError = jest.fn();
  const propsProvided: any = {
    AudioComponent,
    setIsLoading,
    setIsPlaying,
    setIsError
  };

  render(<AudioManager {...propsProvided} />);
  propsReceived.onLoadStart();

  expect(setIsLoading).toHaveBeenCalledWith(true);
  expect(setIsPlaying).toHaveBeenCalledWith(false);
  expect(setIsError).toHaveBeenCalledWith(false);
});

test('should set loading on audio waiting', () => {
  let propsReceived: any;
  class AudioComponent extends Component {
    render() { propsReceived = this.props; return null; }
    pause() { }
    play() { }
  }
  const setIsLoading = jest.fn();
  const propsProvided: any = {
    AudioComponent,
    setIsLoading
  };

  render(<AudioManager {...propsProvided} />);
  propsReceived.onWaiting();

  expect(setIsLoading).toHaveBeenCalledWith(true);
});

test('should set playing status when audio can be played', () => {
  let propsReceived: any;
  class AudioComponent extends Component {
    render() { propsReceived = this.props; return null; }
    pause() { }
    play() { }
  }
  const setIsLoading = jest.fn();
  const setIsPlaying = jest.fn();
  const setIsError = jest.fn();
  const propsProvided: any = {
    AudioComponent,
    setIsLoading,
    setIsPlaying,
    setIsError
  };

  render(<AudioManager {...propsProvided} />);
  propsReceived.onCanPlay();

  expect(setIsLoading).toHaveBeenCalledWith(false);
  expect(setIsPlaying).toHaveBeenCalledWith(true);
  expect(setIsError).toHaveBeenCalledWith(false);
});

test('should set audio times when audio data is loaded', () => {
  let propsReceived: any;
  class AudioComponent extends Component {
    render() { propsReceived = this.props; return null; }
    pause() { }
    play() { }
  }
  const setAudioDurationTrack = jest.fn();
  const setAudioDurationTotal = jest.fn();
  const propsProvided: any = {
    AudioComponent,
    setAudioDurationTrack,
    setAudioDurationTotal
  };

  render(<AudioManager {...propsProvided} />);
  propsReceived.onLoadedData({ currentTarget: { duration: 1500 } });

  expect(setAudioDurationTrack).toHaveBeenCalledWith(0);
  expect(setAudioDurationTotal).toHaveBeenCalledWith(1500);
});

test('should update current audio time when audio track is updated', () => {
  let propsReceived: any;
  class AudioComponent extends Component {
    render() { propsReceived = this.props; return null; }
    pause() { }
    play() { }
  }
  const setAudioDurationTrack = jest.fn();
  const propsProvided: any = {
    AudioComponent,
    setAudioDurationTrack
  };

  render(<AudioManager {...propsProvided} />);
  propsReceived.onTimeUpdate({ currentTarget: { currentTime: 777 } });

  expect(setAudioDurationTrack).toHaveBeenCalledWith(777);
});

test('should call "onForward" on audio end', () => {
  let propsReceived: any;
  class AudioComponent extends Component {
    render() { propsReceived = this.props; return null; }
    pause() { }
    play() { }
  }
  const onForward = jest.fn();
  const propsProvided: any = {
    AudioComponent,
    onForward
  };

  render(<AudioManager {...propsProvided} />);
  propsReceived.onEnded();

  expect(onForward).toHaveBeenCalledWith();
});

test('should set error on audio error', () => {
  let propsReceived: any;
  class AudioComponent extends Component {
    render() { propsReceived = this.props; return null; }
    pause() {}
    play() {}
  }
  const setIsError = jest.fn();
  const propsProvided: any = {
    AudioComponent,
    setIsError
  };

  render(<AudioManager {...propsProvided} />);
  propsReceived.onError();

  expect(setIsError).toHaveBeenCalledWith(true);
});
