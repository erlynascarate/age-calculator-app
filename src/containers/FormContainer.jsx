import { Stack } from '@mui/system'

const inputs = [
    { label: 'DAY', max: 31 },
    { label: 'MONTH', max: 12 },
    { label: 'YEAR', max: new Date().getFullYear() },
]

const FormContainer = ({ render }) => {
    return (
        <Stack
            direction='row'
            spacing={2}
            sx={{
                inlineSize: { md: '27rem' },
            }}
        >
            {inputs.map(render)}
        </Stack>
    )
}

export default FormContainer
