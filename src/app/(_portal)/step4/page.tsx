'use client'

import {useRegisterContext} from "@/app/(_portal)/_context/RegisterContext";

export default function Step4() {
    const {formData} = useRegisterContext();
    return (
        <div className="flex flex-col gap-2 p-2" style={{backgroundColor: 'white', minWidth: 500}}>
            <div className="flex gap-1">
                <label className="basis-1/4">FirstName: </label>
                <span className="basis-3/4">
                    {formData.step1.firstName}
                </span>
            </div>
            <div className="flex gap-1">
                <label className="basis-1/4">LastName: </label>
                <span className="basis-3/4">
                    {formData.step1.lastName}
                </span>
            </div>
            <div className="flex gap-1">
                <label className="basis-1/4">BirthDate: </label>
                <span className="basis-3/4">
                    {formData.step1.birthDate}
                </span>
            </div>

            <div className="flex gap-1">
                <label className="basis-1/4">Country: </label>
                <span className="basis-3/4">
                    {formData.step2.country}
                </span>
            </div>
            <div className="flex gap-1">
                <label className="basis-1/4">Gender: </label>
                <span className="basis-3/4">
                    {formData.step2.gender}
                </span>
            </div>
            <div className="flex gap-1">
                <label className="basis-1/4">Avatar: </label>
                <span className="basis-3/4">
                    {formData.step2.avatar}
                </span>
            </div>

            <div className="flex gap-1">
                <label className="basis-1/4">Email: </label>
                <span className="basis-3/4">
                    {formData.step3.email}
                </span>
            </div>
            <div className="flex gap-1">
                <label className="basis-1/4">Password: </label>
                <span className="basis-3/4">
                    {formData.step3.password}
                </span>
            </div>
        </div>
    )
};