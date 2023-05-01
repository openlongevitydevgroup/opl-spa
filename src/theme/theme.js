const {createTheme} = require('@mui/material')
const theme = createTheme({
    components: {
        ToolBar:{
            defaultProps: {
                disableGutters: true
            }, 
            styleOverrides: {
                padding: '10px',
                display:'inline-block',
            }
        }
    }
})

export default theme