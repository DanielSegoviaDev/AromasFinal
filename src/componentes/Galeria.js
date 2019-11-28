import React,{Component} from 'react';

import Galeria_1 from '../imagenes/galeria/Galeria_1.jpg'; 
import Galeria_2 from '../imagenes/galeria/Galeria_2.jpg'; 
import Galeria_3 from '../imagenes/galeria/Galeria_3.jpg'; 
import Galeria_4 from '../imagenes/galeria/Galeria_4.jpg'; 
import Galeria_5 from '../imagenes/galeria/Galeria_5.jpg'; 
import Galeria_6 from '../imagenes/galeria/Galeria_6.jpg'; 
import InfoProductos from './InfoProductos';
import InfoProducto1 from './InfoProducto1';
import InfoProducto2 from './InfoProducto2';
import InfoProducto3 from './InfoProducto3';
import InfoProducto4 from './InfoProducto4';
import InfoProducto5 from './InfoProducto5';



class Galeria extends Component
{
    constructor()
    {
        super();
        this.state= {
            mostrar0: false,
            mostrar1: false,
            mostrar2: false,
            mostrar3: false,
            mostrar4: false,
            mostrar5: false
        }
    }

        mostrar0()
        {
            this.setState({mostrar0: true})
        }
        ocultar0()
        {
            this.setState({mostrar0: false})
        }
        mostrarInfoProductos0()
        {
            if(this.state.mostrar0)
            {
                return(<InfoProductos visible={true} ocultar0={this.ocultar0.bind(this)}/>)
            }
            else
            {
                return(<InfoProductos visible={false} ocultar0={this.ocultar0.bind(this)}/>)
            }
        }

        mostrar1()
        {
            this.setState({mostrar1: true})
        }
        ocultar1()
        {
            this.setState({mostrar1: false})
        }
        mostrarInfoProductos1()
        {
            if(this.state.mostrar1)
            {
                return(<InfoProducto1 visible={true} ocultar1={this.ocultar1.bind(this)}/>)
            }
            else
            {
                return(<InfoProducto1 visible={false} ocultar1={this.ocultar1.bind(this)}/>)
            }
        }

        mostrar2()
        {
            this.setState({mostrar2: true})
        }
        ocultar2()
        {
            this.setState({mostrar2: false})
        }
        mostrarInfoProductos2()
        {
            if(this.state.mostrar2)
            {
                return(<InfoProducto2 visible={true} ocultar2={this.ocultar2.bind(this)}/>)
            }
            else
            {
                return(<InfoProducto2 visible={false} ocultar2={this.ocultar2.bind(this)}/>)
            }
        }

        mostrar3()
        {
            this.setState({mostrar3: true})
        }
        ocultar3()
        {
            this.setState({mostrar3: false})
        }
        mostrarInfoProductos3()
        {
            if(this.state.mostrar3)
            {
                return(<InfoProducto3 visible={true} ocultar3={this.ocultar3.bind(this)}/>)
            }
            else
            {
                return(<InfoProducto3 visible={false} ocultar3={this.ocultar3.bind(this)}/>)
            }
        }

        mostrar4()
        {
            this.setState({mostrar4: true})
        }
        ocultar4()
        {
            this.setState({mostrar4: false})
        }
        mostrarInfoProductos4()
        {
            if(this.state.mostrar4)
            {
                return(<InfoProducto4 visible={true} ocultar4={this.ocultar4.bind(this)}/>)
            }
            else
            {
                return(<InfoProducto4 visible={false} ocultar4={this.ocultar4.bind(this)}/>)
            }
        }

        mostrar5()
        {
            this.setState({mostrar5: true})
        }
        ocultar5()
        {
            this.setState({mostrar5: false})
        }
        mostrarInfoProductos5()
        {
            if(this.state.mostrar5)
            {
                return(<InfoProducto5 visible={true} ocultar5={this.ocultar5.bind(this)}/>)
            }
            else
            {
                return(<InfoProducto5 visible={false} ocultar5={this.ocultar5.bind(this)}/>)
            }
        }

    render()
    {
        return(
            <div className="galeria" >
                <div className="linea" id="Productos"></div>
                <h2 data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1500">- Nuestros Productos -</h2>
                <div className="contenedor_imagenes">
                    
                    <div className="imagen">
                        <img src={Galeria_1} alt="Producto" className="image" />
                        <div className="overlay" >
                        
                            <h2>Esencias de Hornitos</h2>
                            <button className="btn-abrir-popup" onClick={this.mostrar0.bind(this)}></button>
                        </div>
                        
                    </div>
                
                    <div className="imagen">
                        <img src={Galeria_2} alt="Producto" className="image" />
                        <div className="overlay">
                            <h2>Hornitos</h2>
                            <button className="btn-abrir-popup" onClick={this.mostrar1.bind(this)}></button>
                        </div>
                    </div>

                    <div className="imagen">
                        <img src={Galeria_3} alt="Producto" className="image" />
                        <div className="overlay">
                            <h2>Sahumerios</h2>
                            <button className="btn-abrir-popup" onClick={this.mostrar2.bind(this)}></button>
                        </div>
                    </div>
                
                
                    <div className="imagen">
                        <img src={Galeria_4} alt="Producto" className="image" />
                        <div className="overlay">
                            <h2>Difusores</h2>
                            <button className="btn-abrir-popup" onClick={this.mostrar3.bind(this)}></button>
                        </div>
                    </div>

                    <div className="imagen">
                        <img src={Galeria_5} alt="Producto" className="image" />
                        <div className="overlay">
                        <h2>Productos Artesanales</h2>
                        <button className="btn-abrir-popup" onClick={this.mostrar4.bind(this)}></button>
                        </div>
                    </div>

                    <div className="imagen">
                        <img src={Galeria_6} alt="Producto" className="image" />
                        <div className="overlay">
                        <h2>Perfumes</h2>
                        <button className="btn-abrir-popup" onClick={this.mostrar5.bind(this)}></button>
                        </div>
                    </div>   
                    
                    {this.mostrarInfoProductos0()}
                    {this.mostrarInfoProductos1()}
                    {this.mostrarInfoProductos2()}
                    {this.mostrarInfoProductos3()}   
                    {this.mostrarInfoProductos4()}
                    {this.mostrarInfoProductos5()}   
                </div>                                       
            </div>

        );
    }
}

export default Galeria;