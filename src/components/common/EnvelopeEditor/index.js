import React from 'react';
import styles from './styles.module.css';
import Slider from '../Slider';

const ASSUMED_SUSTAIN_TIME = 1.0;

const MAX_DURATION = 2.0;
const MAX_AMPLITUDE = 1.0;

const sliderValueToDuration = (input) => {
  return (input / 100.0) * MAX_DURATION;
};

const sliderValueToAmplitude = (input) => {
  return (input / 100.0) * MAX_AMPLITUDE;
};

const durationToSliderValue = (input) => {
  return (input / MAX_DURATION) * 100;
};

const amplitudeToSliderValue = (input) => {
  return (input / MAX_AMPLITUDE) * 100;
};

const EnvelopeEditor = ({ envelope, onChange }) => {
  const totalEnvelopeDuration = envelope.attack + envelope.decay + envelope.release + ASSUMED_SUSTAIN_TIME;

  const attackLength = envelope.attack / totalEnvelopeDuration;
  const decayLength = envelope.decay / totalEnvelopeDuration;
  const sustainLength = ASSUMED_SUSTAIN_TIME / totalEnvelopeDuration;

  return (
    <div className={styles.container}>
      <Slider
        label="A"
        value={durationToSliderValue(envelope.attack)}
        min={1}
        max={100}
        onChange={e => onChange({ ...envelope, attack: sliderValueToDuration(e.target.value)})}
      />

      <Slider
        label="D"
        value={durationToSliderValue(envelope.decay)}
        min={1}
        max={100}
        onChange={e => onChange({ ...envelope, decay: sliderValueToDuration(e.target.value)})}
      />

      <Slider
        label="S"
        value={amplitudeToSliderValue(envelope.sustain)}
        min={1}
        max={100}
        onChange={e => onChange({ ...envelope, sustain: sliderValueToAmplitude(e.target.value)})}
      />

      <Slider
        label="R"
        value={durationToSliderValue(envelope.release)}
        min={1}
        max={100}
        onChange={e => onChange({ ...envelope, release: sliderValueToDuration(e.target.value)})}
      />

      <svg viewBox="-0.1 -0.1 1.2 1.2">
        <rect x={-0.1} y={-0.1} width={1.2} height={1.2} fill="#000000" />
        <line x1={0} y1={1} x2={attackLength} y2={0} stroke="#fffad5" strokeWidth={0.01} />
        <line x1={attackLength} y1={0} x2={attackLength + decayLength} y2={1 - envelope.sustain} stroke="#fffad5" strokeWidth={0.01} />
        <line x1={attackLength + decayLength} y1={1 - envelope.sustain} x2={attackLength + decayLength + sustainLength} y2={1 - envelope.sustain} stroke="#fffad5" strokeWidth={0.01} />
        <line x1={attackLength + decayLength + sustainLength} y1={1 - envelope.sustain} x2={1} y2={1} stroke="#fffad5" strokeWidth={0.01} />
      </svg>
    </div>
  )
};

export default EnvelopeEditor;
