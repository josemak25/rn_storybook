import {storiesOf} from '@storybook/react-native';
import React from 'react';
import Cards from './Card';

storiesOf('Custom Card Component', module).add('card', () => (
  <Cards text="React native app" />
));
