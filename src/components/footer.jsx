import React from 'react';
import { useState , useEffect } from 'react';
import { useFormik } from 'formik';

const Footer = ({email , password , check}) => {
    const [test , setTest] = useState(false);
    let myObject = ["raza" , "majid" , "Munawar"];

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: ""
        },
        onSubmit: values => {
            console.log("Form Data" , values);
            alert(`Hi ${values.name} your email ${values.email} is registered with password ${values.password}`)
        },
        validate: values => {
            let errors = {}
            if(!values.name){
                errors.name = 'Required'
            }

            if(!values.email) {
                errors.email = "Required"
            }else if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(values.email)){
                errors.email = "Invalid email format"
            }

            if(!values.password){
                errors.password = "Required"
            }
            return errors;
        }
    });
    console.log("Form error" , formik.errors);

    const myCompo = () => {
    return(
        <div>
        {myObject.map((v , i) =>(
            <h1 key={i}>{v}</h1>
        ))};
        </div>
    );
    };

    const otherCompo = () => {
        return(<h1>Nothing to showm</h1>)
    };
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    {myObject.map((v , i) => (
                        <h1 key={i}>{v}</h1>
                    )
                    )}
                </div>
                <p>Im new</p>
            </div>
            {test ? myCompo() : otherCompo()}
            <form action="" id="form" onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Name</label>
                    <div>{formik.errors && formik.touched.name ? formik.errors.name : null}</div>
                <input onBlur={formik.handleBlur} type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name}/>
                <label htmlFor="email" >Email</label>
                <div>{formik.errors && formik.touched.email ? formik.errors.email : null}</div>
                <input onBlur={formik.handleBlur} type="text" id="email" name="email" onChange={formik.handleChange} value={formik.values.email}/>
                <label htmlFor="password">Password</label>
                <div>{formik.errors && formik.touched.password ? formik.errors.password : null}</div>
                <input onBlur={formik.handleBlur} type="text" name="password" id="password" onChange={formik.handleChange} value={formik.values.password}/>
                <button type="submit">Submit</button>
            </form>

            //---------------------------------------
            <div className="fonting">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis blanditiis et nostrum nisi quaerat labore? Hic ducimus adipisci veniam dicta!</p>
                        <div className="inside">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, eum?</p>
                        </div>
            </div>
        </React.Fragment>
    );
};
export default Footer;