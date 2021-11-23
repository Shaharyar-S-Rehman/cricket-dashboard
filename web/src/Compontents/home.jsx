import axios from "axios";
import { useState, useEffect } from "react";
import io from 'socket.io-client';
const dev = "http://localhost:5001"
const baseUrl = window.location.hostname.split(":")[0] === "localhost" ? dev : "";
function Home(){
    const [data, setData] = useState({})

    useEffect(()=>{
        axios.get(`${baseUrl}/api/v1/posts`)
        .then((res)=>{
            console.log(res.data);
            setData(res.data);
        })
        .catch((e)=>{
            console.log(e.message)
        })
    }, [])

    useEffect(() => {
    const socket = io(baseUrl); // to connect with locally running Socker.io server

    socket.on('connect', function () {
        console.log("connected to server")
    });
    socket.on('disconnect', function (message) {
        console.log("disconnected from server: ", message);
    });
    socket.on('Cricket', (obj)=> {
        console.log(obj);
        setData(obj)
    });

    return () => {
        socket.close();
    };
}, []);
return(
    <div>
    <h2 style={{textAlign:"center", textDecoration:"5px brown underline"}}>
       {data?.tournament} 
    </h2>
    <h3 style={{textAlign:"center"}}> {data?.inning} </h3>
    <h3 style={{textAlign:"center"}}>Date: {data?.date}</h3>
    <h3 style={{textAlign:"center"}}>Headline: {data?.headline}</h3>
    <h3 style={{textAlign:"center"}}>Toss: {data?.toss}</h3>
    <ul style={{textAlign:"center"}}>
        <h3 style={{textAlign:"center" , textDecoration:"5px brown underline"}}>{data?.teamOne}</h3>
        <li style={{textAlign:"center", listStyleType:"none"}}> <h4>Score: {data?.scoreOne}/{data?.wicketsOne} </h4></li>
        <li style={{textAlign:"center", listStyleType:"none" }}><h3>Over: {data?.oversOne}</h3></li>
        <li style={{textAlign:"center", listStyleType:"none"}} ><h3> {data?.batsmanOne}*: {data?.batsmanOneRun}/{data?.batsmanOneBall}</h3></li>
        <li style={{textAlign:"center", listStyleType:"none"}}><h3> {data?.batsmanTwo}: {data?.batsmanTwoRun}/{data?.batsmanTwoBall}</h3></li>
    </ul>
    <ul style={{textAlign:"center"}}>
        <h3 style={{textAlign:"center", textDecoration:"5px brown underline",}}>{data?.teamTwo}</h3>
        <li style={{textAlign:"center", listStyleType:"none"}}><h3> Score: {data?.scoreTwo}/{data?.wicketsTwo}</h3></li>
        <li style={{textAlign:"center", listStyleType:"none"}}><h3> Over: {data?.overTwo}</h3></li>
        <li style={{textAlign:"center", listStyleType:"none"}}><h3> Bowler One: {data?.bowlerOne}: {data?.bowlerOneRun}/{data?.bowlerOneBall} - {data?.bowlerOneWickets} Wickets</h3></li>
        <li style={{textAlign:"center", listStyleType:"none"}}><h3> Bowler Two: {data?.bowlerTwo}: {data?.bowlerTwoRun}/{data?.bowlerTwoBall} - {data?.bowlerTwoWickets} Wickets</h3></li>
    </ul>
    <br />
    
    </div>
)
}
export default Home;