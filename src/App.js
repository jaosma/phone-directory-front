import React from 'react';
import NumberForm from './components/NumberForm'
import ViewDirectory from './components/ViewDirectory'
import numberService from './services/numbers'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber:''
    }
  }

  addPerson = (event) => {
    event.preventDefault()
    for (let index = 0; index < this.state.persons.length; index++) {
        if (this.state.persons[index].name.includes(this.state.newName)) {
            return;
        }
    }

        const personObject = {
            name: this.state.newName,
            number: this.state.newNumber
        }    
        
        numberService
        .create(personObject)
        .then(newPerson => {
        this.setState({
            persons: this.state.persons.concat(newPerson),
            newName: '',
            newNumber: ''
          })
        }) 
    }

  handleNameChange = (event) => {
    console.log(event.target.value)
    this.setState({ newName: event.target.value})
  }

  handleNumberChange = (event) => {
    console.log(event.target.value)
    this.setState({ newNumber: event.target.value})
  }

  componentDidMount(){
    numberService
      .getAll()
      .then(response => {
        this.setState({ persons: response })
      })
  }

  deletePerson = (name) => {
    return () => {
      if (window.confirm(`poistetaanko ${name}`)) {
        const personToDelete = this.state.persons.find(p => p.name === name)

        numberService
          .remove(personToDelete.id)
          .then(response => {
            const persons = this.state.persons.filter(p => p.id !== personToDelete.id)
            this.setState({
              persons: persons
            })
          })
      }
    }
  }

  render() {
    return (
        <div>
        <h2>Puhelinluettelo</h2>
        <NumberForm
          addPerson={this.addPerson}
          newName={this.state.newName}
          handleNameChange={this.handleNameChange}
          newNumber={this.state.newNumber}
          handleNumberChange={this.handleNumberChange}
        />
        <h2>Numerot</h2>
        <ViewDirectory
          persons={this.state.persons}
          deletePerson={this.deletePerson}
        />
        </div>
    )
  }
}

export default App