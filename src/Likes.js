function Likes(props){
    return (
        <>
        <div style={{overflow: "none",height:"30px",width:"400px",
        padding:"20px"}}>
            <img src={props.image} alt="Avatar" height="30px" 
            style={{float:"left",borderRadius:"50%",marginTop:"10px",marginRight:"10px"}}  />
                <p style={{marginTop:"-3px","margin":"12px","padding":"0px"}}>{props.no}</p>
            
        </div>

        </>
    )
}

export default Likes; 