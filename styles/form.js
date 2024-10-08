function stylizeForm(root) {
    const $formElement = document.querySelector(".container__div__form")
    $formElement.setAttribute("style", `
        width: 20.438rem;
        height: 27.625rem;
        padding: 24px;
        background-color: ${root.white};
        
        display: flex;
        flex-direction: column;
        gap: 16px;
        border-radius: 10px;
    `)

    const $inputElement = document.querySelectorAll(".input").forEach(($inputElement) => {
        // console.log($inputElement)
        $inputElement.setAttribute("style", `
            width: 17.438rem;
            height: 3.5rem;
            color: ${root.neutral};
            letter-spacing: 0.25px;    
        `)
    })
    
    const $formBtn = document.querySelector(".container__div__btn");
    $formBtn.setAttribute("style", `
        width: 17.438rem;
        height: 3.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: ${root.green};
        color: ${root.white};
        text-decoration: none;
        border-radius: 5px;
        box-shadow: inset 0px -4px 0px 0px rgba(0, 0, 0, 0.1);
    `)

   
}

export {
    stylizeForm
}