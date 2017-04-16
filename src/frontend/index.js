import React from 'react'
import ReactDOM from 'react-dom'
import { Button, ButtonToolbar, ButtonGroup, DropdownButton, MenuItem, SplitButton, Dropdown, Glyphicon } from 'react-bootstrap'
import LoadState from './LoadState'

import { getStates, matchStateToTerm, sortStates, styles, fakeRequest } from '../data/utils'
import Autocomplete from 'react-autocomplete'
import ListTest from './ListTest'
const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};

class App extends React.Component {
  state = {
    club: true,
    value: '',
    unitedStates: getStates(),
    loading: false
  }
  handleChange = (value) => {
    this.state.club ? this.setState({club: false}) : this.setState({club: true});
  };
  renderItems (items) {
    console.log(items)
    return items.map((item, index) => {
      var text = item.props.children
      if (index === 0 || items[index - 1].props.children.charAt(0) !== text.charAt(0)) {
        var style = {
          background: '#eee',
          color: '#454545',
          padding: '2px 6px',
          fontWeight: 'bold'
        }

        console.log(text);
        return [<div style={style}>{text.charAt(0)}</div>, item]
      }
      else {
        return item
      }
    })
  }
  render () {
    return (
      <div>
        <div>
        <label htmlFor="states-autocomplete">Choose a state from the US</label>
        <ListTest data = {getStates()}/>
        <Autocomplete
          value={this.state.value}
          inputProps={{name: "US state", id: "states-autocomplete"}}
          items={this.state.unitedStates}
          getItemValue={(item) => item.name}
          onSelect={(value, state) => this.setState({ value, unitedStates: [state] }) }
          onChange={(event, value) => {
            this.setState({ value, loading: true })
            fakeRequest(value, (items) => {
              this.setState({ unitedStates: items, loading: false })
            })
          }}
          renderItem={(item, isHighlighted) => (
            <div
              style={isHighlighted ? styles.highlightedItem : styles.item}
              key={item.abbr}
              id={item.category}
            >{item.name}</div>
          )}
          renderMenu={(items, value, style) => (
            <div style={{...styles.menu, ...style}}>
              {value === '' ? (
                <div style={{padding: 6}}>Type of the name of a United State</div>
              ) : this.state.loading ? (
                <div style={{padding: 6}}>Loading...</div>
              ) : items.length === 0 ? (
                <div style={{padding: 6}}>No matches for {value}</div>
              ) : this.renderItems(items)}
            </div>
          )}
        />
      </div>
        <ButtonToolbar>
          <Button>Default</Button>
          <Button bsStyle="primary">Primary</Button>
          <Button bsStyle="success">Success</Button>
          <Button bsStyle="info">Info</Button>
          <Button bsStyle="warning">Warning</Button>
          <Button bsStyle="danger">Danger</Button>
          <Button bsStyle="link">Link</Button>

        </ButtonToolbar>
        <ButtonToolbar>
          <Button bsStyle="primary" bsSize="large">Large button</Button>
          <Button bsSize="large">Large button</Button>
        </ButtonToolbar>
        <ButtonToolbar>
          <Button bsStyle="primary">Default button</Button>
          <Button>Default button</Button>
        </ButtonToolbar>
        <ButtonToolbar>
          <Button bsStyle="primary" bsSize="small">Small button</Button>
          <Button bsSize="small">Small button</Button>
        </ButtonToolbar>
        <ButtonToolbar>
          <Button bsStyle="primary" bsSize="xsmall">Extra small button</Button>
          <Button bsSize="xsmall">Extra small button</Button>
        </ButtonToolbar>
        <div className="well" style={wellStyles}>
          <Button bsStyle="primary" bsSize="large" block>Block level button</Button>
          <Button bsSize="large" block>Block level button</Button>
        </div>
        <ButtonToolbar>
          <Button bsStyle="primary" bsSize="large" active>Primary button</Button>
          <Button bsSize="large" active>Button</Button>
        </ButtonToolbar>
        <ButtonToolbar>
          <Button href="#">Link</Button>
          <Button>Button</Button>
        </ButtonToolbar>
        <ButtonToolbar>
          <Button bsStyle="primary" bsSize="large" disabled>Primary button</Button>
          <Button bsSize="large" disabled>Button1</Button>
        </ButtonToolbar>

        <LoadState />

        <ButtonGroup>
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
        <ButtonToolbar>
          <ButtonGroup>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>4</Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button>5</Button>
            <Button>6</Button>
            <Button>7</Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button>8</Button>
          </ButtonGroup>
        </ButtonToolbar>

        <ButtonToolbar>
          <ButtonGroup bsSize="large">
            <Button>Left</Button>
            <Button>Middle</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </ButtonToolbar>

        <ButtonToolbar>
          <ButtonGroup>
            <Button>Left</Button>
            <Button>Middle</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </ButtonToolbar>

        <ButtonToolbar>
          <ButtonGroup bsSize="small">
            <Button>Left</Button>
            <Button>Middle</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </ButtonToolbar>

        <ButtonToolbar>
          <ButtonGroup bsSize="xsmall">
            <Button>Left</Button>
            <Button>Middle</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </ButtonToolbar>

        <ButtonGroup>
          <ButtonToolbar>
            <Button>1</Button>
            <Button>2</Button>
            <DropdownButton title="Dropdown" id="bg-nested-dropdown">
              <MenuItem eventKey="1">Dropdown link</MenuItem>
              <MenuItem eventKey="2">Dropdown link</MenuItem>
            </DropdownButton>
          </ButtonToolbar>
        </ButtonGroup>
        <ButtonToolbar>
          <ButtonGroup vertical>
            <Button>Button</Button>
            <Button>Button</Button>
            <DropdownButton title="Dropdown" id="bg-vertical-dropdown-1">
              <MenuItem eventKey="1">Dropdown link</MenuItem>
              <MenuItem eventKey="2">Dropdown link</MenuItem>
            </DropdownButton>
            <Button>Button</Button>
            <Button>Button</Button>
            <DropdownButton title="Dropdown" id="bg-vertical-dropdown-2">
              <MenuItem eventKey="1">Dropdown link</MenuItem>
              <MenuItem eventKey="2">Dropdown link</MenuItem>
            </DropdownButton>
            <DropdownButton title="Dropdown" id="bg-vertical-dropdown-3">
              <MenuItem eventKey="1">Dropdown link</MenuItem>
              <MenuItem eventKey="2">Dropdown link</MenuItem>
            </DropdownButton>
          </ButtonGroup>
        </ButtonToolbar>

        <ButtonGroup vertical block>
          <Button>Full width button</Button>
          <Button>Full width button</Button>
        </ButtonGroup>

        <ButtonGroup justified>
          <Button href="#">Left</Button>
          <Button href="#">Middle</Button>
          <DropdownButton title="Dropdown" id="bg-justified-dropdown">
            <MenuItem eventKey="1">Dropdown link</MenuItem>
            <MenuItem eventKey="2">Dropdown link</MenuItem>
          </DropdownButton>
        </ButtonGroup>
        <ButtonToolbar>
          <DropdownButton bsStyle="default" title="default" id="dropdown-basic-1">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3" active>Active Item</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Separated link</MenuItem>
          </DropdownButton>
          <DropdownButton bsStyle="primary" title="default" id="dropdown-basic-1">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3" active>Active Item</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Separated link</MenuItem>
          </DropdownButton>
          <DropdownButton bsStyle="success" title="default" id="dropdown-basic-1">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3" active>Active Item</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Separated link</MenuItem>
          </DropdownButton>
          <DropdownButton bsStyle="info" title="default" id="dropdown-basic-1">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3" active>Active Item</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Separated link</MenuItem>
          </DropdownButton>
          <DropdownButton bsStyle="warning" title="default" id="dropdown-basic-1">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3" active>Active Item</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Separated link</MenuItem>
          </DropdownButton>
          <DropdownButton bsStyle="danger" title="default" id="dropdown-basic-1">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3" active>Active Item</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Separated link</MenuItem>
          </DropdownButton>
          <DropdownButton bsStyle="link" title="default" id="dropdown-basic-1">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3" active>Active Item</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Separated link</MenuItem>
          </DropdownButton>
        </ButtonToolbar>
        <ButtonToolbar>
          <SplitButton bsStyle="default" title="default" id="split-button-basic-1">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3">Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Separated link</MenuItem>
          </SplitButton>
          <SplitButton bsStyle="primary" title="primary" id="split-button-basic-1">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3">Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Separated link</MenuItem>
          </SplitButton>
          <SplitButton bsStyle="success" title="success" id="split-button-basic-1">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3">Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Separated link</MenuItem>
          </SplitButton>
          <SplitButton bsStyle="info" title="info" id="split-button-basic-1">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3">Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Separated link</MenuItem>
          </SplitButton>
          <SplitButton bsStyle="warning" title="warning" id="split-button-basic-1">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3">Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Separated link</MenuItem>
          </SplitButton>
          <SplitButton bsStyle="danger" title="danger" id="split-button-basic-1">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3">Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Separated link</MenuItem>
          </SplitButton>
        </ButtonToolbar>
        <ButtonToolbar>
          <DropdownButton bsSize="large" title="Large button" id="dropdown-size-large">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3">Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Separated link</MenuItem>
          </DropdownButton>
        </ButtonToolbar>

        <ButtonToolbar>
          <DropdownButton title="Default button" id="dropdown-size-medium">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3">Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Separated link</MenuItem>
          </DropdownButton>
        </ButtonToolbar>

        <ButtonToolbar>
          <DropdownButton bsSize="small" title="Small button" id="dropdown-size-small">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3">Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Separated link</MenuItem>
          </DropdownButton>
        </ButtonToolbar>

        <ButtonToolbar>
          <DropdownButton bsSize="xsmall" title="Extra small button" id="dropdown-size-extra-small">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3">Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Separated link</MenuItem>
          </DropdownButton>
        </ButtonToolbar>
        <ButtonToolbar>
          <DropdownButton bsStyle="default" title="No caret" noCaret id="dropdown-no-caret">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3">Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Separated link</MenuItem>
          </DropdownButton>
        </ButtonToolbar>
        <ButtonToolbar>
          <SplitButton title="Dropup" dropup id="split-button-dropup">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3">Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Separated link</MenuItem>
          </SplitButton>
        </ButtonToolbar>

        <ButtonToolbar>
          <SplitButton bsStyle="primary" title="Right dropup" dropup pullRight id="split-button-dropup-pull-right">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3">Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Separated link</MenuItem>
          </SplitButton>
        </ButtonToolbar>
        <SplitButton title="Dropdown right" pullRight id="split-button-pull-right">
          <MenuItem eventKey="1">Action</MenuItem>
          <MenuItem eventKey="2">Another action</MenuItem>
          <MenuItem eventKey="3">Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4">Separated link</MenuItem>
        </SplitButton>

        <ButtonToolbar>
          <Dropdown id="dropdown-custom-1">
            <Dropdown.Toggle>
              <Glyphicon glyph="star" />
              Pow! Zoom!
            </Dropdown.Toggle>
            <Dropdown.Menu className="super-colors">
              <MenuItem eventKey="1">Action</MenuItem>
              <MenuItem eventKey="2">Another action</MenuItem>
              <MenuItem eventKey="3" active>Active Item</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="4">Separated link</MenuItem>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown id="dropdown-custom-2">
            <Button bsStyle="info">
              mix it up style-wise
            </Button>
            <Dropdown.Toggle bsStyle="success"/>
            <Dropdown.Menu className="super-colors">
              <MenuItem eventKey="1">Action</MenuItem>
              <MenuItem eventKey="2">Another action</MenuItem>
              <MenuItem eventKey="3" active>Active Item</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="4">Separated link</MenuItem>
            </Dropdown.Menu>
          </Dropdown>

        </ButtonToolbar>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);