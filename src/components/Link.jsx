import "./link.scss"
function Link({linkTo, children}) {
    return (
        <a className="links" href={linkTo}>
           {children} 
        </a>
    )
}

export default Link
