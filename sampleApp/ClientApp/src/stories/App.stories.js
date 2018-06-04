import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import App  from '../App';

storiesOf('App', module)
    .add('default', () => <App />);
