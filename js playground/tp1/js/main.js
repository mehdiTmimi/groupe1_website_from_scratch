resetBtn.addEventListener('click', () => {
    viderForm()
})
convertBtn.addEventListener('click', () => {
    // recuperation des valeurs
    let valueStart = valueConversion.value // la valeur a convertir
    let fromUnitValue = fromUnit.value // unite et ratio de depart
    let toUnitValue = toUnit.value // unite et ratio de l arrive
    // verification
    if (valueStart == "")
        return alert("veuillez saisir une valeur")
    valueStart = parseFloat(valueStart)
    if (valueStart == NaN)
        return alert("veuillez saisir un nombre")
    //calcul //valueStart, uniteStart, valueTarget, uniteTarget
    let ratioDepart = parseFloat(fromUnitValue.split(" ")[1])
    let ratioArrive = parseFloat(toUnitValue.split(" ")[1])
    let valueTarget = valueStart * ratioDepart / ratioArrive

    let uniteStart = fromUnitValue.split(" ")[0]
    let uniteTarget = toUnitValue.split(" ")[0]

    let data = {
        valueStart, uniteStart, uniteTarget, valueTarget
    }
    addToHistory_version2(data)
    viderForm()
})
swapDiv.addEventListener('click', () => {
    let temp = toUnit.value
    toUnit.value = fromUnit.value
    fromUnit.value = temp
})
viderBtn.addEventListener('click', () => listHistory.innerHTML = "")