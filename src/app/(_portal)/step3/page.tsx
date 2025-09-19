'use client'

import {useRegisterContext} from "@/app/(_portal)/_context/RegisterContext";
import {useRouter} from "next/navigation";

export default function Step3() {
    const {formData, updateFormData} = useRegisterContext();
    const router = useRouter();
    const {email, password} = formData.step3;
    const doSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !password) {
            return alert("Please fill out the form");
        }
        router.push("/step4")
    }
    return (
        <form onSubmit={doSubmit} className="shadow" style={{minWidth: 500}}>
            <h2>Step3</h2>
            <div className="flex gap-1">
                <label className="basis-1/4">Email</label>
                <input className="basis-3/4 border border-gray-300" type={"email"} required value={email} onChange={(e) => {
                    updateFormData('step3', {email: e.target.value});
                }}/>
            </div>
            <div className="flex gap-1">
                <label className="basis-1/4">Password</label>
                <input className="basis-3/4 border border-gray-300" type={"password"} required minLength={8} value={password} onChange={(e) => {
                    updateFormData('step3', {password: e.target.value});
                }}/>
            </div>
            <button type={"submit"} className="cursor-pointer">Submit</button>
        </form>
    )
};