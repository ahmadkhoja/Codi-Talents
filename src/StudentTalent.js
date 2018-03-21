import React, { Component } from 'react';
import { Button, Grid, Row, Thumbnail, Col } from 'react-bootstrap';
import { Nav, ButtonGroup, NavItem, Tab,Modal,FormGroup,FormControl,ControlLabel,HelpBlock} from 'react-bootstrap';
// import FilterStudents from './filterStudents';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import { CSSTransition } from "react-transition-group";

// const FilterSection = ({city,skill,available,onFilterSelect}) => {
//   return(
//   <div class="multipleFilters">
//     <h2>Welcome to Filter Section</h2>
//     <p>{city}</p>
//     <p>{skill}</p>
//     <p>{available}</p>
//   </div> 
//   )
// }


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
          Contact {this.props.name}
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Codi Cycle 2</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Form Instance */}
            {/* Student Rating  */}
            <h1>Contact {this.props.name}</h1>
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
  create_student('Rima', '1', 'LARAVEL', 'Walking', 'yes'  ,'tyre'),

  create_student('batata', '1', 'javascript', 'Reading', 'yes'     ,'beirut'),
  create_student('samir', '2', 'REACT', 'Reading', 'yes'     ,'beirut'),
  create_student('joseph', '3', 'HTML', 'Reading', 'yes'     ,'saida'),
  create_student('jad', '1', 'CSS', 'Reading', 'yes'     ,'jbeil'),
  create_student('pokemon', 'available', 'WORDPRESS', 'Reading', 'yes'     ,'beirut'),
  create_student('turtle', 'available', 'PHP', 'Sport', 'yes'  ,'saida'),
  create_student('bob', '1', 'javascript', 'Swimming', 'yes','tripoli'),
  create_student('zoro', '2', 'PHP', 'Reading', 'yes'    ,'jounyeh'),
  create_student('superman', '3', 'WORDPRESS', 'Sport', 'yes'   ,'jbeil'),
  create_student('spiderman', 'available', 'LARAVEL', 'Walking', 'yes'  ,'tyre')
]

const Student = ({name,availability,skills,favorite,likesteamwork,image,city,onSecondButtonClick}) => (
  <Col xs={1} md={4}>
    <Thumbnail >
      {/* <Image src={image} width="150px" height="150px" circle /> */}
      <div className='student-image' style={{ backgroundImage: `url(${image})` }} > </div>
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
      <Example name={name} />
      <Button bsStyle="success" onClick={()=>onSecondButtonClick(name)}>Add to list</Button>
      </p>
    </Thumbnail>
  </Col>
)



class StudentTalent extends Component {
  state = {
    cityFilter: "",
    skillFilter:"",
    availableFilter:"",
    search:"",
    two:false,
    userList:[],
    studentAdded:false,
  }
  randomStudentList = (a) => { // Fisher-Yates shuffle, no side effects
    var i = a.length, t, j;
    a = a.slice()
    if(i===0){return []}
    while (--i){
      t = a[i]
      a[i] = a[j = ~~(Math.random() * (i + 1))]
      a[j] = t
    }
    return a
  }
  renderStudents() {
    const city = this.state.cityFilter;
    const skill = this.state.skillFilter;
    const available = this.state.availableFilter;
    const two = this.state.two;
    const userList = this.state.userList;
    const studentAdded = this.state.studentAdded; 
    const searchChange = this.searchChange
    const filteredStudents = students.filter( student => {
      if(city){
        if(student.city !== city){return false}
      }
      if(skill){
        if(student.skills !== skill){return false}
      }
      if(available){
        if(student.availability !== available){ return false}
      }
      return true
    })
    const studentList = this.randomStudentList(filteredStudents)
    const finalStudentList = two ? studentList.slice(0,2) : studentList
    const reactStudents = finalStudentList.map(
      (student) => <Student onSecondButtonClick={searchChange} image={'/images/'+student.name+'.jpeg'} {...student} key={student.name}/> 
    )
    return reactStudents;
 }
 
  searchChange = (search) => {
    this.setState({search})
  }
  setCityFilter = (cityFilter) => {
   this.setState({ cityFilter })
  };
  setSkillFilter = (skillFilter) => {
   this.setState({ skillFilter })
  };
  setAvailabileFilter = (availableFilter) => {
    this.setState({ availableFilter })
   };
   showAll = () => {
    this.setState({ cityFilter:'', skillFilter:'',availableFilter:'',two:'' })
   };
   showTwo = () => {
    this.setState({ two:true, cityFilter:'', skillFilter:'',availableFilter:'' })
   };

   showAddToList =() => {
     let userList = []
     let element = create_student('mohammad', '1', 'DRUPAL', 'Walking', 'yes'  ,'tyre')
    //  console.log(userList)
    userList = this.state.userList.slice()
    userList.push(element)
    this.setState({ userList:userList,studentAdded:true,two:false ,all:false, cityFilter:'', skillFilter:'',availableFilter:'' })
   };

  render() {
    const students_list = this.renderStudents()
    return (
    <div>
       <div class="multipleFilters">
          { ( this.state.cityFilter? <div>{this.state.cityFilter}</div> : null ) }
          { ( this.state.skillFilter? <div>{this.state.skillFilter}</div> : null ) }
          { ( this.state.availableFilter? <div>{this.state.availableFilter}</div> : null ) }
      </div>
      <div className="filter">
      
        <div className="searchBar"> 
            <input onChange={(evt)=>this.searchChange(evt.target.value)} type="text" placeholder="Search for..." value={this.state.search}/>
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
                <Button onClick={() => 
                  this.setCityFilter("beirut")
                  // this.onFilterSelect("")
                  }>
                  <h4>Beirut</h4>
                  </Button>
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
          <Button bsStyle="success" onClick={() => this.showAddToList()}>
        Add to list
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
          {students_list}
          {/* { students_list.length ? students_list : <div>no results...</div> } */}
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
      {/* <FilterSection /> */}
      <StudentTalent />
        {/* <FilterStudents /> */}
        <StudentTalent />
      </div>
    )
  }
}

export default talentPage