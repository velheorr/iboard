

export const prepareSelect = (data, param, filtBy = false) =>{
    console.log(data)
    console.log(param)
    let changedData = data
    if (filtBy) {
        changedData = data.filter((i)=> i.Холдинг === filtBy )
    }
    let x = []



  /*  if (param === 'Холдинг'){
        filter(changedData)
        if(item['Холдинг'] === ''){return}
    }*/


    changedData?.forEach(i => {
        if (!x.includes(i[param])){
            x.push(i[param])
        }
    } )
    x.sort()
    return x
}
