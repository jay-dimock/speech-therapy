import React from 'react';
import { Card } from '@material-ui/core'

class Timer extends React.Component {
    render () {
        return (
            <Card style={{maxWidth:"100px", margin:"0 auto 15px auto"}}>
                <h1>0:60</h1>
            </Card>
        )
    }
}

export default Timer;