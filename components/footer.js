import React from 'react';
import { Text } from 'evergreen-ui';
import Link from "next/link";

const Footer = () => (
    <footer style={{ backgroundColor: '#C6D1CF', height: 100 }}>
        <div style={{ padding: 25}}>
            <Text size={400} style={{ marginRight: 25 }}>
                <strong>
                    <Link href='/compound-interest-calculator'>
                        <a style={{ textDecoration: 'none', color: '#868DA4'}}>
                            Compound Interest Calculator
                        </a>
                    </Link>
                </strong>
            </Text>
            <Text size={400} style={{ marginRight: 25 }}>
                <strong>
                    <Link href='/amortization-calculator'>
                        <a style={{ textDecoration: 'none', color: '#868DA4'}}>
                            Amortization Calculator
                        </a>
                    </Link>
                </strong>
            </Text>
            <Text size={400} style={{ marginRight: 25 }}>
                <strong>
                    <Link href='mailto:jakenherman7@gmail.com'>
                        <a style={{ textDecoration: 'none', color: '#868DA4'}}>
                            Contact
                        </a>
                    </Link>
                </strong>
            </Text>
            <hr style={{ marginTop: 10, marginBottom: 10 }} />
            <Text color="default" size={400} style={{ marginRight: 25 }}>
                💸 Calculations provided by <strong><a style={{ textDecoration: 'none', color: '#868DA4' }} href='https://www.jakenherman.com/buckjs/'>buckjs</a></strong>
            </Text>
            <Text size={400} style={{ marginRight: 25 }}>swing takes no responsibility for potential financial losses</Text>
        </div>
    </footer>
);

export default Footer;
