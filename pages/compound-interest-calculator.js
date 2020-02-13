import React, { useState } from "react";
import Nav from "../components/nav";
import Head from "../components/head";
import LabeledInput from "../components/forms/LabeledInput";
import CompoundInterestOverTime from "../components/visuals/CompoundInterestOverTime";
import * as buck from 'buckjs';
import { Pane, Button } from 'evergreen-ui';
import Layout from '../components/Layout';

const CompoundInterestCalculator = () => {
  const [principal, setPrincipal] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [yearsToCompound, setYearsToCompound] = useState(0);
  const [viewChart, setViewChart] = useState(false);

  return (
    <Layout>
      <Head title="Compound Interest Calculator" />
      <Nav />
<Pane clearfix>
<Pane
    elevation={4}
    float="left"
    backgroundColor="#868DA4"
    color='#F1F1F0'
    margin={24}
    display="flex"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
  >
    <div style= {{ margin: 25 }}>
      <h1>Compound Interest Calculator</h1>
      <LabeledInput
        label="Principal"
        labelId="principalLabel"
        inputId="principal"
        changeEvent={setPrincipal}
        reset={setViewChart}
      />
      <LabeledInput
        label="Interest Rate"
        labelId="interestLabel"
        inputId="interestRate"
        changeEvent={setInterestRate}
        reset={setViewChart}
      />
      <LabeledInput
        label="Years to Compound"
        labelId="yearsLabel"
        inputId="compoundingYears"
        changeEvent={setYearsToCompound}
        reset={setViewChart}
      />
      <p>
        {principal} with a {interestRate}% annual compound interest would be{" "}
        {buck.annualCompoundInterestByYear(principal, interestRate, yearsToCompound)}{" "}
        in {yearsToCompound} years
      </p>

      <Button
          appearance="primary"
          marginRight={16}
          onClick={() => setViewChart(true)}
      >View Chart</Button>
    </div>
  </Pane>

      <Pane
    elevation={4}
    float="left"
    margin={24}
    display="flex"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
  >
      {viewChart && (
        <CompoundInterestOverTime
          principal={principal}
          interestRate={interestRate}
          yearsToCompound={yearsToCompound}
        />
      )}
  </Pane>

    </Pane>
    </Layout>


  );
};

export default CompoundInterestCalculator;
