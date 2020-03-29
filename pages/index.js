import React, { useState } from "react";
import { Heading, CornerDialog, Pane, Alert, Dialog } from 'evergreen-ui';
import Layout from '../components/Layout';

const Home = () => {
  const [isShown, setIsShown] = useState(true);
  const [dialogIsShown, setDialogIsShown] = useState(false);

  return (
    <Layout title='Home'>
        <Alert
          intent="danger"
          style={{ width: '75%', marginLeft: 'auto', marginRight: 'auto', marginTop: 10 }}
          title="How COVID-19 is Impacting Us"
          marginBottom={32}
          onClick={() => window.location.href = 'http://ariely.info/Blog/tabid/83/EntryId/247/The-Azure-Coronavirus-COVID-19-effect-This-location-is-not-available-for-subscription.aspx'}
        >
          We've got a fantastic new budgeting tool that has been created, and we finally have an MVP that we'd like to share with you all as soon as possible.
          Unfortunately, due to the global impact of COVID-19, Microsoft Azure SQL Servers are currently, understandably, being reserved for first responders, health and emergency management services, and more critical use-cases.
          For a full explanation, click on this alert.
          When we all make it through this pandemic together, rest asured there will be a shiny new budgeting app awaiting you.
        </Alert>
      <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
        <Heading size={900} marginTop="default">🤑 Handy tools for financial folks.</Heading>
        <div>
          <>
            <h3>Getting Started &rarr;</h3>
            <p>Select a tool from the navigation bar above.</p>

            <Heading size={500}>What's new?</Heading>
            <Alert
              intent="none"
              title="50/30/20 Rule Calculator"
              marginBottom={32}
              style={{ width: '35%' }}
            >
              This calculator can be used to calculate budget categories using your monthly income based on the famous 50/30/20 rule.
            </Alert>
            <Alert
              intent="none"
              title="Amortization Calculator"
              marginBottom={32}
              style={{ width: '35%' }}
            >
              This calculator can be used to calculate the monthly payment of a loan given the principle, interest rate, and the length of the loan (in years).
            </Alert>
          </>
        </div>
      </div>


      <Dialog
        isShown={dialogIsShown}
        onCloseComplete={() => setDialogIsShown(false)}
        hasFooter={false}
        hasHeader={false}
      >
        <iframe width="540" height="550" src="https://152e492f.sibforms.com/serve/MUIEAJ5AXoH_pZte1aeKpQu7CaQxs-LeXmy5A4g-e49gsw1khSrm5m-XmO18mxKL8N98FnzRdy43_2SAwq-y_FFYgQFUYo-xbnq8tcTmdp6kvtIGffLR_ztK7K-QUCReDkOsQKkgVD5jDN-DjbIZUis8RK9t9NiPXphBiES8u8mAIRoOQtdFa1PoWZAP6ezQMkI53hqu4I_IpP6r" frameborder="0" scrolling="auto" allowfullscreen style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: '100%' }}></iframe>
      </Dialog>

      <React.Fragment>
        <CornerDialog
          title="Welcome to Swing"
          isShown={isShown}
          onCloseComplete={() => setIsShown(false)}
          confirmLabel="Subscribe"
          onConfirm={() => setDialogIsShown(true)}
        >
          Tools and calculators aren't all we're good for. Sometimes, we share some helpful content regarding personal finance. Subscribe to our mailing list if you'd like to receive these tips.
            </CornerDialog>
      </React.Fragment>

    </Layout>
  );
};

export default Home;
