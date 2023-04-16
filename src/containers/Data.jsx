import { Box } from '@mui/material'

const Data = ({ dates: { year, month, day }, render }) => {
    const Dates = [
        { date: year, text: 'years' },
        { date: month, text: 'months' },
        { date: day, text: 'days' },
    ]

    return <Box>{Dates.map(render)}</Box>
}

export default Data
