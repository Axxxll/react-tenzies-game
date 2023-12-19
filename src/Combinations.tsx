export default function Combinations(props: {combo: string}) {
    return (
        <div className="combo-face">
            <p className="die-num">
                {props.combo}
            </p>
        </div>
    )
}