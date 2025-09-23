

import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>
                Total Counter{count}
            </h1>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}
export default Counter;


