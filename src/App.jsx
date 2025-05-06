import { useState } from "react"
import axios from "axios"
import "./App.css"
import rtx from '/rtx5090.jpg'
import razer from '/razer.jpg'
import rog from '/rog.jpg'
import ryzen from '/ryzen.jpeg'
import victus from '/victus.jpg'

function App() {
    const [mostrarModal, setMostrarModal] = useState(false)

    const [usuarioInicio, setUsuarioInicio] = useState("")
    const [contrasena, setContrasena] = useState("")
    const [usuarioMensaje, setUsuarioMensaje] = useState("")
    const [mensaje, setMensaje] = useState("")

    const registrarUsuario = async () => {
        try {
            const respuesta = await axios.post("https://clark-web-production.up.railway.app/api/registrar", {
                usuario: usuarioInicio,
                contrasena: contrasena,
            })
            alert(respuesta.data.mensaje)
        } catch (error) {
            alert("Error al registrar usuario")
        }
    }

    const enviarMensaje = async (evento) => {
        evento.preventDefault()
        try {
            const respuesta = await axios.post("https://clark-web-production.up.railway.app/api/contacto", {
                usuario: usuarioMensaje,
                mensaje: mensaje,
            })
            alert(respuesta.data.mensaje)
        } catch (error) {
            alert("Error al enviar el mensaje")
        }
    }

    return (
        <div className="contenedor">
            {/* Cabecera */}
            <header className="cabecera">
                <div className="logo">CLARK</div>

                <div className="buscador">
                    <input type="text" placeholder="buscar" />
                    <button>buscar</button>
                </div>

                <button className="botonSesion" onClick={() => setMostrarModal(true)}>
                    Iniciar sesión
                </button>
            </header>

            {/* Banner principal */}
            <div className="banner">
                <h1>lo mejor de pc calidad precio</h1>
                <p>El poder definitivo para overclockers y entusiastas</p>
            </div>

            {/* Sección de productos */}
            <section className="seccionProductos">
                <h2>Nuestros Productos</h2>

                <div className="listaProductos">
                    
                    <div className="tarjetaProducto">
                        <img src={rtx}/>
                        <h3>RTX 5090</h3>
                        <p className="precio"></p>
                        <button className="botonCarrito">comprar</button>
                    </div>

                    <div className="tarjetaProducto">
                        <img src={razer}/>
                        <h3>Razer Blade 17</h3>
                        <p className="precio"></p>
                        <button className="botonCarrito">comprar</button>
                    </div>

                    <div className="tarjetaProducto">
                        <img src={rog}/>
                        <h3>Rog Strix G16</h3>
                        <p className="precio"></p>
                        <button className="botonCarrito">comprar</button>
                    </div>

                    <div className="tarjetaProducto">
                        <img src={victus}/>
                        <h3>Victus</h3>
                        <p className="precio"></p>
                        <button className="botonCarrito">comprar</button>
                    </div>
                    <div className="tarjetaProducto">
                        <img src={ryzen}/>
                        <h3>Ryzen</h3>
                        <p className="precio"></p>
                        <button className="botonCarrito">comprar</button>
                    </div>
                    
                </div>
            </section>

            {/* Formulario para el contacto */}
            <section className="seccionContacto">
                <h2>Contactanos</h2>
                <form className="formularioContacto" onSubmit={enviarMensaje}>
                    <div className="campoFormulario">
                        <label>Usuario</label>
                        <input
                            type="text"
                            placeholder="Tu nombre de usuario"
                            value={usuarioMensaje}
                            onChange={(e) => setUsuarioMensaje(e.target.value)}
                        />
                    </div>
                    <div className="campoFormulario">
                        <label>Mensaje</label>
                        <textarea
                            placeholder="Escribe tu mensaje aquí"
                            rows={4}
                            value={mensaje}
                            onChange={(e) => setMensaje(e.target.value)}
                        ></textarea>
                    </div>
                    <button type="submit" className="botonEnviar">
                        Enviar mensaje
                    </button>
                </form>
            </section>

            {/* Pie de página */}
            <footer className="piePagina">
                <p>2025 YURAK Todos los derechos reservados</p>
            </footer>

            {/* Modal de inicio de sesión */}
            {mostrarModal && (
                <div className="fondoModal" onClick={() => setMostrarModal(false)}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <button className="cerrarModal" onClick={() => setMostrarModal(false)}>
                            ×
                        </button>
                        <h2>Iniciar Sesión</h2>
                        <form className="formularioLogin">
                            <div className="campoFormulario">
                                <label>Usuario</label>
                                <input
                                    type="text"
                                    placeholder="Ingresa tu usuario"
                                    value={usuarioInicio}
                                    onChange={(e) => setUsuarioInicio(e.target.value)}
                                />
                            </div>
                            <div className="campoFormulario">
                                <label>Contraseña</label>
                                <input
                                    type="password"
                                    placeholder="Ingresa tu contraseña"
                                    value={contrasena}
                                    onChange={(e) => setContrasena(e.target.value)}
                                />
                            </div>
                            <div className="botonesFormulario">
                                <button type="button" className="botonRegistrar" onClick={registrarUsuario}>
                                    Registrar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

export default App
