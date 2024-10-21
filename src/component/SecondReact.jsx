import style from "./style.module.css"

const SecondReact = ()=>{
    return (
        <div id={style.upperbox}>
            <div id={style.firstbox}>
                <p>Get 20% sell on all products</p>
                <h1>The Molti Online Store</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt et inventore ullam est necessitatibus commodi vitae ipsum provident labore illo placeat iure iusto atque consequatur reprehenderit, aperiam nulla ipsam obcaecati possimus odio explicabo fugit asperiores quo. Quae odio, ea quis eaque similique repellendus placeat vitae.</p>
                <button>Shop Products</button>
            </div>
            <div id={style.secbox}></div>
            
        </div>
    )
}

export default SecondReact