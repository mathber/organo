import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {

  const teams = [
    {
      name: 'Programação',
      primaryColor: '#57C278',
      secundaryColor: '#D9F7E9',
    },
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secundaryColor: '#E8F8FF',
    },
    {
      name: 'Data Sciense',
      primaryColor: '#A6D157',
      secundaryColor: '#F0F8E2',
    },
    {
      name: 'Devops',
      primaryColor: '#E06B69',
      secundaryColor: '#FDE7E8',
    },
    {
      name: 'UX e Design',
      primaryColor: '#D86EBF',
      secundaryColor: '#FAE5F5',
    },
    {
      name: 'Mobile',
      primaryColor: '#FEBA05',
      secundaryColor: '#FFF5D9',
    },
    {
      name: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secundaryColor: '#FFEEDF',
    }

  ]

  const [students, setStudents] = useState([])

  const onNewStudent = (student) => {
    console.log(student);
    setStudents([...students, student])
  }

  return (
    <div>
      <Banner />
      <Formulario teams={teams.map(team => team.name)} onSubmit={students => onNewStudent(students)} />
      {teams.map(team => <Team 
        key={team.name} 
        name={team.name} 
        primaryColor={team.primaryColor} 
        secundaryColor={team.secundaryColor}
        students={students.filter(student => student.team == team.name)}
      />)}
      <Footer/>

    </div>
  )
}

export default App
