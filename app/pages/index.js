import { parent, createDivOrSection, createHeading, createP, createBtn, createForm, createInput, createSmall } from "../functions/createElement.js";

function trialBtn(){
    createBtn(parent(".container"), "container__free__trial-button", "#")
    createP(parent(".container__free__trial-button"), "free__trial__content", "")
    const freeTrialBtnContent = document.querySelector(".free__trial__content")
    freeTrialBtnContent.innerHTML = `
    <strong class="free__trial__content-strong">Try it free 7 days</strong> then $20/mo. thereafter
    `
}

function initInput(parentElement){
    createInput(parent(parentElement), "input", "text", "fname", "fname", "First name")
    createInput(parent(parentElement), "input", "text", "lname", "lname", "Last name")
    createInput(parent(parentElement), "input", "email", "email", "email", "Email")
    createInput(parent(parentElement), "input", "password", "password", "password", "Password")
}

function initHtmlBody(){
    createDivOrSection(document.body, "DIV", "information__container")
    createHeading(parent(".information__container"), "H1", "information__head", "Learn to code by watching others")
    createP(parent(".information__container"), "information__content", "See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.")

    createDivOrSection(document.body, "SECTION", "container")
    trialBtn()

    createForm(parent(".container"), "container__div__form")
    initInput(".container__div__form")

    createBtn(parent(".container__div__form"), "container__div__btn", "#")
    createP(parent(".container__div__btn"), "container__div__btn-content", "Claim your free trial")
    createSmall(parent(".container__div__form"), "container__div__condition-small", "")
    const smallText = document.querySelector(".container__div__condition-small")
    smallText.innerHTML = `
    By clicking the button, you are agreeing to our <span>Terms and Services</span>
    `
}

export default initHtmlBody;
