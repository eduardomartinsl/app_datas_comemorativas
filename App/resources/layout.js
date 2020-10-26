import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  flex-direction: column
`;

export const Col = styled.View`
    flex-direction: column;
`

export const Row = styled.View`
    justify-content: center;
    flex-direction: row;
`