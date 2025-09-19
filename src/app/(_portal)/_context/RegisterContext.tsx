import React, {createContext, useContext, useState} from "react";

type RegisterFormData = {
    step1: {
        firstName: string,
        lastName: string,
        birthDate: string,
    };
    step2: {
        country: string,
        gender: string,
        avatar: string,
    };
    step3: {
        email: string,
        password: string,
    }
}

type RegisterContextType = {
    formData: RegisterFormData;
    updateFormData: (step: keyof RegisterFormData, data: Partial<RegisterFormData[keyof RegisterFormData]>) => void;
}

const RegisterContext = createContext<RegisterContextType | undefined>(undefined);

export function RegisterProvider ({ children }: {children: React.ReactNode}) {
    const [formData, setFormData] = useState<RegisterFormData>({
        step1: {
            firstName: "",
            lastName: "",
            birthDate: "",
        },
        step2: {
            country: "",
            gender: "",
            avatar: "",
        },
        step3: {
            email: "",
            password: "",
        }
    })

    const updateFormData = (step: keyof  RegisterFormData, data: Partial<RegisterFormData[keyof RegisterFormData]>) => {
        setFormData(prev => ({
            ...prev,
            [step]: {
                ...prev[step],
                ...data
            }
        }))
    }

    return (
        <RegisterContext.Provider value={{formData, updateFormData}}>
            {children}
        </RegisterContext.Provider>
    )
}

export function useRegisterContext() {
    const context = useContext(RegisterContext);
    if (!context) {
        throw new Error("useRegisterContext must be used within a register context.");
    }
    return context;
}
