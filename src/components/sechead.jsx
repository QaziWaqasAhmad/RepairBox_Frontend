import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    fontSize:24,
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'center',
    color:'#252F3F',
}));

export default function CSSGrid() {
    return (
        <Box sx={{ width: 1 }}>
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" >
                <Box gridColumn="span 12">
                    <Item><h1>Frequently Asked Questions</h1>
                        <p>
                            The most common questions about how our works.</p></Item>
                </Box>
            </Box>
        </Box>
    );
}
