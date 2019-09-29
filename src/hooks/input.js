import { useEffect } from 'react';
import Tone from 'tone';

const keyMap = {
  'z': 'C4',
  's': 'C#4',
  'x': 'D4',
  'd': 'D#4',
  'c': 'E4',
  'v': 'F4',
  'g': 'F#4',
  'b': 'G4',
  'h': 'G#4',
  'n': 'A4',
  'j': 'A#4',
  'm': 'B4',
  ',': 'C5',
  'l': 'C#5',
  '.': 'D5',
  ';': 'D#5',
  '/': 'E5',
};

export const useInput = nodeRef => {
  useEffect(() => {
    const onKeyDown = e => {
      if (e.repeat) {
        return;
      }
      
      if (keyMap[e.key]) {
        nodeRef.current.triggerAttack(keyMap[e.key], Tone.context.currentTime);
      }

      console.log('key down ', e);
    };

    const onKeyUp = e => {
      console.log('key up ', e);
      nodeRef.current.triggerRelease(Tone.context.currentTime);

    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('keyup', onKeyUp);
    }
  }, []);
};
