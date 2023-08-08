export default function About({blogLogo, about}){
    return (
        <aside>
            <img src={blogLogo ? blogLogo : "https://via.placeholder.com/215"} alt="blog logo"/>
            <p>{about}</p>
        </aside>
    )
}