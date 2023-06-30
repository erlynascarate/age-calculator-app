import { Box } from '@mui/material'

const Data = (props) => {
    const {
        dates: { year, month, day },
        render,
    } = props

    const Dates = [
        { date: year, text: 'years' },
        { date: month, text: 'months' },
        { date: day, text: 'days' },
    ]

    return <Box>{Dates.map(render)}</Box>
}

export default Data
