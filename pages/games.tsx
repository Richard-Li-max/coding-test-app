import Link from 'next/link'

export default function Games(){
    return(
        <div>
            <h1>My current favorite video games:</h1>
            <h4>Minecraft</h4>
            <h4>League of Legends</h4>
            <h4>Geometry Dash</h4>
            <h4>Terraria</h4>
            <h4>Minecraft Dungeons</h4>
            <Link href='/'>Go back to the home page</Link>
        </div>
    )
}