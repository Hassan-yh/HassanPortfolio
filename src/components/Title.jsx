import "./title.scss"
function Title({number, children}) {
    return (
        <div className="title">
            <span className="number">{number}.</span>
            <p className="text">{children}</p>
            <div className="line"></div>
        </div>
    )
}

export default Title
