import React from "react"

type formProps = {
    header: string,
    onSubmit: (data: any) => void,
    children: React.ReactNode
}


const Form = (props: formProps) => {

    function onSubmit(event: React.FormEvent) {
        event.preventDefault()
        const formData = new FormData(event.target as HTMLFormElement)
        const formValue = Object.fromEntries(formData)
        props.onSubmit(formValue)
    }

    return (<div>
        <form onSubmit={onSubmit}>

            <header><h1>{props.header}</h1></header>

            <div style={{ display: "flex", flexDirection: "column", alignItems: 'center' }}>{props.children}</div>

            <footer>
                {/* //TODO: add type reset button */}
                <button type="submit">Submit</button>
            </footer>

        </form>
    </div>)
}

export default Form