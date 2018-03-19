import React, { Component } from 'react';
import { Button, Grid, Row, Thumbnail, Col } from 'react-bootstrap';
import { Nav,ButtonGroup,NavItem,Tab,Modal,FormGroup,FormControl,ControlLabel,HelpBlock } from 'react-bootstrap';
// import FilterStudents from './filterStudents';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

const FieldGroup = ({ id, label, help, ...props }) => {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

const FormInstance = () => {
  return (<div>
    <FieldGroup
      id="formControlsText"
      type="text"
      label="Company Name"
      placeholder="Enter Your Company's Name"
    />
    <FieldGroup
      id="formControlsEmail"
      type="email"
      label="Email address"
      placeholder="Enter email"
    />
    <FieldGroup
      id="formControlsFile"
      type="file"
      label="Upload Something:"
      // help="Example block-level help text here."
    />
    
    <FormGroup controlId="formControlsTextarea" bsSize ="large">
      <ControlLabel>Message</ControlLabel>
      <FormControl componentClass="textarea" placeholder="Write Something..." />
    </FormGroup>

    {/* <FormGroup>
      <ControlLabel>Static text</ControlLabel>
      <FormControl.Static>email@example.com</FormControl.Static>
    </FormGroup> */}

    <Button type="submit">Submit</Button>
  </div>
  )};


class Example extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div>
        <Button bsStyle="primary" bsSize="medium" onClick={this.handleShow}>
          Contact with Student
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Codi Cycle 2</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Form Instance */}
            {/* Student Rating  */}
            <h1>Student Contact</h1>
            <FormInstance />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}


const create_student = (name, availability, skills, favorite,likesteamwork,city,image) => 
{ return { 
    name, 
    availability,
    skills,
    favorite,
    likesteamwork,
    city
  }
}

const students = [
  create_student('Adam', '3', 'PHP', 'Reading', 'yes'     ,'beirut'),
  create_student('mostafa', '1', 'PHP', 'Reading', 'yes'     ,'beirut'),
  create_student('ninja', '2', 'PHP', 'Reading', 'yes'     ,'saida'),
  create_student('pirate', '3', 'PHP', 'Reading', 'yes'     ,'jbeil'),
  create_student('mimi', 'available', 'PHP', 'Reading', 'yes'     ,'beirut'),
  create_student('Ahmad', '2', 'REACT', 'Sport', 'yes'  ,'saida'),
  create_student('Amjad', 'available', 'HTML', 'Swimming', 'yes','tripoli'),
  create_student('Hala', 'available', 'javascript', 'Reading', 'yes'    ,'jounyeh'),
  create_student('Rami', 'available', 'WORDPRESS', 'Sport', 'yes'   ,'jbeil'),
  create_student('Rima', '1', 'LARAVEL', 'Walking', 'yes'  ,'tyre')
]
const Student = ({name,availability,skills,favorite,likesteamwork,image,city}) => (
  <Col xs={1} md={4}>
    <Thumbnail >
      {/* <Image src={image} width="150px" height="150px" circle /> */}
      <div className='student-image' style={ {backgroundImage:`url(${image})`} } > </div>
      <h2>{name}</h2>
      <h3>City: {city}</h3>
      <h3>Availability: </h3>
      <p>{availability}</p>
      <h3>Skills: </h3>
      <p>{skills}</p>
      <hr />
      <p>{favorite}</p>
      <p>Likes Team Work: {likesteamwork}</p>
      <p>
      {/* <Button bsStyle="primary">See More</Button>&nbsp; */}
      <Example />
      <Button bsStyle="success">Add to list</Button>
      </p>
    </Thumbnail>
  </Col>
)

class StudentTalent extends Component {
  state = {
    cityFilter: "",
    skillFilter:"",
    availableFilter:"",
    all:false,
    two:false,
    userList:[]
  }
  randomStudentList = (a)=> { // Fisher-Yates shuffle, no side effects
    var i = a.length, t, j;
    a = a.slice()
    while (--i){
      t = a[i]
      a[i] = a[j = ~~(Math.random() * (i+1))]
      a[j] = t
    } 
    return a
  }
 renderStudents() {
    const city = this.state.cityFilter;
    const skill = this.state.skillFilter;
    const availabile = this.state.availableFilter;
    const all = this.state.all;
    const two = this.state.two;
    console.log(all,'::',two)
    let studentList = this.randomStudentList(students)
    if(city){
      return (
        studentList.filter( student=>student.city ===  city).map(
        (student) => <Student image={'/images/'+student.name+'.jpeg'} {...student} key={student.name}/> )
      )
    }
    else if(skill){
      return (
        studentList.filter( student=>student.skills ===  skill).map(
        (student) => <Student image={'/images/'+student.name+'.jpeg'} {...student} key={student.name}/> )
      )
    }else if(availabile){
      return (
        studentList.filter( student=>student.availability ===  availabile).map(
        (student) => <Student image={'/images/'+student.name+'.jpeg'} {...student} key={student.name}/> )
      )
    }else if(all){
      return (
        studentList.map(
          (student) => <Student image={'/images/'+student.name+'.jpeg'} {...student} key={student.name}/> )
      )
  }else if(two){
    return (
      studentList.slice(0,2).map(
        (student) => <Student image={'/images/'+student.name+'.jpeg'} {...student} key={student.name}/> )
    )
  }else{
    return (
      studentList.map(
        (student) => <Student image={'/images/'+student.name+'.jpeg'} {...student} key={student.name}/> )
      )
    }
    
 }
 

