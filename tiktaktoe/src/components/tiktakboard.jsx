import React, { useState } from 'react'

const Tiktak = () => {
    const [box,setBox]=useState(new Array(9).fill(""));
    const[turn,setTurn]=useState(1);
    const[X,setX]=useState(false)
    const[Y,setY]=useState(false)

    const winPattern=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    function winner(sq){
        for(let i=0; i<winPattern.length; i++){
            const [a,b,c]=winPattern[i];
            if(sq[a]&&sq[a]===sq[b]&&sq[a]===sq[c]){
                return sq[a]
            }
        }
        return null;
    }

    function brd(){
        let a;
        const win=winner(box);
        if(win){
            a="Player"+win+"won"
            
        }
        
    }
    const clickHandler=(index)=>{

        if(box[index]==""){
            if(turn===1){
                setX(true);
                setTurn(2);

            }
            else if(turn==2){
                setX(false);
                setY(true);
            }

        }
    }
  return (
    <div className='tikBoard'>
        
        {
            box.map((val,index)=>(
                <buton className="BOX" key={index} onClick={()=>clickHandler(index)} >{X&&`X`}</buton>
            ))
        }
    </div>
  )
}

export default Tiktak;