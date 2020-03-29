import React, { useState } from "react";
import Link from "next/link";
import { Pane, Button, SideSheet, Heading, Card, Table } from 'evergreen-ui'

const Nav = () => {
  const [calculatorsShown, setCalculatorsShown] = useState(false);
  return (
    <Pane display="flex" padding={16} background="tint2" borderRadius={3}>

        <SideSheet
          isShown={calculatorsShown}
          onCloseComplete={() => setCalculatorsShown(false)}
        >
          <Pane zIndex={1} flexShrink={0} elevation={0} backgroundColor="white">
            <Pane padding={16}>
              <Heading size={600}>Calculators</Heading>
            </Pane>
          </Pane>
          <Pane flex="1" overflowY="scroll" background="tint1" padding={16}>
            <Card
              backgroundColor="white"
              elevation={0}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Pane style={{ width: '100%' }}>  
              <Table.Row
                  isSelectable
                  intent='none'
                  style={{ width: '100% '}}
                >
                  <Link href='/fifty-thirty-twenty'>
                    <Table.TextCell>50/30/20 Rule Calculator</Table.TextCell>
                  </Link>
                </Table.Row>
                <Table.Row
                  isSelectable
                  intent='none'
                  style={{ width: '100% '}}
                >
                  <Link href='/compound-interest-calculator'>
                    <Table.TextCell>Compound Interest Calculator</Table.TextCell>
                  </Link>
                </Table.Row>
                <Table.Row
                  isSelectable
                  intent='none'
                  style={{ width: '100% '}}
                >
                  <Link href='/amortization-calculator'>
                    <Table.TextCell>Amortization Calculator</Table.TextCell>
                  </Link>
                </Table.Row>
              </Pane>
            </Card>
          </Pane>
          </SideSheet>

      <Pane flex={1} alignItems="center" display="flex">
        <Link href='/'>
          <Heading size={600} style={{ cursor: 'pointer', color: '#C6D1CF' }}>swing</Heading>
        </Link>
      </Pane>
      <Pane>
        <Button marginRight={16} appearance="minimal" iconBefore="calculator" intent="none" onClick={() => setCalculatorsShown(true)}>Calculators</Button>
      </Pane>
    </Pane>
  );
}

export default Nav;
