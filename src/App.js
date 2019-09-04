import React, { Component } from 'react';
import { Grommet, Box, Button, Collapsible, ResponsiveContext, Layer } from 'grommet';
import { Menu, FormClose } from 'grommet-icons';

const theme = {
  global: {
    colors: {
      brand: '#3d138d'
    },
    font: {
      family: 'Roboto',
    },
  },
};

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSidebar: false,
    }
  }

  render() {
    const { showSidebar } = this.state;

    return (
      <div className="App">
        <Grommet theme={theme} full>
          <ResponsiveContext.Consumer>
            {size =>
              <Box fill>
                <AppBar>
                  <h1>My App</h1>
                  {/* <Heading level='3' margin='none'>My App</Heading> */}
                  <Button icon={<Menu />} onClick={() => this.setState(prevState => ({ showSidebar: !prevState.showSidebar }))} />
                </AppBar>
                <Box direction="row" flex overflow={{ horizontal: 'hidden' }}>
                  <Box flex align="center" justify="center">
                    App Body
                  </Box>
                  {(!showSidebar || size !== 'small') ? (
                    <Collapsible direction="horizontal" open={showSidebar}>
                      <Box flex width="medium" background="light-2" elevation="small" align="center" justify="center">Side Bar</Box>
                    </Collapsible>
                  ) :
                    (
                      <Layer>
                        <Box background="light-2" tag="header" justify="end" align="center" direction="row">
                          <Button icon={<FormClose />} onClick={() => { this.setState({ showSidebar: false }) }}></Button>
                        </Box>
                        <Box fill background="light-2" align="center" justify="center">
                          Side Bar Layer
                      </Box>
                      </Layer>
                    )}
                </Box>
              </Box>
            }
          </ResponsiveContext.Consumer>
        </Grommet>
      </div>
    );
  }

}

export default App;
