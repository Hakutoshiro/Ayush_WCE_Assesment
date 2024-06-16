import { Button, Input, Textarea } from "@nextui-org/react";
import { useMemo, useState } from "react";



export default function Contact() {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [message, setMessage] = useState<string>("")
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value)
    }

    const validateEmail = (email:string) => email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

    const isInvalid = useMemo(() => {
      if (email === "") return false;
  
      return validateEmail(email) ? false : true;
    }, [email]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if( !name || !email || !message) {
            window.alert("please Enter all fields.")
        }else if(isInvalid){
            window.alert("Invalid Email")
        }else{    
            setEmail("")
            setMessage("")
            setName("")
            window.alert("Message Sent Successfully!!")
        }
    };

    return (
        <div className="w-full h-auto pb-6">
            <form action="" onSubmit={handleSubmit} className="w-[360px] sm:w-[400px] md:w-[520px] flex flex-col items-center  mx-auto ">
            <Input 
                placeholder="Name" 
                type="text" 
                className="w-11/12  mx-auto my-2 "
                value={name} onChange={handleNameChange}
                isRequired/>

            <Input 
                type="text" 
                placeholder="Email" 
                className="w-11/12  mx-auto my-2 " 
                value={email} onChange={handleEmailChange}
                isInvalid = {isInvalid}
                isRequired 
                />

            <Textarea 
                placeholder="Message" 
                className="w-11/12  mx-auto my-2 " 
                value={message} onChange={handleMessageChange}
                isRequired/>

            <Button className="w-11/12 my-2 bg-gradient-to-r from-primary-200 to-primary-500" color="primary" type="submit" >
                Send
            </Button>
            </form>
        </div>
    );
}