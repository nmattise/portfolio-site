import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/lightBlue';
import blueGrey from '@material-ui/core/colors/blueGrey';

const theme = createMuiTheme({
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
            main: blue[900],
        },
        secondary: {
            main: blue['A400'],
        },
    },
});

export default theme