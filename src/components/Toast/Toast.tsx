import * as React from 'react';
import { CSSTransition } from 'react-transition-group';

import { Dispatch, useStore } from '../../store';

import "./Toast.scss";

export const Toast: React.FC = React.memo(function Toast(props) {
  const toast = useStore(p => p.toast);
  const timer = React.useRef<NodeJS.Timeout>();

  React.useEffect(() => {
    if (toast.show) {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => Dispatch.toast.hide(), 2000);
    }
    return () => timer.current && clearTimeout(timer.current);
  }, [toast.show]);

  return (
    <CSSTransition timeout={300} in={toast.show} unmountOnExit>
      <div className="Toast">{toast.text}</div>
    </CSSTransition>
  );
});
