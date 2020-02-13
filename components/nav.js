import React from "react";
import Link from "next/link";
import { Pane, Button, Text, Heading } from 'evergreen-ui'

const Nav = () => (
  <Pane display="flex" padding={16} background="tint2" borderRadius={3}>
    <Pane flex={1} alignItems="center" display="flex">
      <Link href='/'>
        <Heading size={600} style={{ cursor: 'pointer', color: '#C6D1CF' }}>swing</Heading>
      </Link>
    </Pane>
    <Pane>
      {/* Below you can see the marginRight property on a Button. */}
      <Link href='/compound-interest-calculator'>
        <Button marginRight={16}>Compound Interest calculator</Button>
      </Link>
    </Pane>
  </Pane>
);

export default Nav;
