export const chartColor = (name) => {
    let color;
    switch (name) {
        /*case 'zPlan': color = "#04d9ff"*/
        case 'zPlan': color = "#938fcd"
            break
        /*case 'zFact': color = "#5555ff"*/
        case 'zFact': color = "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);"
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
        case 'prodano': color = "#7df9ff"
            break
        case 'zaprocent': color = "#5555ff"
            break
        case 'valprib': color = "#ffa420"
            break
        case 'operprib': color = "#39FF14"
            break
        default: color = 'fff'
    }
    return color
}