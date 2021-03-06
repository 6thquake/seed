import React from 'react';
import { withStyles, MuiThemeProvider } from '@6thquake/react-material/styles';

import compose from 'recompose/compose';
import { connect } from 'react-redux';
import Progress from '@6thquake/react-material/Progress';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  height: {
    height: 1.6,
  },
  barColor: {
    backgroundColor: theme.palette.progress.dark,
    // backgroundColor: "#00BFA5"
  },
  color: {
    backgroundColor: theme.palette.common.white,
  },
});

class RouterProgress extends React.Component {
  state = {
    loaded: false,
  };

  render() {
    const { classes, loaded } = this.props;
    return (
      <Progress
        classes={{
          root: classes.height,
          colorPrimary: classes.color,
          barColorPrimary: classes.barColor,
        }}
        isPromise={true}
        isFinish={loaded}
        estimatedTime={10}
        // completed={30}
      />
    );
  }
}

export default compose(
  connect(state => ({
    loaded: state.pageLoaded,
  })),
  withStyles(styles, { withTheme: true }),
)(RouterProgress);
