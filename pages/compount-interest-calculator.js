import React, { useState } from "react";
import Nav from "../components/nav";
import Head from "../components/head";
import { AnnualCompoundInterestByYear } from "../utilities/calculations/compound_interest";
import LabeledInput from "../components/forms/LabeledInput";

const CompountInterestCalculator = () => {
  const [principal, setPrincipal] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [yearsToCompound, setYearsToCompound] = useState(0);

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
      />
      <LabeledInput
        label="Interest Rate"
        labelId="interestLabel"
        inputId="interestRate"
        changeEvent={setInterestRate}
      />
      <LabeledInput
        label="Years to Compount"
        labelId="yearsLabel"
        inputId="compoundingYears"
        changeEvent={setYearsToCompound}
      />
      <p>
        {principal} with a {interestRate}% annual compound interest would be{" "}
        {AnnualCompoundInterestByYear(principal, interestRate, yearsToCompound)}{" "}
        in {yearsToCompound} years
      </p>
    </div>
  );
};

export default CompountInterestCalculator;
