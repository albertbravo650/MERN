import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import '../App.css'

const SimplePaper = () => {
    return(
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style' : {
                m: 1,
                width: 128,
                height: 128
            }
        }}>
            <Paper className='paper' elevation={0}>Hello</Paper>
            <Paper className='paper'>Hello</Paper>
            <Paper className='paper' elevation={10}>Hello</Paper>
            <h1>Hello</h1>
        </Box>
    )
}

export default SimplePaper