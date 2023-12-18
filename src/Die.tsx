import DieT from "./die.type";

function Die(props: DieT) {

    console.log('render')
    return (
        <p>
            {props.value}
        </p>
    )
}

export default Die