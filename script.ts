const button = document.querySelector("button") as HTMLButtonElement;
const para = document.querySelector("p") as HTMLParagraphElement;
const span = document.querySelector("span") as HTMLSpanElement;


getAdvice();

button.addEventListener('click', () => {
    getAdvice();
})

interface Response {
    slip: {
        id: number,
        advice: string
    }
}

async function getAdvice() {
    try {
        const fetchMe = await fetch("https://api.adviceslip.com/advice");
        const response: Response = await fetchMe.json();
        span.textContent = `#${response.slip.id}`
        para.textContent = `"${response.slip.advice}"`;
    }
    catch {
        alert("Couldn't fetch the advice");
    }
}