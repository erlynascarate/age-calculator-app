import { Stack } from '@mui/system'

const inputs = [
    {
        label: 'day',
        placeholder: 'DD',
        helperText: 'Must be a valid day',
        max: 31,
    },
    {
        label: 'month',
        placeholder: 'MM',
        helperText: 'Must be a valid month',
        max: 12,
    },
    {
        label: 'year',
        placeholder: 'YYYY',
        helperText: 'Must be in the past',
        max: new Date().getFullYear(),
    },
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
