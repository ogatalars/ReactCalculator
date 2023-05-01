import { createTheme } from "@mui/material";



const theme = createTheme({
    palette: {
        mode: "dark", 
        primary: {main: "#fff149"}
        }, 
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: 15
                    }
                }
            }
        }, 
        typography: {
            button: {
                fontSize: "2rem"
            }
        }
})

export default theme