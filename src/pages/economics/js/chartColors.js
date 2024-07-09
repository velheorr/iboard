export const chartColor = (name) => {
    let color;
    switch (name) {
        case 'zPlan': color = "#d8e3f8"
            break
        case 'zFact': color = "#435870"
            break
        case 'vpPlan': color = "#f0d3ab"
            break
        case 'vpFact': color = "#d78850"
            break
        case 'opPlan': color = "#B0228C"
            break
        case 'opFact': color = "#7eae43"
            break
        case 'nzp': color = "#c72708"
            break
        case 'prodano': color = "#8598d6"
            break
        case 'zaprocent': color = "#353f5f"
            break
        case 'valprib': color = "#fdb019"
            break
        case 'operprib': color = "#39fd19"
            break
        default: color = 'fff'
    }
    return color
}