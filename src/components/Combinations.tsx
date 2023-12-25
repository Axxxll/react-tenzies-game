export default function Combinations(props: {combo: string}) {
    return (
        <div className="combo-face">
            <p className="combo">
                {props.combo}
            </p>
        </div>
    )
}