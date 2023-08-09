import { Button, Card, Typography } from '@mui/material'
import styled from '@mui/material/styles/styled'

export const TredingCard = styled(Card)({
    boxShadow: `0 0 1px rgba(0,0,0,.01),
     0 4px 8px rgba(0,0,0,.01),
      0 8px 12px rgba(0,0,0,.01),
       0 12px 16px rgba(0,0,0,.01)`,
    maxWidth: '280px',
    borderRadius: '12px',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',

    '&.MuiCard-root': {
        padding: { md: '15px 0' },
    }
})

export const Heading = styled(Typography)({
    fontSize: '36px',
    fontWeight: 500,
    marginBottom: '5px'
})

export const Text = styled(Typography)({
    textTransform: 'none',
    fontSize: '15px',
    letterSpacing: 0,
    color: '#222'
})

export const CustomButton = styled(Button)({
    textTransform: 'none',
    color: '#f89dac',
    border: '1px solid #f89dac',
    '&:hover': {
        border: '1px solid #f89dac',
        color: '#fff',
        backgroundColor: '#f89dac'
    }
})