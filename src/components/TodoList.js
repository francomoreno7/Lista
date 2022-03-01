import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tareaNueva: "",
            tareas: [
                { id: 1, nombre: "Hacer Una Todo list", done: false },
                { id: 2, nombre: "Sacar a pasear al perro", done: false },
                { id: 3, nombre: "Hacer las compras", done: false }
            ]
        }
    }

    agregarTareaNueva() {
        if (this.state.tareaNueva.length>0){
        //el metodo setState, modifica la propiedad state
        //y provoca que el componente se vuelva a dibujar
        this.setState({
            tareas: [
                ...this.state.tareas,
                {
                    id: Math.max(0,...this.state.tareas.map((t)=>(t.id))) + 1,
                    nombre: this.state.tareaNueva,
                    done: false
                }
            ],
            tareaNueva:""
        })
    }
    }

    inputChange(evt) {
        this.setState({ tareaNueva: evt.target.value });
    }

    eliminarTarea(id){
        this.setState({
            tareas: this.state.tareas.filter((t) => (t.id !== id))
        })
    }

    render() {
        return (<div>
            <ul className="list-group">
                <li className="list-group-item active text-center">Lista de tareas</li>
                {
                    this.state.tareas.map((tarea) => (
                        <li key={tarea.id} className="list-group-item">
                            {tarea.nombre}
                            <button className="btn btn-danger rounded-circle float-end" onClick={()=>{this.eliminarTarea(tarea.id) }}>
                                &#128465;
                            </button>
                        </li>
                    ))
                }
                <li className="list-group-item">
                    <div className="input-group">
                        <input className="form-control" value={this.state.tareaNueva} placeholder="Ingrese una tarea nueva" type="text" onChange={(evt) => { this.inputChange(evt) }} />
                        <button className="btn btn-outline-primary" onClick={this.agregarTareaNueva.bind(this)} disabled={this.state.tareaNueva.length === 0}>
                            +
                        </button>
                    </div>
                </li>
            </ul>
        </div>)
    }
}

export default TodoList;