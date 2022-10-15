import Link from 'next/link';

export default function About(){
    return(
        <div><h1>About Me:</h1>
        <h4>I'm a sophomore at Jackson High School</h4>
        <h4>I live in Washington</h4>
        <h4>I'm 15 and I'm going to turn 16 in a few weeks.</h4>
        <h4>I love playing chess and I'm on the chess team at my school.</h4>
        <h2><Link href="/">Back to the home page</Link></h2></div>
        

    )
}