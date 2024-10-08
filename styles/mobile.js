import { root } from "../style.js"
import { stylizeForm } from "./form.js"

function stylizeMobile(){
    const informationHead = document.querySelector(".information__head")

    informationHead.setAttribute("style", `
        margin: 5.5rem 1.5rem 1rem 1.5rem;
        color: ${root.white};
        text-align: center;
        font-size: 1.75rem;
        font-weight: 700;
        line-height: 2.25rem;
        letter-spacing: -0.01825rem;
        text-shadow: 2px 3px 4px rgba(0, 0, 0, 0.25);
    `)

    const informationContent = document.querySelector(".information__content")

    informationContent.setAttribute("style", `
        margin: 0 1.5rem 4rem 1.5rem;
        color: ${root.white};
        text-align: center;
        font-family: ${root.font};
        font-weight: 500;
        line-height: 1.625rem;
    `)

    const container = document.querySelector(".container")

    container.setAttribute("style", `
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 24px;
    `)

    const containerFreeTrialBtn = document.querySelector(".container__free__trial-button")
    containerFreeTrialBtn.setAttribute("style", `
        width: 20.4375rem;
        height: 5.5rem;
        padding: 1.25rem 4rem;
        display: flex;
        align-items: center;
        text-align: center;
        line-height: 26px;
        letter-spacing: 0.27px;
        text-decoration: none;

        color: ${root.white};
        font-family: ${root.font};
        border-radius: 0.625rem;
        border: none;
        background: ${root.accent};
        box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.15);
    `)

    const strongTag = document.querySelector(".free__trial__content-strong")

    strongTag.setAttribute("style", `
        font-weight: bold;
    `)

    stylizeForm(root)

}

export default stylizeMobile;