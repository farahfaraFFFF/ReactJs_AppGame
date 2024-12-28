// Jeu.js
import React from 'react';
import i from './R'; 
import './cssjeu.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default class Jeu extends React.Component{
    
            constructor(){
                super(); 
                this.state={face:0 , nombre_essaie:0 , image:i.imgvide , action:'Jouer' , bravo:''}
            }


            
            initialiser = () => {
                this.setState({face:0 , nombre_essaie:0 , image:i.imgvide , action:'Jouer' , bravo:''}) ;
            }
            Change = () => {
                this.state.nombre_essaie+=1
                //la méthode random 
                const min = 1;
                const max = 6;
                const r= Math.floor(Math.random() * (max - min + 1)) + min;
                this.setState({face:r , image:i[`img${r}`]}) ;

                
                if(r==6){
                    this.setState({ action:'Initialiser' , bravo:'Bravo ; vous avez trouvez la face cachée !!!...'}) ;
                }

                
           


                
            }

            render(){
                return (<div className='des-container'>  
                            <img src={i.img}></img>

                            <h1>Jeu de Dé ...</h1>
                            <p>Face : {this.state.face}</p>
                            <img src={this.state.image} className="mesure"></img>
                            <p>Nombre d'essaie: {this.state.nombre_essaie}</p>
                            <p id='color'>{this.state.bravo}</p>
                            <button className='btn btn-dark w-25' onClick={this.state.action === 'Initialiser' ? this.initialiser : this.Change}>{this.state.action}</button>

                            

                
                
                        </div>)
            }

            
}