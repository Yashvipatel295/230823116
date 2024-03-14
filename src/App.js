
import './App.css';
 //import Contact from './Contact.js';
import Likes from './Likes.js';
const mca=require('./mca.json')
// function App(props) {
//   return (
//     <>
//     <div style={{"backgroundColor":"pink","padding":"5px","marginTop":"10px"}}>
//       <p style={{"color":"white","fontSize":"10px","margin":"0px","padding":"0px"}}>{props.title}</p>      
//     </div>
//     <div style={{"backgroundColor":"green","padding":"10px"}}>
//       <p style={{"color":"white","fontSize":"10px","margin":"0px","padding":"0px"}}>{props.content}</p>
//     </div>
//     </>
//   );
// }

// function App(props){
//   console.log(mca)
//   return(
//     <>{
//      mca.map(function(facluty){
//       return <Contact image={`${facluty.image}`} name={facluty.name} description=
//       {`${facluty.description}
//       `} />
//      })
//     }
//         </>
//   );
// }

function App(props){
 // console.log(mca)
  return(
        <>{
      mca.map(function(like){
         return <Likes image={`${like.image}`} no={`${like.no}`} />
         })
     }
           </>
     );
    }
    
export default App;
