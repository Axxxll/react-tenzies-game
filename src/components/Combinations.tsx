import { comboState } from "../shared/comboState.enum"

export default function Combinations(props: { combo: string, comboState: number, isSelected: boolean, select: () => void , type: string}) {

    const combo = props.combo.split(/(?=[A-Z])/).map((element, index) => index === 0 ? element[0].toUpperCase() + element.substring(1) : element[0].toLocaleLowerCase() + element.substring(1)).join(" ")

    const classes = props.comboState === comboState.NotUsed ? 'not-used' : (props.comboState === comboState.Scrached ? 'scrached' : (props.comboState === comboState.Used ? 'used' : ""))
    

    return (
        <button className={`combo-face ${classes}`}  disabled={props.comboState === comboState.Scrached || props.comboState === comboState.Used} onClick={props.select}>
            <p className="combo">
                {combo}
            </p>
        </button>
    )
}