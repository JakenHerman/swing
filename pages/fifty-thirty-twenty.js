import React, { useState } from 'react';
import * as buck from 'buckjs';
import LabeledInput from "../components/forms/LabeledInput";
import Layout from '../components/Layout';
import { Button, Heading, Paragraph, Pane } from 'evergreen-ui';

const FiftyThirtyTwenty = () => {
    const [budgetResult, setBudgetResult] = useState({});
    const [incomeAmount, setIncome] = useState(0);
    const [calculated, setCalculated] = useState(false);

    const runCalculation = () => {
        setBudgetResult(buck.fiftyThirtyTwentyRule(incomeAmount));
        setCalculated(true);
    }

    return (
        <Layout title='50/30/20 Budget Calculator'>
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
                    <Heading size={900}>50/30/20 Budget Calculator</Heading>
                    <LabeledInput
                        label='Monthly After-tax Income'
                        labelId='incomeLabel'
                        inputId="incomeAmount"
                        changeEvent={setIncome}
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
                        ${parseFloat(budgetResult.necessities.toFixed(2)).toLocaleString()}
                    </Heading>
                    <br />
                    <Paragraph
                        size={200}
                        color="#f1f1f0"
                        style={{ textAlign: 'center' }}
                    >
                        Necessities
                    </Paragraph>

                    <Heading
                        color='#F1F1F0'
                        size={900}
                        marginTop="default"
                    >
                        ${parseFloat(budgetResult.wants.toFixed(2)).toLocaleString()}
                    </Heading>
                    <br />
                    <Paragraph
                        size={200}
                        color="#f1f1f0"
                        style={{ textAlign: 'center' }}
                    >
                        Wants
                    </Paragraph>

                    <Heading
                        color='#F1F1F0'
                        size={900}
                        marginTop="default"
                    >
                        ${parseFloat(budgetResult.savings_and_debt.toFixed(2)).toLocaleString()}
                    </Heading>
                    <br />
                    <Paragraph
                        size={200}
                        color="#f1f1f0"
                        style={{ textAlign: 'center' }}
                    >
                        Savings &amp; Debt
                    </Paragraph>
                </div>
            </Pane>
            }
            </Pane>
        </Layout>
    );
};

export default FiftyThirtyTwenty;
