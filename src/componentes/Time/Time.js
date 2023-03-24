import Colaborador from "../Colaborador/Colaborador"
import "./Time.css"
const Time =(props)=>{
return(
    (props.colaboradores.length>0) &&
    <section className='time' style={{backgroundColor:props.corSecun}}>
        <h3 style={{borderColor:props.corPri}}>{props.nome}</h3>
        <div className="colaboradores">
{props.colaboradores.map(colaborador=><Colaborador corDeFundo={props.corPri} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
   </div>
    </section>
)
}




export default Time 