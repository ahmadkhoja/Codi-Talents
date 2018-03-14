import React, { Component } from 'react';
import { Nav, ButtonGroup,NavItem, Row, Tab, Button, Col } from 'react-bootstrap';


const Filter = () => (
  <div class="filter">
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row className="clearfix">
    <Col sm={4}>
      <Nav bsStyle="pills" stacked>
        <NavItem eventKey="first">Places</NavItem>
        <NavItem eventKey="second">Skills</NavItem>
        <NavItem eventKey="third">Availability</NavItem>
      </Nav>
    </Col>
    <Col sm={8}>
      <Tab.Content animation>
        <Tab.Pane eventKey="first">
            <ButtonGroup vertical block>
                <Button>Beirut</Button>
                <Button>Saida</Button>
                <Button>Tripoli</Button>
                <Button>Jounyeh</Button>
                <Button>Jbiel</Button>
                <Button>Tyre</Button>
            </ButtonGroup>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
            <ButtonGroup vertical block>
                <Button>PHP</Button>
                <Button>REACT</Button>
                <Button>DATA ANALYSIS</Button>
                <Button>WORDPRESS</Button>
                <Button>DRUPAL</Button>
                <Button>LARAVEL</Button>
                <Button>NODE JS</Button>
                <Button>JAVASCRIPT</Button>
                <Button>DESIGN TOOLS</Button>
            </ButtonGroup>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
            <ButtonGroup vertical block>
                <Button>In less than 1 month</Button>
                <Button>In less than 2 month</Button>
                <Button>3months or more</Button>
            </ButtonGroup>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
  </div>
)

class FilterStudents extends Component {
    render() {
      return (
      <Filter />
  )
    }
  }

export default FilterStudents;