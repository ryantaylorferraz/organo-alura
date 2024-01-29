import "./CampoTexto.css"
const CampoTexto = (props) => {
    const placeholderModificada = `${props.placeholder}...`
    // let valor = ""

    const aoDigitado = (event) => {
        props.aoAlterado(event.target.value)
    }
    return (
        <div className="campo-texto">
            <label >
                {props.label}
                </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto