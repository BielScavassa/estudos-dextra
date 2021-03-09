import * as React from  'react';

interface ChildProps {
    color: string,
    onClick: () => void;
}

export const Child: React.FC<ChildProps> = (props) =>{
    return <div>
        {props.color}
        <button onClick={props.onClick}>Click me</button>    
    </div>
};
