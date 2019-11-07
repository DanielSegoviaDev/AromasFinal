import React from 'react';
import Sandra from '../imagenes/Sandra.jpeg';

function Nosotros(){
    return(
        <section id="main">
        <div class="container">
           <article id="main-col">
                <h1 class="page-title">Sobre Nosotros</h1>
                    <p>
                        Aromas Del ArcoIris, Aromaterapia artensanal es una linea diseñada para trabajar las emociones a travez de los aromas y los colores. Es un paseo a travez de las sensaciones aromaticas.Es una ayuda diaria en este camino que es la vida, es el placer que producen el color y el aroma juntos
                    </p>
                    <p>        
                        Este emprendimiento que comenzo a hace mas de 10 años, no solo es una simple manera de pasar mi tiempo, es parte de mi vida, es mi manera de expresarme, es lo que me gusta hacer, por lo tanto, trato de hacer conocer los productos para que aquellas personas interesadas en ellos, sepan de que se trata CADA UNO, para que sirven, como se usan y que efectos causan en nuestras emociones y en nuestro cuerpo.
                    </p>

                    <img id="sandra" src={Sandra} alt="Sandra Mirabello, la dueña"></img>
           </article>
        
           <aside id="sidebar">
                <div class="dark">
                    <h3>What We Do</h3>
                    <p> Praesent ornare mi sed lobortis mattis. Donec orci lectus, tempor quis dictum et, pulvinar sodales dui. Vivamus accumsan turpis at gravida hendrerit. Vivamus ipsum quam, tempor eu ornare nec, molestie vehicula diam. Aliquam eget efficitur nisi, at ultricies metus. Vivamus sed viverra felis, vitae tempus enim. Duis eget placerat felis, et dictum urna. Pellentesque quis vulputate lorem. Aliquam consequat suscipit pretium.</p>
                </div>
            </aside>
        </div>
    </section> 
    )
}

export default Nosotros;