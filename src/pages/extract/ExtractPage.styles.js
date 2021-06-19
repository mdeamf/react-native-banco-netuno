import styled from 'styled-components/native';

import { ScrollView } from 'react-native';

export const ExtractContainer = styled(ScrollView).attrs((props) => ({
  contentContainerStyle: {
    padding: props.theme.space.lg,
    flexGrow: 1,
  },
}))``;
