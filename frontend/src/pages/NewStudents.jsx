import { useState } from "react"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const NewStudents=()=>{
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const[name,setName]=useState("");
    const navigate = useNavigate();

    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            
            <div className="bg-blue-400 rounded-xl w-96 p-4 px-4 h-max text-center">
            <Heading label={"Signup"}/>
            <SubHeading label={"Enter the details to create account"} />
            <InputBox onChange={(e)=>{
                setUsername(e.target.value);
            }} placeholder= "Roll No." label={"Username"} />
            <InputBox onChange={(e)=>{
                setPassword(e.target.value);
            }} placeholder= "Password" label={"Password"} />
            <InputBox onChange={(e)=>{
                setName(e.target.value);
            }} placeholder= "Jon Doe" label={"Name"} />
            <div className="pt-8 pb-2">
                <Button onClick={
                    async()=>{
                        
                          const response= await axios.post("http://localhost:3000/api/v1/admin/astud",{
                                username,
                                password,
                                name,
                                
                            })
                        
                    
                        navigate("/user");
                    }
                } label={"Add"} />
            </div>
            </div>
                
            
           
        </div>
    </div>
}