import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Thumbnail } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import studentImage from './Images/ahmad.jpeg';
// import random1 from './Images/codi_logo1.png';
import random2 from './Images/discord.png';
// import random3 from './Images/falling.jpeg';
import FilterStudents from './filterStudents';

const Student = ({name,availability,skills,favorite,image}) => (
  <Col xs={1} md={4}>
    <Thumbnail >
      <Image src={image} width="150px" height="150px" circle />
      <h2>{name}</h2>
      <h3>Availability: </h3>
      <p>{availability}</p>
      <h3>Skills: </h3>
      <p>{skills}</p>
      <hr />
      <p>{favorite}</p>
      <p>
        <a bsStyle="primary">See More</a>&nbsp;
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
        <Student name="Ahmad Khoja"    image={studentImage} availability="3months" skills="react" favorite="react"/>
        <Student name="Amr kharzdinne" image={random2} availability="2weeks"  skills="php" favorite="react"/>
        <Student name="Mitza Haddad "  image={random2} availability="now"     skills="nodejs" favorite="react"/>
        <Student name="Bayan "         image={random2} availability="now"     skills="express" favorite="react"/>
        <Student name="Ahmad Khoja "   image={studentImage} availability="now"     skills="js" favorite="react"/>
        <Student name="Ahmad Khoja "   image={studentImage} availability="now"     skills="js" favorite="react"/>
        <Student name="Ahmad Khoja "   image={studentImage} availability="now"     skills="js" favorite="react"/>
        <Student name="Ahmad Khoja "   image={studentImage} availability="now"     skills="js" favorite="react"/>
        <Student name="Ahmad Khoja "   image={studentImage} availability="now"     skills="js" favorite="react"/>
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