import { useForm } from "react-hook-form";

function FormDemo(){
    const {register  // Registers input fields with the form system.
        ,handleSubmit  //Handles form submission and validation.
        ,formState:{errors} //Contains validation errors.
    }=useForm()
    //form submit function
    const onFormSubmit=(obj)=>{
 console.log(obj)
    }
    return(
        <div>
            <h1 className="text-center text-3xl p-2 m-2 bg-amber-200">FormDemo</h1>
            <form className="max-w-md mx-auto mt-10"
              onSubmit={handleSubmit(onFormSubmit)}>
                {/* user name*/}
                <div className="mb-3">
                 <label htmlFor="username">Username</label>
                 <input type="text" {...register("Username",
                    {
                        required:"username required",
                        validate:(v)=>v.trim().length!==0 || "white space is not valid",
                        minLength:4,
                        maxLength:8
                    }
                )

                 } 
                 id="Username" className="border w-full p-3" />
                 {/* error message for username*/}
                 {errors.Username?.type==="required" && <p className="text-red-500">{errors.Username.message}</p>}

                   {/* error message for min length*/}
                 {errors.Username?.type==="minLength" && <p className="text-red-500">min length of username is 4</p>}

                   {/* error message for max length*/}
                 {errors.Username?.type==="maxLength" && <p className="text-red-500">max length of username is 8</p>}

                   {/* error message white space*/}
                 {errors.Username?.type==="validate" && <p className="text-red-500">{errors.Username.message}</p>}

                </div>
                {/* email*/}
                <div className="mb-3">
                 <label htmlFor="email">email</label>
                 <input type="email" {...register("email")} id="email" className="border w-full p-3" />
                </div>
                {/*submit button*/}
                <div>
                    <button type="submit" className="text-4xl bg-green-400 block m-auto">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default FormDemo