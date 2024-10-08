import stylizeMobile from "./styles/mobile.js";

export const root = {
    mainColor: "#ff7979",
    green: "#38cc8b",
    accent: "#5e54a4",
    neutral: "#3d3b48",
    white: "#fff",
    inputBorder: "#dedede",
    termsColor: "#bab7d4",
    font: 'Poppins, sans-serif'
};

function stylizeBody() {
    const body = document.body;

    const styleElement = document.createElement('style');
    styleElement.textContent = `
        * {
            box-sizing: border-box;
        }
    `;

    body.appendChild(styleElement);

    body.setAttribute("style", `
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        background-color: ${root.mainColor};
        background-image: url(./images/bg-intro-mobile.png);
        background-repeat: no-repeat;
        font-family: ${root.font};
        font-size: 1rem;
    `);

    stylizeMobile()
}


export default stylizeBody;