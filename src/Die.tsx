import DieT from "./die.type";

function Die(props: DieT) {

    console.log('render')
    return (
        <div className="die-face">
            <h2 className="die-num">
                {props.value}
            </h2>
        </div>
    )
}

export default Die