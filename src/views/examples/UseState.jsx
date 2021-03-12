import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const UseState = (props) => {

    const [count, setCount] = useState(0)

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />
            
        </div>
    )
}

export default UseState
