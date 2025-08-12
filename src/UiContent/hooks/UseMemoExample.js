import React, {useState, useMemo} from "react";
export default function UseMemoExample (){
    const [count, setCount] = useState(0);
    const [other,setOther] = useState(0);

    //expensive calculation

    const doubleCount = useMemo(() => {
        console.log("Doing big calculation...");
        return count * 2;
    }, [count]);  
    // only recalculates when  'count'  changes

return(
    <div>
        <h2>Count: {count}</h2>
        <h2>Double: {doubleCount}</h2>
        <h2>Other: {other}</h2>

    <button onClick={() => setCount(count + 1 ) }>Increase Count</button>
    <button onClick={() => setOther(other + 1)}>Increase Other</button>

    </div>
);
}
