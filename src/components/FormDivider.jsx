import {
    Button,
    Divider,
    Tooltip,
    useMediaQuery,
    useTheme,
} from '@mui/material'

const FormDivider = () => {
    const theme = useTheme()
    const md = useMediaQuery(theme.breakpoints.up('md'))

    const textAlign = md ? 'right' : 'center'

    return (
        <>
            <Divider
                sx={{
                    mb: { xs: 3, md: 0 },
                }}
                textAlign={textAlign}
            >
                <Tooltip title='Calculate Age'>
                    <Button
                        sx={{
                            borderRadius: '50%',
                            inlineSize: '64px',
                            blockSize: '64px',
                            '&:hover': {
                                bgcolor: 'primary.hover',
                            },
                        }}
                        type='submit'
                        variant='contained'
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 46 44'
                        >
                            <g fill='none' stroke='#FFF' strokeWidth='2'>
                                <path d='M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44' />
                            </g>
                        </svg>
                    </Button>
                </Tooltip>
            </Divider>
        </>
    )
}

export default FormDivider
