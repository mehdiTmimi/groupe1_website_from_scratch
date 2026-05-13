const addToHistory = (valueStart, uniteStart, valueTarget, uniteTarget) => {
    let badge = ""
    let classBadge = ""
    if (uniteStart == "m" || uniteStart == "km" || uniteStart == "cm" || uniteStart == "mm") {
        badge = "metrique"
        classBadge = ""
    }
    else if (uniteStart == "in" || uniteStart == "ft" || uniteStart == "yd"
        || uniteStart == "mi") {
        badge = "impérial"
        classBadge = "impérial"
    }
    else {
        badge = "marin"
        classBadge = "marin"
    }

    const list = document.getElementsByClassName("history-list")[0]
    list.innerHTML += `<li class="history-item">
                        <div class="history-icon">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M13 6l6 6-6 6"></path></svg>
                        </div>
                        <div class="history-body">
                            <div class="history-line">
                                <span class="from-pill">${valueStart + " " + uniteStart}</span>
                                <span class="arrow">→</span>
                                <span class="to-pill">${valueTarget + " " + uniteTarget}</span>
                            </div>
                        </div>
                        <span class="history-tag ${classBadge}">${badge}</span>
                    </li>`

}

const addToHistory_version2 = (data) => {
    console.log(data)
    let badge = ""
    let classBadge = ""
    if (data.uniteStart == "m" || data.uniteStart == "km" || data.uniteStart == "cm" || data.uniteStart == "mm") {
        badge = "metrique"
        classBadge = ""
    }
    else if (data.uniteStart == "in" || data.uniteStart == "ft" || data.uniteStart == "yd"
        || data.uniteStart == "mi") {
        badge = "impérial"
        classBadge = "impérial"
    }
    else {
        badge = "marin"
        classBadge = "marin"
    }

    const list = document.getElementsByClassName("history-list")[0]
    list.innerHTML += `<li class="history-item">
                        <div class="history-icon">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M13 6l6 6-6 6"></path></svg>
                        </div>
                        <div class="history-body">
                            <div class="history-line">
                                <span class="from-pill">${data.valueStart + " " + data.uniteStart}</span>
                                <span class="arrow">→</span>
                                <span class="to-pill">${data.valueTarget + " " + data.uniteTarget}</span>
                            </div>
                        </div>
                        <span class="history-tag ${classBadge}">${badge}</span>
                    </li>`

}
const viderForm = () => valueConversion.value = 0