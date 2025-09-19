import '@testing-library/jest-dom'
import {render, screen} from "@testing-library/react";
import Step1 from "@/app/(_portal)/step1/page";
import {RegisterProvider} from "@/app/(_portal)/_context/RegisterContext";
import {AppRouterContext} from "next/dist/shared/lib/app-router-context.shared-runtime";

const mockAppRouter = {
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
}

describe('Step1', () => {
    it('Should render correctly', () => {
        render(
            <AppRouterContext.Provider value={mockAppRouter}>
                <RegisterProvider>
                    <Step1/>
                </RegisterProvider>
            </AppRouterContext.Provider>

        )
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
        expect(screen.getByLabelText(/FirstName/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/LastName/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/BirthDate/i)).toBeInTheDocument();
    })
})