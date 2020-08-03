import React from "react";
import styled from "styled-components";
import ScriptView from "./Components/ScriptView";
import ScriptInput from "./Components/ScriptInput";

const Container = styled.div`
  width: 80%;
  margin: auto auto;
`;

function App() {
  return (
    <Container>
      <ScriptInput></ScriptInput>
      <hr/>
      <ScriptView></ScriptView>
    </Container>
  );
}

export default App;
