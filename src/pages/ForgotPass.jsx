import { useState } from "react"
import { Link } from "react-router";

const ForgotPass = () => {
    const [email, setemail] = useState('');

    const useremail = {
        email: email
    }

    const submitMail = (e) => {
        e.preventDefault();
        console.log(email)

        const response = fetch('https://passwordreset-dnbd.onrender.com/api/v1/forget-password', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(useremail)
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();

                } else if (response.status === 404) {
                    throw new Error('Server responded with Status:${response.status')
                }
            })
            .then((data) => {
                console.log(data)
                alert("Mail sent Successfully")
                const tag = document.getElementById('Note');
                const tags = document.getElementById('Noted');
                tags.classList.add('hidden');
                tag.classList.remove('hidden');

            })
            .catch((err) => {
                const tag = document.getElementById('Noted');
                tag.classList.remove('hidden');
            })
    }

    return <div className="p-4 flex justify-center mt-20 ml-10 mr-10 sm:ml-[25%] sm:mr-[25%] md:ml-[35%] md:mr-[35%] border rounded-2xl border-cyan-200">
        <form className="p-3 relative flex flex-col gap-4" onSubmit={submitMail}>
            <label className="text-gray-400">Email
                <input className="ml-1 p-1 border rounded text-gray-600" type="email" placeholder="Enter your Email" value={email} onChange={(e) => { setemail(e.target.value) }} />
            </label>
            <button className="p-1 bg-cyan-200 text-white font-bold rounded-full">Send Email</button>
            <button className="absolute top-[-30px] left-[10%] right-[10%] text-sm p-1 bg-lime-300 rounded-full text-white font-semibold">Forgot Your Password</button>
            <p id="Note" className="text-[10px] text-center hidden text-red-500">Check your Mail & click the reset password Link </p>
            <p id="Noted" className="text-xs text-center hidden text-red-500">Issue with the Server try after sometime..</p>

        </form>

        <div className="absolute left-[30px] bottom-20">
            <p className="text-blue-400 text-sm">"For Validation purpose only in case of non Existing</p>
            <p className="text-blue-400  text-sm">Mail Id provided while registering"</p>
            <p className="text-blue-400 text-sm">"use the <span className="text-red-400">token</span> available in the console after sending mail in below URL"</p>
            <p className="text-red-600 text-sm">"https://passwordreset-dnbd.onrender.com/api/v1/reset-password/token" "</p>

        </div>
    </div>
}

export default ForgotPass