import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import RouteMap from './config/routes'
import { RawTheme } from './config/theme'

import './index.css';
import registerServiceWorker from './registerServiceWorker';

const theme = createMuiTheme(RawTheme);

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <RouteMap />
  </MuiThemeProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
