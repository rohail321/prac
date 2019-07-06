import React, { Component } from 'react';
import './form.css';
class Resturant extends Component{
    static defaultProps={menu:[
        {type:"P" ,name:"biryani",price:200},
        {type:"P" ,name:"tikka",price:200},
        {type:"P" ,name:"korma",price:200},
        {type:"P" ,name:"nihari",price:200},
        {type:"P" ,name:"alooparatha",price:200},
        {type:"P" ,name:"paulao",price:250},
        {type:"P" ,name:"saji",price:2000},
        {type:"P" ,name:"ban kabab",price:320},
        {type:"C" ,name:"chicken showmen",price:500},
        {type:"C" ,name:"dumpling",price:400},
        {type:"C" ,name:"ramne noodle",price:100},
        {type:"C" ,name:"dumpling",price:400},
        {type:"C" ,name:"Spicy Tofu",price:10},
        {type:"C" ,name:"Egg-Fried Rice",price:100},
        {type:"C" ,name:"Kung Pao Chicken",price:300},
        {type:"C" ,name:"Wonton Soup",price:800},
        {type:"C" ,name:"Spring Rolls",price:90},
        {type:"C" ,name:" Monchow Soup",price:40},
        {type:"C" ,name:"Egg Noodles",price:89},



    ]}
    

     menu=()=>{
         let pakmenu=[];
         let Chinesemenu=[];
         pakmenu=this.props.menu.map((m)=>{
             if(m.type==='P' ){
                 
                return m;

             }
             
            
            
         })

         let filtePakmenu=pakmenu.filter((u)=>{
            return u!==undefined;
        })
         
         Chinesemenu=this.props.menu.map((m)=>{
            if(m.type==='C' ){
                
               return m ;

            }
           
           
        })

        let filterChinesemenu=Chinesemenu.filter((u)=>{
            return u!==undefined;
        })
        //  console.log(filterChinesemenu);
         

            }
         
         
         

     

    



    render(){
        this.menu();
        return(<div className="container">
        
        {this.props.menu.map((m)=>(
            
        <div>
            
            {m.type==='P'?<div><label>Pakistani menu<br/>{m.name}:</label><p>{m.price}</p></div>:''}
            </div>
            ))}

            {this.props.menu.map((m)=>(
            
            <div>
                {m.type==='C'?<div><label>Chinese menu<br/>{m.name}:</label><p>{m.price}</p></div>:''}
                </div>
                ))}


               
        </div>);

    }
}

export default Resturant;