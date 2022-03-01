import "bootstrap/dist/css/bootstrap.css";

function Cabecera(props) {
    return (<header className="alert alert-info text-center">
        <h1 className="display-1">{props.titulo}</h1></header>)
}

export default Cabecera;