import { Box, Container, Stack } from '@mui/material'
import InstallationButton from '../components/InstallationButton'

const Form = (props) => {
    const {
        events: { handleSubmit, invalid },
        children,
    } = props

    return (
        <Stack
            sx={{
                justifyContent: 'center',
                paddingBlock: '40px',
                paddingInline: '5%',
                minBlockSize: '100vh',
            }}
        >
            <Container
                sx={{
                    position: 'relative',
                    borderRadius: '24px',
                    borderEndEndRadius: { xs: '115px', sm: '160px' },
                    paddingBlock: '40px',
                    paddingInlineStart: { md: '50px' },
                    maxInlineSize: {
                        xs: '26rem',
                        sm: '33rem',
                        md: '43rem',
                    },
                    bgcolor: 'common.white',
                }}
                component='main'
            >
                <InstallationButton />
                <Box
                    onSubmit={handleSubmit}
                    onInvalid={invalid}
                    component='form'
                >
                    {children}
                </Box>
            </Container>
        </Stack>
    )
}

export default Form
