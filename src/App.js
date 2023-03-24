import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape/Rodape';
import Time from './componentes/Time/Time';

function App() {
  const times=[
    {
      nome:"Programação",
      corPrimarias:"#57C278",
      corSecundarias:"#D9F7E9"
    },
    {
      nome:"Front-End",
      corPrimarias:"#82CFFA",
      corSecundarias:"#E8F8FF"
    },
    {
      nome:"Data Science",
      corPrimarias:"#A6D157",
      corSecundarias:"#F0F8E2"
    },
    {
      nome:"Devops",
      corPrimarias:"#E06B69",
      corSecundarias:"#FDE7E8"
    },
    {
      nome:"UX e Design",
      corPrimarias:"#D86EBF",
      corSecundarias:"#FAE9F5"
    },
    {
      nome:"Mobile",
      corPrimarias:"#FFBA05",
      corSecundarias:"#FFF5D9"
    },
    {
      nome:"Inovação e Gestão",
      corPrimarias:"#FF8A29",
      corSecundarias:"#FFEEDF"
    },
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
  
    
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario nomeTimes={times.map(time=>time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      {times.map(time => <Time
       key={time.nome}
       nome={time.nome} 
       corPri={time.corPrimarias}
      corSecun={time.corSecundarias}
      colaboradores={colaboradores.filter(colaborador=>colaborador.time===time.nome)}/>)}
      <Rodape/>
    </div>
  );
}

export default App;
