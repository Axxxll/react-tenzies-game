import { CSSProperties } from "react"
import { comboState } from "../shared/comboState.enum"

export default function Combinations(props: { combo: string, comboState: number }) {

    const combo = props.combo.split(/(?=[A-Z])/).map((element, index) => index === 0 ? element[0].toUpperCase() + element.substring(1) : element[0].toLocaleLowerCase() + element.substring(1)).join(" ")


    const styles: CSSProperties = getStyles()


    function getStyles() {
        if (comboState.Used === props.comboState) {
            return {
                cursor: 'default',
                backgroundColor: 'white',
                color: 'darkgreen',
                boxShadow: '0px 2px 2px rgba(0, 250, 0, 0.15)',
                pointerEvents: 'none'
            }
        }
        else if (comboState.CanBeUsed === props.comboState) {
            return {
                backgroundColor: 'white'
            }
        }
        else if (comboState.Scrached === props.comboState) {
            return {
                textDecoration: 'line-through',
                textDecorationThickness: "2px",
                textDecorationColor: "black",
                color: 'gray',
                backgroundColor: 'white',
                cursor: 'default',
                pointerEvents: 'none'
            }
        }
        else {
            return {
                backgroundColor: 'white',
                color: 'lightgray',
            }
        }
    }

    return (
        <div className="combo-face" style={styles} onClick={() => {
            console.log('fireee')
        }}>
            <p className="combo">
                {combo}
            </p>
        </div>
    )
}