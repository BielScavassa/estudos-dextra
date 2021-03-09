import * as React from  'react';
import {Child} from './Child';

const Parent = () => {
    return <Child color="red" onClick={() => console.log('Clicked !')}>
        <h1>Teste Child !</h1>
    </Child>
};

export default Parent;