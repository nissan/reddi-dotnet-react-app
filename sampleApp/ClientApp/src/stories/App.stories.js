import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import {withKnobs, text } from '@storybook/addon-knobs';

import App  from '../components/App';


storiesOf('App', module).addDecorator('withKnobs')
    .add('default', () => <App />)
    .add('with different welcome message', () => <App welcomeMessage={text('WelcomeMessage', 'Welcome with a different welcome message')} />);
