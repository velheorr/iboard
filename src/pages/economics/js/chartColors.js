export const chartColor = (name) => {
    let color;
    switch (name) {
        case 'zPlan': color = "#04d9ff"
            break
        case 'zFact': color = "#5555ff"
            break
        case 'vpPlan': color = "#f0d3ab"
            break
        case 'vpFact': color = "#d78850" //+
            break
        case 'opPlan': color = "#B0228C"
            break
        case 'opFact': color = "#7eae43" //+
            break
        case 'nzp': color = "#c72708" // +
            break
        case 'prodano': color = "#8598d6"
            break
        case 'zaprocent': color = "#353f5f"
            break
        case 'valprib': color = "#fdb019"
            break
        case 'operprib': color = "#ccff00"
            break
        default: color = 'fff'
    }
    return color
}