  setCityFilter = (cityFilter) => {
   this.setState({ cityFilter, skillFilter:'', availableFilter:'',all:'',two:''})
  };
  setSkillFilter = (skillFilter) => {
   this.setState({ skillFilter, availableFilter:'', cityFilter:'',all:'',two:''  })
  };
  setAvailabileFilter = (availableFilter) => {
    this.setState({ availableFilter, cityFilter:'', skillFilter:'',all:'',two:'' })
   };
   showAll = () => {
    this.setState({ all:true, cityFilter:'', skillFilter:'',availableFilter:'',two:'' })
   };
   showTwo = () => {
    this.setState({ two:true ,all:'', cityFilter:'', skillFilter:'',availableFilter:'' })
   };

  render() {
    const students_list = this.renderStudents()
    return (
    <div>
      <div className="filter">
      
        <div className="searchBar"> 
            <input type="text" placeholder="Search for..."/>
        </div>

    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row className="clearfix">
    <Col sm={4}>
      <Nav bsStyle="pills" stacked>
        <NavItem eventKey="first">Places</NavItem>
        <NavItem eventKey="second">Skills</NavItem>
        <NavItem eventKey="third">Availability</NavItem>
        <NavItem eventKey="fourth">Show Students</NavItem>
      </Nav>
    </Col>
    <Col sm={8}>
      <Tab.Content animation>
        <Tab.Pane eventKey="first">
            <ButtonGroup vertical block>
                <Button onClick={() => this.setCityFilter("beirut")}><h4>Beirut</h4></Button>
                <Button onClick={() => this.setCityFilter("saida")}><h4>Saida</h4></Button>
                <Button onClick={() => this.setCityFilter("tripoli")}><h4>Tripoli</h4></Button>
                <Button onClick={() => this.setCityFilter("jounyeh")}><h4>Jounyeh</h4></Button>
                <Button onClick={() => this.setCityFilter("jbeil")}><h4>Jbiel</h4></Button>
                <Button onClick={() => this.setCityFilter("tyre")}><h4>Tyre</h4></Button>
            </ButtonGroup>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
            <ButtonGroup vertical block>
                <Button onClick={() => this.setSkillFilter("PHP")}>PHP</Button>
                <Button onClick={() => this.setSkillFilter("REACT")}>REACT</Button>
                <Button onClick={() => this.setSkillFilter("WORDPRESS")}>WORDPRESS</Button>
                <Button onClick={() => this.setSkillFilter("DRUPAL")}>DRUPAL</Button>
                <Button onClick={() => this.setSkillFilter("LARAVEL")}>LARAVEL</Button>
                <Button onClick={() => this.setSkillFilter("NODE")}>NODE JS</Button>
                <Button onClick={() => this.setSkillFilter("javascript")}>JAVASCRIPT</Button>
            </ButtonGroup>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
            <ButtonGroup vertical block>
                <Button onClick={() => this.setAvailabileFilter("available")}>Available</Button>
                <Button onClick={() => this.setAvailabileFilter("1")}>In less than 1 month</Button>
                <Button onClick={() => this.setAvailabileFilter("2")}>In less than 2 month</Button>
                <Button onClick={() => this.setAvailabileFilter("3")}>3months or more</Button>
            </ButtonGroup>
        </Tab.Pane>
        <Tab.Pane eventKey="fourth">
          <Button onClick={() => this.showAll()} vertical block>
            Show All
          </Button>
          <Button onClick={() => this.showTwo()} vertical block>
            Show Two
          </Button>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
  
   </div>
   <Grid>
      <Row>
        <ReactCSSTransitionGroup transitionName={"student"} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          { students_list.length ? students_list : <div>no results...</div> }
        </ReactCSSTransitionGroup>
      </Row>
    </Grid>  
  </div>
)}
}
  

class talentPage extends Component {
  render() {
    return (
      <div>
      <StudentTalent />
      </div>
)
  }
}

export default talentPage