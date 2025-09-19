'use client'

import {useRegisterContext} from "@/app/(_portal)/_context/RegisterContext";
import {useRouter} from "next/navigation";

export default function Step1() {
    const {formData, updateFormData} = useRegisterContext();
    const router = useRouter();
    const {firstName, lastName, birthDate} = formData.step1;
    const doSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!firstName || !lastName || !birthDate) {
            return alert("Please fill out the form");
        }
        router.push("/step2")
    }
    return (
        <form onSubmit={doSubmit} className="shadow" style={{minWidth: 500}}>
            <h2>Step1</h2>
            <div className="flex gap-1">
                <label htmlFor={"firstName"} className="basis-1/4" >FirstName</label>
                <input id="firstName" className="basis-3/4 border border-gray-300" type={"text"} required value={firstName} onChange={(e) => {
                    updateFormData('step1', {firstName: e.target.value});
                }}/>
            </div>
            <div className="flex gap-1">
                <label htmlFor={"lastName"} className="basis-1/4">LastName</label>
                <input id="lastName" className="basis-3/4 border border-gray-300" type={"text"} required value={lastName} onChange={(e) => {
                    updateFormData('step1', {lastName: e.target.value});
                }}/>
            </div>
            <div className="flex gap-1">
                <label htmlFor={"birthDate"} className="basis-1/4">BirthDate</label>
                <input id="birthDate" className="basis-3/4 border border-gray-300" type={"text"} required value={birthDate} onChange={(e) => {
                    updateFormData('step1', {birthDate: e.target.value});
                }}/>
            </div>
            <button type={"submit"} className="cursor-pointer">Next</button>
        </form>
    )
};