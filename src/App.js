import * as React from 'react'
import * as ReactBootStrap from 'react-bootstrap'

function App() {
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    }, 
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    }, 
  ];

  return (
    <div>
      <Navbar />

      <h1>My Hacker Stories</h1>

      <Search />

      <hr />

      <List list={stories} />
    </div>
  );
}

const List = (props) => (
  <ul>
    {props.list.map((item) => (
      <Item key={item.objectID} item={item} />
))} </ul>
);

const Item = (props) => (
  <li>
    <span>
      <a href={props.item.url}>{props.item.title}</a>
    </span>
    <span>{props.item.author}</span>
    <span>{props.item.num_comments}</span>
    <span>{props.item.points}</span>
  </li> 
  );

const Search = () => {
  const handleChange  = (event) => {
    console.log(event.target.value);
  }

  return (
    <div>
      <label htmlFor='search'>Search: </label>
      <input id='search' type='text' onChange={handleChange} />
    </div>
  )
}

const Navbar = () => {
  return(
    <div>
      <ReactBootStrap.Navbar collapseOnSelect expand="md" bg="primary" variant="dark">
        <ReactBootStrap.Navbar.Brand href="#home">Hacker Stories</ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="me-auto">
            <ReactBootStrap.NavDropdown title="More" id="collasible-nav-dropdown">
              <ReactBootStrap.NavDropdown.Item href="#action/3.1">Link 1</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action/3.2">Link 2</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action/3.3">Link 3</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>
          </ReactBootStrap.Nav>
          <ReactBootStrap.Nav>
          <ReactBootStrap.Nav.Link href="#features">Home</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#pricing">Search</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#deets">Portfolio</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
              GitHub
            </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </div>
  )
}

export default App;
