jest.unmock('./index');
import React from 'react';
import { renderAndCheckSnapshot } from '../testHelpers';
import Text from './index';

describe('Text', () => {
  it('Text component', () => {
    renderAndCheckSnapshot(
      <Text>Howdy!</Text>
    );
  });

  it('Text w/ Color', () => {
    renderAndCheckSnapshot(
      <Text color={"#329ced"}>Howdy! (In Color)</Text>
    );
  });

  it('Text w/ Size', () => {
    renderAndCheckSnapshot(
      <Text size={2}>Big Howdy!</Text>
    );
  });
});