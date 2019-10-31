import React,  { useState } from 'react'

const Dashboard = () => {

    const [ball, setBall] = useState(0)
    const [strike, setStrike] = useState(0)
    const [reset, setReset] = useState(0)
 
    function addOne = item =>{
        return (
            item + 1
        )
    }

    function DoReset() {
        if(reset === 1) {
            setBall(0)
            setStrike(0)
            setReset(0)
        }
    }

    function BallAdd() {
        setBall(addOne(ball))
        if (ball === 4) {
            setBall(0)
        }
    }
    
    function StrikeAdd() {
        setStrike(addOne(strike)) 
        if (strike === 3) (
            setReset(1)
        )
    }
    
    function Fouler() {
        if (strike === 0 && foul === 1) {
            setStrike(1)
            setFoul(0)
        } else if (strike === 1 && foul === 1) {
            setStrike(2)
            setFoul(0)
        }  else if (strike === 2 && foul === 1 ) {
            setStrike(3)
            setFoul(0)
        }
    }

    return (
        <div>
    )
}