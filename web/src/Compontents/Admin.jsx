import React, { useEffect, useState } from 'react';
import axios from 'axios';

const dev = "http://localhost:5001"
export const baseUrl = window.location.hostname.split(":")[0] === "localhost" ? dev : "";
function AdminPanel() {
    const [fields, setFields] = useState({
        tournament: '',
        date: '',
        inning: '',
        teamOne: '',
        teamTwo: '',
        scoreOne: '',
        wicketsOne: '',
        scoreTwo: '',
        wicketsTwo: '',
        oversOne: '',
        overTwo: '',
        batsmanOne: '',
        batsmanOneRun: '',
        batsmanOneBall: '',
        batsmanTwo: '',
        batsmanTwoRun: '',
        batsmanTwoBall: '',
        bowlerOne: '',
        bowlerOneRun: '',
        bowlerOneBall: '',
        bowlerOneWickets: '',
        bowlerTwo: '',
        bowlerTwoRun: '',
        bowlerTwoBall: '',
        bowlerTwoWickets: '',
        toss: '',
        headline: ''
    })
    const submit = () => {

        axios.post(`${baseUrl}/api/v1/cricket`, fields)
            .then((res) => {
                console.log("res: ", res.data);
            })
            .catch((e) => {
                console.log(e.message)
            })
    }
    useEffect(() => {
        axios.get(`${baseUrl}/api/v1/posts`)
            .then((res) => {
                console.log(res.data);
                setFields(res.data)
            })
            .catch((e) => {
                console.log(e.message)
            })
        return () => {
            console.log('cleanup')
        }
    }, [])
    return (
        <div>
            {/* <h1>Sign Up</h1> */}

            <label htmlFor="tournament">Tournament: </label>
            <input value={fields.tournament} id="tournament" name="tournament" placeholder="Tournament"
                onChange={
                    (e) => {
                        setFields((perv) => {
                            return { ...perv, tournament: e.target.value }
                        })
                    }
                }
            />
            <br />

            <label htmlFor="inning">Inning: </label>
            <input value={fields.inning} id="inning" name="inning" placeholder="Inning"
                onChange={
                    (e) => {
                        setFields((perv) => {
                            return { ...perv, inning: e.target.value }
                        })
                    }
                } />
            <br />

            <label htmlFor="date">Date: </label>
            <input value={fields.date}
                id="date"
                name="date"
                placeholder="date"
                type="date"
                onChange={
                    (e) => {
                        setFields((perv) => {
                            return { ...perv, date: e.target.value }
                        })
                    }
                }
            />
            <br />

            <label htmlFor="teamOne">Team One: </label>
            <input value={fields.teamOne} id="teamOne" name="teamOne" placeholder="Team One"
                onChange={
                    (e) => {
                        setFields((perv) => {
                            return { ...perv, teamOne: e.target.value }
                        })
                    }
                } />
            <br />

            <label htmlFor="teamTwo">Team Two: </label>
            <input value={fields.teamTwo} id="teamTwo" name="teamTwo" placeholder="Team Two"
                onChange={
                    (e) => {
                        setFields((perv) => {
                            return { ...perv, teamTwo: e.target.value }
                        })
                    }
                } />
            <br />

            <label htmlFor="toss">toss: </label>
            <input value={fields.toss} id="toss" name="toss" placeholder="toss"
                onChange={
                    (e) => {
                        setFields((perv) => {
                            return { ...perv, toss: e.target.value }
                        })
                    }
                } />
            <br />

            <label htmlFor="oversOne">Overs One: </label>
            <input value={fields.oversOne} id="oversOne" name="oversOne" placeholder="Overs One"
                onChange={
                    (e) => {
                        setFields((perv) => {
                            return { ...perv, oversOne: e.target.value }
                        })
                    }
                } />
            <br />

            <label htmlFor="overTwo">Overs Two: </label>
            <input value={fields.overTwo} id="overTwo" name="overTwo" placeholder="Overs Two"
                onChange={
                    (e) => {
                        setFields((perv) => {
                            return { ...perv, overTwo: e.target.value }
                        })
                    }
                } />
            <br />

            <label htmlFor="headline">headline: </label>
            <input value={fields.headline} id="headline" name="headline" placeholder="headline"
                onChange={
                    (e) => {
                        setFields((perv) => {
                            return { ...perv, headline: e.target.value }
                        })
                    }
                } />
            <br />

            <label htmlFor="scoreOne">Score One: </label>
            <input type="number" onChange={
                (e) => {
                    setFields((perv) => {
                        return { ...perv, scoreOne: e.target.value }
                    })
                }
            } value={fields.scoreOne} id="scoreOne" name="scoreOne" placeholder="Score One" />
            <br />

            <label htmlFor="wicketsOne">Wickets One: </label>
            <input value={fields.wicketsOne} id="wicketsOne" name="wicketsOne" placeholder="Wickets One"
                onChange={
                    (e) => {
                        setFields((perv) => {
                            return { ...perv, wicketsOne: e.target.value }
                        })
                    }
                } />
            <br />

            <label htmlFor="scoreTwo">Score Two: </label>
            <input value={fields.scoreTwo} id="scoreTwo" name="scoreTwo" placeholder="Score Two"
                onChange={
                    (e) => {
                        setFields((perv) => {
                            return { ...perv, scoreTwo: e.target.value }
                        })
                    }
                } />
            <br />

            <label htmlFor="wicketsTwo">Wickets Two: </label>
            <input value={fields.wicketsTwo} id="wicketsTwo" name="wicketsTwo" placeholder="Wickets Two"
                onChange={
                    (e) => {
                        setFields((perv) => {
                            return { ...perv, wicketsTwo: e.target.value }
                        })
                    }
                } />
            <br />
            <h1>Batsman One</h1>
            <label htmlFor="batsmanOne">Name: </label>
            <input value={fields.batsmanOne} id="batsmanOne" name="batsmanOne" placeholder="batsman One"

                onChange={
                    (e) => {
                        setFields((perv) => {
                            return { ...perv, batsmanOne: e.target.value }
                        })
                    }
                } />
            <br />

            <label htmlFor="batsmanOneRun">Run: </label>
            <input value={fields.batsmanOneRun} id="batsmanOneRun" name="batsmanOneRun" placeholder="batsman One Run" type="number"

                onChange={
                    (e) => {
                        setFields((perv) => {
                            return { ...perv, batsmanOneRun: e.target.value }
                        })
                    }
                } />
            <br />

            <label htmlFor="batsmanOneBall">Ball: </label>
            <input value={fields.batsmanOneBall} id="batsmanOneBall" name="batsmanOneBall" placeholder="batsman One Ball" type="number"

                onChange={
                    (e) => {
                        setFields((perv) => {
                            return { ...perv, batsmanOneBall: e.target.value }
                        })
                    }
                } />

            <br />
            <h1>Batsman Two</h1>
            <label htmlFor="batsmanTwo">Name: </label>
            <input value={fields.batsmanTwo} id="batsmanTwo" name="batsmanTwo" placeholder="batsman Two"
                onChange={
                    (e) => {
                        setFields((perv) => {
                            return { ...perv, batsmanTwo: e.target.value }
                        })
                    }
                }
            />
            <br />

            <label htmlFor="batsmanTwoRun">Run: </label>
            <input value={fields.batsmanTwoRun} id="batsmanTwoRun" name="batsmanTwoRun" placeholder="batsman Two Run" type="number"

                onChange={
                    (e) => {
                        setFields((perv) => {
                            return { ...perv, batsmanTwoRun: e.target.value }
                        })
                    }
                } />
            <br />

            <label htmlFor="batsmanTwoBall">Ball: </label>
            <input value={fields.batsmanTwoBall} id="batsmanTwoBall" name="batsmanTwoBall" placeholder="batsman Two Ball" type="number"

                onChange={
                    (e) => {
                        setFields((perv) => {
                            return { ...perv, batsmanTwoBall: e.target.value }
                        })
                    }
                } />
            <br />
            <h1>Bowler One</h1>
            <label htmlFor="bowlerOne">bowler One: </label>
            <input value={fields.bowlerOne} id="bowlerOne" name="bowlerOne" placeholder="bowler One"
                onChange={
                    (e) => {
                        setFields((perv) => {
                            return { ...perv, bowlerOne: e.target.value }
                        })
                    }
                } />
            <br />

            <label htmlFor="bowlerOneRun">Run: </label>
            <input value={fields.bowlerOneRun} id="bowlerOneRun" name="bowlerOneRun" placeholder="bowler One Run" type="number"
                onChange={
                    (e) => {
                        setFields((perv) => {
                            return { ...perv, bowlerOneRun: e.target.value }
                        })
                    }
                } />
            <br />

            <label htmlFor="bowlerOneBall">Ball: </label>
            <input value={fields.bowlerOneBall} id="bowlerOneBall" name="bowlerOneBall" placeholder="bowler One Ball" type="number"
                onChange={
                    (e) => {
                        setFields((perv) => {
                            return { ...perv, bowlerOneBall: e.target.value }
                        })
                    }
                } />
            <br />

            <label htmlFor="bowlerOneWickets">Wicket: </label>
            <input value={fields.bowlerOneWickets} id="bowlerOneWickets" name="bowlerOneWickets" placeholder="bowler One Wickets" type="number"
                onChange={
                    (e) => {
                        setFields((perv) => {
                            return { ...perv, bowlerOneWickets: e.target.value }
                        })
                    }
                } />
            <br />
            <h1>Bowler Two</h1>
            <label htmlFor="bowlerTwo">Name: </label>
            <input value={fields.bowlerTwo} id="bowlerTwo" name="bowlerTwo" placeholder="bowler Two"
                onChange={
                    (e) => {
                        setFields((perv) => {
                            return { ...perv, bowlerTwo: e.target.value }
                        })
                    }
                } />
            <br />

            <label htmlFor="bowlerTwoRun">Run: </label>
            <input value={fields.bowlerTwoRun} id="bowlerTwoRun" name="bowlerTwoRun" placeholder="bowler Two Run" type="number"
                onChange={
                    (e) => {
                        setFields((perv) => {
                            return { ...perv, bowlerTwoRun: e.target.value }
                        })
                    }
                } />
            <br />

            <label htmlFor="bowlerTwoRunBall">Ball: </label>
            <input value={fields.bowlerTwoBall} id="bowlerTwoBall" name="bowlerTwoBall" placeholder="bowler Two Ball" type="number"
                onChange={
                    (e) => {
                        setFields((perv) => {
                            return { ...perv, bowlerTwoBall: e.target.value }
                        })
                    }
                } />
            <br />

            <label htmlFor="bowlerTwoRunBowlWickets">Wicket: </label>
            <input value={fields.bowlerTwoWickets} id="bowlerTwoWickets" name="bowlerTwoWickets" placeholder="bowler Two Wickets" type="number"
                onChange={
                    (e) => {
                        setFields((perv) => {
                            return { ...perv, bowlerTwoWickets: e.target.value }
                        })
                    }
                } />

<br />
            <button onClick={submit} >Submit</button>

        </div >
    )
}
export default AdminPanel;