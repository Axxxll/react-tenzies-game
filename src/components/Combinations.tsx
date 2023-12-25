export default function Combinations(props: {combo: string}) {

    const combo = props.combo.split(/(?=[A-Z])/).map((element, index) => index === 0 ? element[0].toUpperCase() + element.substring(1) : element[0].toLocaleLowerCase() + element.substring(1)).join(" ")
    
    return (
        <div className="combo-face" style={{backgroundColor: 'white'}}>
            <p className="combo">
                {combo}
            </p>
        </div>
    )
}