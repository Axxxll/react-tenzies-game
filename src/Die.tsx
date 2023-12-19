import DieT from "./die.type";

function Die(props: DieT) {

    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }

    console.log('render')
    return (
        <div className="die-face" style={styles} onClick={props.hold}>
            <h2 className="die-num">
                {props.value}
            </h2>
        </div>
    )
}

export default Die