import { comboState } from "../comboState.enum"

export default function Combinations(props: {combo: string, comboState: number}) {

    const combo = props.combo.split(/(?=[A-Z])/).map((element, index) => index === 0 ? element[0].toUpperCase() + element.substring(1) : element[0].toLocaleLowerCase() + element.substring(1)).join(" ")


    const styles = getStyles()

    function getStyles() {
        if(comboState.Used === props.comboState) {
            return {
                color: 'gray',
                cursor: 'default',
                backgroundColor: 'white'
            }
        }
        else if (comboState.CanBeUsed === props.comboState) {
            return {
                color: 'green',
                boxShadow: '0px 2px 2px rgba(0, 250, 0, 0.15)',
                backgroundColor: 'white'
            }
        }
        else if (comboState.Scrached === props.comboState) {
            return {
                textDecoration: 'line-through',
                color: 'gray',
                backgroundColor: 'white',
                cursor: 'default',
            }
        }
        else {
            return {
                backgroundColor: 'white',
            }
        }
    }

    return (
        <div className="combo-face" style={styles}>
            <p className="combo">
                {combo}
            </p>
        </div>
    )
}