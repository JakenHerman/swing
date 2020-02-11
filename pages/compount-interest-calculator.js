import React, { useState } from "react";
import Nav from "../components/nav";
import Head from "../components/head";
import { AnnualCompoundInterestByYear } from "../utilities/calculations/compound_interest";
import LabeledInput from "../components/forms/LabeledInput";
import CompoundInterestOverTime from "../components/visuals/CompoundInterestOverTime";

const CompountInterestCalculator = () => {
  const [principal, setPrincipal] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [yearsToCompound, setYearsToCompound] = useState(0);
  const [viewChart, setViewChart] = useState(false);

  return (
    <div>
      <Head title="Compound Interest Calculator" />
      <Nav />
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
        label="Years to Compount"
        labelId="yearsLabel"
        inputId="compoundingYears"
        changeEvent={setYearsToCompound}
        reset={setViewChart}
      />
      <p>
        {principal} with a {interestRate}% annual compound interest would be{" "}
        {AnnualCompoundInterestByYear(principal, interestRate, yearsToCompound)}{" "}
        in {yearsToCompound} years
      </p>

      <button onClick={() => setViewChart(true)}>View Chart</button>
      {viewChart && (
        <CompoundInterestOverTime
          principal={principal}
          interestRate={interestRate}
          yearsToCompound={yearsToCompound}
        />
      )}
    </div>
  );
};

export default CompountInterestCalculator;
