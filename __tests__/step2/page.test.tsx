import '@testing-library/jest-dom'
import {render, screen} from "@testing-library/react";
import {RegisterProvider} from "@/app/(_portal)/_context/RegisterContext";
import {AppRouterContext} from "next/dist/shared/lib/app-router-context.shared-runtime";
import Step2 from "@/app/(_portal)/step2/page";

const mockAppRouter = {
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
}

describe('Step2', () => {
    it('Should render correctly', () => {
        render(
            <AppRouterContext.Provider value={mockAppRouter}>
                <RegisterProvider>
                    <Step2/>
                </RegisterProvider>
            </AppRouterContext.Provider>

        )
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
        expect(screen.getByLabelText(/Country/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Gender/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Avatar/i)).toBeInTheDocument();
    })
})