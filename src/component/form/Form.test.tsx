import React from 'react'
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import Form from './form'
import user from '@testing-library/user-event'

describe("SignIn form", () => {
 

    it("should render the form properly ",()=>{
        render(<Form header='login form' onSubmit={()=>{}}>
        <input aria-label='email' name="email" type={"text"} placeholder="email"></input>
        </Form>)

    const heading =  screen.getByRole("heading",{name:/Login form/i })
    const email = screen.getByRole("textbox",{name:/email/i})
    const button = screen.getByRole("button",{name:/submit/i})
    
    Array.from([heading,email,button]).forEach((el)=>{
        expect(el).toBeInTheDocument()
    })

    })

    it("onsubmit should call when submit button click and retrun input filed value in object",()=>{

        let formValue
        render(<Form header='login form' onSubmit={(data)=>{
            formValue = data
        }}>
        <input aria-label='email' name="email" type={"text"} placeholder="email"></input>
        </Form>)

        console.log("befoe",formValue)
        const submit= screen.getByRole('button',{name:/submit/i})
        const email = screen.getByRole("textbox",{name:/email/i})
        user.type(email,"yusuf@gmail.com")
        user.click(submit)

        expect(formValue).toEqual({email:"yusuf@gmail.com"})

    })

    // test("submit button should be disabled if input filed is empty",()=>{
    //     render(<Form header='login form' onSubmit={()=>{}}>
    //     <input aria-label='email' name="email" type={"text"} placeholder="email"></input>
    //     </Form>)

    //     const button = screen.getByRole("button",{name:/submit/i})

    //     expect(button).toBeDisabled()
    // })

})

// describe("", () => {

//     test("user should not be able to submit if fiels are empty", () => {
//         //throw new Error("err")
//     })

// })

// describe("Form basic test", () => {

//     test("form should render properly", () => {
//         //throw new Error("err")
//     })

//     test("form should display header/title as per passed props", () => {
//         throw new Error("err")
//     })

// })