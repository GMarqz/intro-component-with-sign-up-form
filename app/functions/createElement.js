function parent(element){
    return document.querySelector(element)
}

function createDivOrSection(parentElement, elementType,cssClassName){
    const divSection = document.createElement(elementType)
    parentElement.appendChild(divSection)
    divSection.className = cssClassName
}

function createHeading(parentElement, headingType, cssClassName, text){
    const heading = document.createElement(headingType)
    parentElement.appendChild(heading)
    heading.className = cssClassName
    heading.textContent = text
}

function createP(parentElement, cssClassName, text){
    const p = document.createElement("P")
    parentElement.appendChild(p)
    p.className = cssClassName
    p.textContent = text
}

function createBtn(parentElement, cssClassName, href){
    const btn = document.createElement("A")
    parentElement.appendChild(btn)
    btn.className = cssClassName
    btn.setAttribute("href", href)
}

function createForm(parentElement, cssClassName){
    const form = document.createElement("FORM")
    parentElement.appendChild(form)
    form.className = cssClassName
}

function createInput(parentElement, cssClassName, inputType, inputId, inputName, placeholder){
    const input = document.createElement("INPUT")
    parentElement.appendChild(input)
    input.className = cssClassName
    input.setAttribute("type", inputType)
    input.setAttribute("id", inputId)
    input.setAttribute("name", inputName)
    input.setAttribute("placeholder", placeholder)
}

function createSmall(parentElement, cssClassName, text){
    const smallElement = document.createElement("SMALL")
    parentElement.appendChild(smallElement)
    smallElement.className = cssClassName
    smallElement.textContent = text
}

export  {
    parent,
    createDivOrSection,
    createHeading,
    createP,
    createBtn,
    createForm,
    createInput,
    createSmall
}