import React from 'react';
function FirstPara(props){
    return(
        <>
        <p>{props.content}</p>
        <p>{props.num}</p>
        </>
    );
}
export default FirstPara;