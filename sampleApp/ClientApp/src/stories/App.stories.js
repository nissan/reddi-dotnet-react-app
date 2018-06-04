import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { configure, addDecorator } from '@storybook/react';
import { withNotes } from '@storybook/addon-notes';
addDecorator(withNotes);

import App  from '../components/App';


storiesOf('App', module)
    .add('default', () => <App />, { notes: 'A default app page'})
    .add('with different welcome message', () => <App welcomeMessage="Welcome with a different welcome message" />);
