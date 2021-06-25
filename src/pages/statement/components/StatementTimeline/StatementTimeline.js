import React from 'react';
import Timeline from 'react-native-timeline-flatlist';

import { StatementTimelineHeader } from './StatementTimelineHeader';

import { statementHistory } from '../../../../global/Constants';

export const StatementTimeline = () => {
  const data = statementHistory;

  return (
    <Timeline
      data={data}
      options={{ ListHeaderComponent: StatementTimelineHeader }}
    />
  );
};
