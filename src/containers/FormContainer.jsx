import { Stack } from '@mui/system'

const inputs = [
    {
        label: 'day',
        placeholder: 'DD',
        min: 1,
        max: 31,
    },
    {
        label: 'month',
        placeholder: 'MM',
        min: 1,
        max: 12,
    },
    {
        label: 'year',
        placeholder: 'YYYY',
        min: 100,
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
