import '@testing-library/jest-dom'
import {render, screen} from "@testing-library/react";
import {RegisterProvider} from "@/app/(_portal)/_context/RegisterContext";
import {AppRouterContext} from "next/dist/shared/lib/app-router-context.shared-runtime";
import Step3 from "@/app/(_portal)/step3/page";

const mockAppRouter = {
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
}

describe('Step3', () => {
    it('Should render correctly', () => {
        render(
            <AppRouterContext.Provider value={mockAppRouter}>
                <RegisterProvider>
                    <Step3/>
                </RegisterProvider>
            </AppRouterContext.Provider>

        )
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
        expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    })
})