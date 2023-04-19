import { animated, useSpring } from '@react-spring/web'
import { Typography } from '@mui/material'

const DataText = ({ date: { date, text } }) => {
    const value = isNaN(date) ? 0 : date
    const dateAnimation = useSpring({
        to: { date: value },
        from: { date: 0 },
        delay: 200,
    })

    const animatedDate = dateAnimation.date.to((value) => Math.floor(value))

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
                <animated.span>
                    {isNaN(date) ? date : animatedDate}
                </animated.span>
            </Typography>{' '}
            {text}
        </Typography>
    )
}

export default DataText
