import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// Pages
import SignIn from './pages/SignIn';
import StorePage from './pages/StorePage';
import Inbox from './pages/Inbox';
import Setting from './pages/Setting';
import ProjectPage from './pages/ProjectPage';
import AddProduct from './pages/AddProduct';

let theme = createMuiTheme({
  palette: {
    primary: {
      light: '#63ccff',
      main: '#6080ef',
      dark: '#006db3',
    },
  },
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  props: {
    MuiTab: {
      disableRipple: true,
    },
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
});

theme = {
  ...theme,
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: '#18202c',
      },
    },
    MuiButton: {
      label: {
        textTransform: 'none',
      },
      contained: {
        boxShadow: 'none',
        '&:active': {
          boxShadow: 'none',
        },
      },
    },
    MuiTabs: {
      root: {
        marginLeft: theme.spacing(1),
      },
      indicator: {
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: theme.palette.common.white,
      },
    },
    MuiTab: {
      root: {
        textTransform: 'none',
        margin: '0 16px',
        minWidth: 0,
        padding: 0,
        [theme.breakpoints.up('md')]: {
          padding: 0,
          minWidth: 0,
        },
      },
    },
    MuiIconButton: {
      root: {
        padding: theme.spacing(1),
      },
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 4,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: '#404854',
      },
    },
    MuiListItemText: {
      primary: {
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
    MuiListItemIcon: {
      root: {
        color: 'inherit',
        marginRight: 0,
        '& svg': {
          fontSize: 20,
        },
      },
    },
    MuiAvatar: {
      root: {
        width: 32,
        height: 32,
      },
    },
  },
};





function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Route path="/" exact component={SignIn} />
        <Route path="/storepage" exact component={StorePage} />
        <Route path="/inbox" exact component={Inbox} />
        <Route path="/setting" exact component={Setting} />
        <Route path="/projects" exact component={ProjectPage} />
        <Route path="/addproduct" exact component={AddProduct} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
