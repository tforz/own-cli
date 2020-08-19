import React from 'react'
import './index.scss'

export const Loading: React.FC = React.memo(function Loading(props: any) {
  const mask = typeof props.mask === 'undefined' ? true : props.mask;
  return (
    <div className="loading" style={{ backgroundColor: mask ? '#0003' : '#0000' }}>
      <div className="loadingContent">
        <div className="chasedot" />
        <div className="chasedot" />
        <div className="chasedot" />
        <div className="chasedot" />
        <div className="chasedot" />
        <div className="chasedot" />
      </div>
    </div>
  )
});
