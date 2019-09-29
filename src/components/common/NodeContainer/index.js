import React, { useState } from 'react';
import { DraggableCore } from 'react-draggable';
import styles from './styles.module.css';
import Box from '../Box';
import Pylon from '../Pylon';

const NodeContainer = ({ initialXPos, initialYPos, children, title, onClickInput, onClickOutput }) => {
  const [pos, setPos] = useState({ x: initialXPos, y: initialYPos });

  return (
    <DraggableCore
      handle={`.${styles.topBar}`}
      onDrag={(e, data) =>
        setPos({ x: pos.x + data.deltaX, y: pos.y + data.deltaY })
      }
    >
      <div className={styles.container} style={{ left: pos.x, top: pos.y }}>
        <div className={styles.inputOutputsContainer}>
          { onClickInput ? <Pylon onClick={onClickInput} /> : null }
          <div className={styles.spacer} />
          { onClickOutput ? <Pylon onClick={onClickOutput} /> : null }
        </div>
        <Box>
          <div className={styles.topBar}>
            <p className={styles.title}>{title}</p>
          </div>
          {children}
        </Box>
      </div>
    </DraggableCore>
  );
};

NodeContainer.defaultProps = {
  title: '',
  initialXPos: 0,
  initialYPos: 0,
  onClickInput: null,
  onClickOutput: null,
};

export default NodeContainer;
