import { Typography } from '@mui/material'

const DataText = ({ date: { date, text } }) => {
    return (
        <Typography
            variant='h2'
            sx={{
                fontSize: { sm: '5rem' },
                fontWeight: '800',
                fontStyle: 'italic',
            }}
        >
            <Typography variant='inherit' component='span' color='primary'>
                {date}
            </Typography>{' '}
            {text}
        </Typography>
    )
}

export default DataText
