import React, { useState } from 'react';
import { DraggableCore } from 'react-draggable';
import styles from './styles.module.css';
import Box from '../Box';

const DraggableBox = ({ initialXPos, initialYPos, children, title }) => {
  const [pos, setPos] = useState({x: initialXPos, y: initialYPos });

  return (
    <DraggableCore
      handle={`.${styles.topBar}`}
      onDrag={(e, data) => setPos({x: pos.x + data.deltaX, y: pos.y + data.deltaY})}>
      <div className={styles.container} style={{left: pos.x, top: pos.y}}>
        <Box>
          <div className={styles.topBar}><p className={styles.title}>{ title }</p></div>
          { children }
        </Box>
      </div>
    </DraggableCore>
  );
};

DraggableBox.defaultProps = {
  title: '',
  initialXPos: 0,
  initialYPos: 0,
};

export default DraggableBox;
