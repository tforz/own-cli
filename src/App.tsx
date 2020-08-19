import React from 'react';
import { useDispatch } from 'react-redux';
import { Loading } from 'components';
// import { Store } from 'store';
import { isDev } from 'libs/env';
import { Api } from 'apis'
import VConsole from 'vconsole'

import 'assets/scss.scss';
isDev && new VConsole();


const App: React.FC<any> = (props) => {

  const config = require('../package.json');
  const [state, setState] = React.useState(true)
  const dispatch = useDispatch();

  React.useEffect(() => {
    Api.UserApi.getEnums()
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setState(false)
      return () => {
        setState(true)
      }
    }, 500)
  }, [])

  React.useEffect(() => {
    dispatch({ type: 'INIT' });
  })

  console.log('version about:', process.env, config.version);

  return (
    <div className="App">
      {props.children}
      {state && <Loading />}
    </div>
  );
}

export default App;
