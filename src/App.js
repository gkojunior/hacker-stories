import * as React from 'react'
import * as ReactBootStrap from 'react-bootstrap'

const list = [
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

function App() {
  return (
    <div>
      <Navbar />

      <h1>My Hacker Stories</h1>

      <Search />

      <hr />

      <List />
    </div>
  );
}

const List = () => {
  return (
    <ul>
    {list.map(function (item) {
      return (
        <li key={item.objectID}>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
          <span>{item.author}</span>
          <span>{item.num_comments}</span>
          <span>{item.points}</span>
        </li>
      );
    })}
  </ul>
  )
}

const Search = () => {
  return (
    <div>
      <label htmlFor='search'>Search: </label>
      <input id='search' type='text' />
    </div>
  )
}

const Navbar = () => {
  return(
    <div>
      <ReactBootStrap.Navbar collapseOnSelect expand="md" bg="primary" variant="dark">
        <ReactBootStrap.Navbar.Brand href="#home">George's Hacker Stories</ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="me-auto">
            <ReactBootStrap.Nav.Link href="#features">Home</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#pricing">Search</ReactBootStrap.Nav.Link>
            <ReactBootStrap.NavDropdown title="More" id="collasible-nav-dropdown">
              <ReactBootStrap.NavDropdown.Item href="#action/3.1">Link 1</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action/3.2">Link 2</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action/3.3">Link 3</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>
          </ReactBootStrap.Nav>
          <ReactBootStrap.Nav>
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
