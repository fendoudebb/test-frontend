import '@testing-library/jest-dom'
import {render, screen} from "@testing-library/react";
import {RegisterProvider} from "@/app/(_portal)/_context/RegisterContext";
import {AppRouterContext} from "next/dist/shared/lib/app-router-context.shared-runtime";
import Step4 from "@/app/(_portal)/step4/page";

const mockAppRouter = {
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
}

describe('Step4', () => {
    it('Should render correctly', () => {
        render(
            <AppRouterContext.Provider value={mockAppRouter}>
                <RegisterProvider>
                    <Step4/>
                </RegisterProvider>
            </AppRouterContext.Provider>

        )
        expect(screen.getByText(/FirstName/i)).toBeInTheDocument();
        expect(screen.getByText(/LastName/i)).toBeInTheDocument();
        expect(screen.getByText(/BirthDate/i)).toBeInTheDocument();
        expect(screen.getByText(/Country/i)).toBeInTheDocument();
        expect(screen.getByText(/Gender/i)).toBeInTheDocument();
        expect(screen.getByText(/Avatar/i)).toBeInTheDocument();
        expect(screen.getByText(/Email/i)).toBeInTheDocument();
        expect(screen.getByText(/Password/i)).toBeInTheDocument();
    })
})