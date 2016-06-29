import { getMuiTheme } from 'material-ui/styles'
import { fullBlack, grey900, grey800, white } from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator'
export default getMuiTheme({
  palette: {
    textColor: '#ceb888',
    canvasColor: grey900,
    primary1Color: '#ceb888',
    alternateTextColor: '#212121',
    disabledColor: fade(white, 0.3)
  },
  stepper: {
    textColor: '#ceb888'
  }
});
