import React, { useState } from "react";
import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";
import { Heading, CornerDialog, Button, Dialog } from 'evergreen-ui';
import Layout from '../components/Layout';

const Home = () => {
  const [isShown, setIsShown] = useState(true);
  const [dialogIsShown, setDialogIsShown] = useState(false);
  
  return (
    <Layout>
      <Head title="Home" />
      <Nav />

      <div>
        <Heading size={900} marginTop="default">🤑 Handy tools for financial folks.</Heading>
        <div>
          <Link href="/compound-interest-calculator">
            <>
              <h3>Getting Started &rarr;</h3>
              <p>Select a tool from the navigation bar above.</p>
            </>
          </Link>
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
