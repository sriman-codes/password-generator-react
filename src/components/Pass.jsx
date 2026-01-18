import React,{useState} from 'react'
import { FaRegCopy } from 'react-icons/fa'


function Pass() {

    const [value,setVal] = useState(0)
    const [includeuc,setIncludeuc] = useState(false)
    const [includelc,setIncludelc] = useState(false)
    const [includenumber,setIncludenumber] = useState(false)
    const [includesymbol,setIncludesymbol] = useState(false)
    const [password,setPassword] = useState("")
    const [copied,setCopied] = useState("")

    const generatepassword = () => {

        let uc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let lc = "abcdefghijklmnopqrstuvwxyz";
        let number = "0123456789";
        let symbol = "!@#$%^&*()_+{}|:<>?-=[];',./`~";

        let Allchar = "";

        if(includeuc){
            Allchar += uc;
        }
        if(includelc){
            Allchar += lc;
        }
        if(includenumber){
            Allchar += number;
        }
        if(includesymbol){
            Allchar += symbol;
        }
        if(Allchar === ""){
            alert("Please select atleast one option");
        }
        
        let p = "";
        
        for(let i = 0; i < value; i++){
            let r = Math.floor(Math.random()*Allchar.length)
            p += Allchar.charAt(r);
        }

        setPassword(p);

    
    };
    
    const copy = () =>{
        navigator.clipboard.writeText(password);
        setCopied("Password copied!");
        setTimeout(() => {
            setCopied("");
        }, 2000);
    }
    return (
        <>
        <div className="bg-black w-full h-screen flex flex-col justify-center items-center text-white gap-5 ">
            <h4 className='text-green-700 h-[2%] mb-5'>{copied}</h4>
            <div className="lg:w-[550px] w-100 lg:h-[450px] h-120  flex flex-col gap-8  rounded-lg">
                <div className="lg:h-[45%] lg:w-full  flex flex-col justify-center items-center rounded-t-lg gap-5">
                    <h4 className='lg:text-green-700 text-green-700 text-2xl font-bold'>Password Generator</h4>
                    <h1 className='text-2xl lg:text-3xl font-bold'>Generate a secure password</h1>

                    <div className="lg:h-[50px] w-[80%] h-[37px] lg:w-full bg-gray-900 text-green-700 border-b-2 border-b-green-700 rounded-t-lg  flex justify-between items-center px-2">
                        <h3 className='px-5 h-full w-[90%]  place-content-center'>{password}</h3>
                        <button className='w-[7%] '  onClick={copy} > <FaRegCopy size={20} /></button>
                    </div>

                    <button className='h-[33px] w-[120px] border-2 border-green-900 bg-gray-900 text-green-600 rounded-lg font-bold' onClick={generatepassword}>Generate</button>
                </div>
                <div className="box2  lg:h-[53%] h-40 flex border border-gray-900 rounded-lg">
                    <div className="h-full w-1/2 flex flex-col justify-center items-center gap-2">
                        <h2>Customize Password</h2>
                        <p>Password lenth : {value}</p>
                        <input type="range" className='accent-green-700 w-[60%] h-1 bg-gray-900  ' min="4" max="16"
                        value={value} onChange={(e) => setVal(e.target.value)} />
                    </div>
                    <div className="h-full w-1/2 flex flex-col justify-center items-start gap-3 pl-10">
                        <table >
                            <tr>
                                <td>
                                    <input type="checkbox" id='uc' checked={includeuc}  className='accent-green-500' onChange={(e) => setIncludeuc(e.target.checked)} />
                                    <label for="uc" className='pl-2'>Uppercase letters</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" id='lc' checked={includelc} className='accent-green-500' onChange={(e) => setIncludelc(e.target.checked)}/>
                                    <label for="lc" className='pl-2' >Lowercase letters</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" id='no' checked={includenumber} className='accent-green-500' onChange={(e) => setIncludenumber(e.target.checked)}/>
                                    <label for="no" className='pl-2'>Numbers</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" id='s' checked={includesymbol} className='accent-green-500' onChange={(e) => setIncludesymbol(e.target.checked)}/>
                                    <label for="s" className='pl-2'>Symbols</label>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Pass