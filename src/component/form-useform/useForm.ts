import React from 'react'

const useForm = () => {
    const [value, setValue] = React.useState<any>({})

    const onChange = (event: any) => {
        event.persist()
        setValue((state: any) => ({ ...state, [event.target.name]: event.target.value }))
    }

    return [value, onChange]
}

export default useForm