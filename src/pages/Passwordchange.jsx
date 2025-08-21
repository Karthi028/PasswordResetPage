import { useState } from "react"
import { useNavigate, useParams } from "react-router";

const Passwordchange = () => {

    const [password, setpassword] = useState('');
    const [confirm, setconfirm] = useState('');
    const navigate = useNavigate();

    const { token } = useParams();

    const handlepassword = (e) => {
        e.preventDefault();
        if (password !== confirm) {
            const tag = document.getElementById('hide');
            return tag.classList.remove('hidden');
            
        }

        const tag = document.getElementById('hide');
        tag.classList.add('hidden');
        const NewPassword = { password: password }

        const response = fetch(`https://passwordreset-dnbd.onrender.com/api/v1/reset-password/${token}`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(NewPassword)
        })
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data)
                alert("Password Changed Successfully");
                navigate('/');
            })
            .catch((err) => {
                console.log(err.message)
                const tag = document.getElementById('Noted');
                tag.classList.remove('hidden');

            })

    }

    return <div className="relative flex flex-col justify-center items-center">
        <form className="flex flex-col justify-center items-center gap-2 border pt-6 pb-6 pl-14 pr-14 border-lime-300 shadow-xl rounded-xl mt-20" onSubmit={handlepassword}>
            <input className="p-1 border border-lime-300 rounded-xl text-gray-400" type="password" placeholder="Enter Your Password..." required value={password} onChange={(e) => setpassword(e.target.value)} />
            <input className="p-1 border border-lime-300 rounded-xl text-gray-400" type="password" placeholder="Confirm Your Password..." required value={confirm} onChange={(e) => setconfirm(e.target.value)} />
            <button className="mt-1 top-6 text-xs font-semibold italic bg-orange-300 hover:scale-115 text-white p-1 rounded-full">Reset Password</button>
            <p id="hide" className="text-red-500 text-sm font-semibold hidden">Password doest not match!!!!</p>
            <p id="Noted" className="text-xs text-center hidden text-red-500">Error While Changing Password Try Later...</p>
        </form>
        <button className="absolute top-16 text-sm font-semibold italic bg-white border border-lime-400 p-1 rounded-full">Reset password</button>


    </div>
}

export default Passwordchange