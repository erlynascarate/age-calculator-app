import { TextField } from '@mui/material'

const FormInput = ({ input: { label, max } }) => {
    return (
        <TextField
            sx={{
                inlineSize: '33%',
            }}
            label={label}
            type='number'
            inputProps={{
                min: '1',
                max,
                sx: {
                    paddingBlock: '11px',
                    paddingInline: { sm: '16px' },
                    fontSize: {
                        xs: '1.5rem',
                        sm: '2rem',
                    },
                    fontWeight: '700',
                },
            }}
            InputLabelProps={{
                sx: {
                    fontSize: {
                        xs: '1rem',
                        sm: '1.5rem',
                    },
                    fontWeight: '700',
                },
            }}
            required
        />
    )
}

export default FormInput
