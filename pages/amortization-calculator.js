import React, { useState } from 'react';
import * as buck from 'buckjs';
import LabeledInput from "../components/forms/LabeledInput";
import Layout from '../components/Layout';
import { Button, Heading, Paragraph, Pane } from 'evergreen-ui';

const AmortizationCalculator = () => {
    const [loanAmount, setLoanAmount] = useState(0);
    const [interestRate, setInterestRate] = useState(0);
    const [term, setTerm] = useState(0);
    const [startDate, setStartDate] = useState(new Date());
    const [monthlyPayment, setMonthlyPayment] = useState(0);
    const [calculated, setCalculated] = useState(false);

    const runCalculation = () => {
        setMonthlyPayment(buck.yearlyAmortization(loanAmount, interestRate, term));
        setCalculated(true);
    }

    return (
        <Layout title='Amortization Calculator'>
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
                <div style={{ margin: 25 }}>
                    <Heading size={900}>Amortization Calculator</Heading>
                    <LabeledInput
                        label='Loan Amount'
                        labelId='loanAmountLabel'
                        inputId="loanAmount"
                        changeEvent={setLoanAmount}
                    />
                    <LabeledInput
                        label='Interest Rate'
                        labelId='interestLabel'
                        inputId="interest"
                        changeEvent={setInterestRate}
                    />
                    <LabeledInput
                        label='Term'
                        labelId='termLabel'
                        inputId="term"
                        changeEvent={setTerm}
                    />
                    <Button
                        appearance='primary'
                        onClick={() => runCalculation()}
                    >
                        Calculate
                    </Button>
                </div>
            </Pane>

            {calculated &&
            <Pane
                elevation={4}
                float="left"
                backgroundColor="#868DA4"
                margin={24}
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
            >
                <div style={{ margin: 25 }}>
                    <Heading
                        color='#F1F1F0'
                        size={900}
                        marginTop="default"
                    >
                        ${monthlyPayment}
                    </Heading>
                    <br />
                    <Paragraph
                        size={200}
                        color="#f1f1f0"
                        style={{ textAlign: 'center' }}
                    >
                        Monthly Payment
                    </Paragraph>
                </div>
            </Pane>
            }
            </Pane>
        </Layout>
    );
};

export default AmortizationCalculator;
