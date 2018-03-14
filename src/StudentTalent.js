import React, { Component } from 'react';
import { Button, Grid, Row, Thumbnail, Col } from 'react-bootstrap';
import { Nav, ButtonGroup,NavItem, Tab,  } from 'react-bootstrap';
// import FilterStudents from './filterStudents';

const create_student = (name, availability, skills, favorite,likesteamwork,image) => 
{ return { 
    name, 
    availability,
    skills,
    favorite,
    likesteamwork
  }
}

const students = [
  create_student('Adam', '3monthes', 'js', 'Reading', 'yes'),
  create_student('Ahmad', '2monthes', 'css,js', 'Sport', 'yes'),
  create_student('Amjad', 'Available', 'HTML', 'Swimming', 'yes'),
  create_student('Hala', 'Available', 'js', 'Reading', 'yes'),
  create_student('Rami', 'Available', 'React', 'Sport', 'yes'),
  create_student('Rima', 'Available', 'HTML', 'Walking', 'yes')
]
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


const Student = ({name,availability,skills,favorite,likesteamwork,image}) => (
  <Col xs={1} md={4}>
    <Thumbnail >
      {/* <Image src={image} width="150px" height="150px" circle /> */}
      <div className='student-image' style={ {backgroundImage:`url(${image})`} } > </div>
      <h2>{name}</h2>
      <h3>Availability: </h3>
      <p>{availability}</p>
      <h3>Skills: </h3>
      <p>{skills}</p>
      <hr />
      <p>{favorite}</p>
      <p>Likes Team Work: {likesteamwork}</p>
      <p>
        <Button bsStyle="primary">See More</Button>&nbsp;
      <Button bsStyle="success">Add to list</Button>
      </p>
    </Thumbnail>
  </Col>
)

class StudentTalent extends Component {
  render() {
    return (
    <Grid>
      <Row>
      { students.map(
        (student) => <Student image={'/images/'+student.name+'.jpeg'} {...student} key={student.name}/> 
          )
        }
        {/* <Student name="Ahmad Khoja"    image={studentImage} availability="3months" skills="react" favorite="react" /> */}
      </Row>
    </Grid>
)
  }
}

class talentPage extends Component {
  render() {
    return (
      <div>
      <FilterStudents />
      <StudentTalent />
      </div>
)
  }
}

export default talentPage;