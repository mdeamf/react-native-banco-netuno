import React from 'react';

import { StatementTimeline } from './components/StatementTimeline/StatementTimeline';
import { StatementContainer } from './StatementPage.styles';

export default () => {
  return (
    <StatementContainer>
      <StatementTimeline />
    </StatementContainer>
  );
};
