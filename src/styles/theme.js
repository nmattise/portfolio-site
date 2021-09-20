import { createMuiTheme } from '@material-ui/core/styles';

const colors = {
    white: "#fff",
    athenaBlue: "#61dafb",
    salute: "#282c34",
    parachuting: "#01579b",

}
const theme = createMuiTheme({
	shape:{borderRadius:0,},
    typography: {
		// htmlFontSize: 14,
		// fontSize: 14,
		fontFamily: [
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),
	},
    palette: {
        primary: {
            main: colors.salute,
        },
        secondary: {
            main: colors.parachuting,
        },
    },
});

export default theme

