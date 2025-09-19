'use client'

import {useRegisterContext} from "@/app/(_portal)/_context/RegisterContext";
import {useRouter} from "next/navigation";

export default function Step2() {
    const {formData, updateFormData} = useRegisterContext();
    const router = useRouter();
    const {country, gender, avatar} = formData.step2;
    const doSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!country || !gender) {
            return alert("Please fill out the form");
        }
        router.push("/step3")
    }
    return (
        <form onSubmit={doSubmit} style={{minWidth: 500}}>
            <h2>Step2</h2>
            <div className="flex gap-1">
                <label htmlFor={"country"} className="basis-1/4" >Country</label>
                <input id="country" className="basis-3/4 border border-gray-300" type={"text"} required value={country} onChange={(e) => {
                    updateFormData('step2', {country: e.target.value});
                }}/>
            </div>
            <div className="flex gap-1">
                <label htmlFor={"gender"} className="basis-1/4">Gender</label>
                <select id="gender" className="basis-3/4 border border-gray-300" required value={gender} onChange={(e) => {
                    updateFormData('step2', {gender: e.target.value});
                }}>
                    <option value="">Choose the gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className="flex gap-1">
                <label htmlFor={"avatar"} className="basis-1/4">Avatar</label>
                <input id="avatar" className="basis-3/4 border border-gray-300" type={"file"} value={avatar} onChange={(e) => {
                    updateFormData('step2', {avatar: e.target.value});
                }}/>
            </div>
            <button type={"submit"}>Next</button>
        </form>
    )
};