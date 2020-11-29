import React from 'react';
import { useState , useEffect } from 'react';
import { useFormik } from 'formik';

const Footer = ({email , password , check}) => {
    const [test , setTest] = useState(false);
    let myObject = ["raza" , "majid" , "Munawar"];
    
    function Person(first, last, age, eye) {
        this.fName = first;
        this.lName = last;
        this.age = age;
        this.relation = eye;
      };
    

    let myFather = new Person("Jhon" , "Doe" , 50 , "Father");

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
        return(<h1>{myFather.fName}</h1>)
    };

    const changeColor = () => {
        const grand = document.querySelector('.parent1');
        console.log(grand);
        const childrens = grand.parentElement;
        //childrens.forEach(getColor);

        console.log(childrens);
        getColor(childrens);
    };

    const getColor = (element) => {
        element.style.backgroundColor = "orange";
    };
    let myArray = ['Raza' , 'Saba' , 'Noor' , 'Ayesha'];
    const addClass = () => {
        // console.log(myArray);
        // for(let i = 0 ; i < myArray.length; i++){
        //     document.getElementById('names').innerHTML = myArray[i];
        // };
        return(
            <React.Fragment>
                <div id="names">
                    {myArray.map(( k , l) => (
                        <div>{k}</div>
        )) }
            </div>
            <span>Hi</span>
            </React.Fragment>
        );
        
    };
    return(
        <React.Fragment>
            <div className="main">
                <div className="grandParent" id="myId">
                    <div className="parent1">
                        <div id="parent1__child1"></div>
                        <div id="parent1__child2"></div>
                    </div>
                    <div className="parent1">
                        <div id="parent2__child1"></div>
                        <div id="parent2__child2"></div>
                    </div>
                </div>
                <button id="myBtnn" onClick={changeColor}>Click</button>
                <addClass />
                <button onClick={addClass}>Add Class</button>

                <div id="pulse">
                    <div id="container">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            {/* <div className="container">
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
                    </form> */}
        </React.Fragment>
    );
};
export default Footer;