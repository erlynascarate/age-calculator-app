import { Button, Divider, Tooltip } from '@mui/material'

const DividerButton = () => (
    <Tooltip title='Calculate Age'>
        <Button
            sx={{
                borderRadius: '50%',
                inlineSize: '64px',
                blockSize: '64px',
                '&:hover': {
                    bgcolor: 'var(--offBlack)',
                },
            }}
            color='primary'
            type='submit'
            variant='contained'
        >
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 46 44'>
                <g fill='none' stroke='#FFF' strokeWidth='2'>
                    <path d='M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44' />
                </g>
            </svg>
        </Button>
    </Tooltip>
)

const FormDivider = () => {
    return (
        <>
            <Divider
                sx={{
                    display: { md: 'none' },
                    marginBlock: '32px 24px',
                }}
            >
                <DividerButton />
            </Divider>
            <Divider
                sx={{ display: { xs: 'none', md: 'flex' } }}
                textAlign='right'
            >
                <DividerButton />
            </Divider>
        </>
    )
}

export default FormDivider
