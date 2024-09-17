import Link from 'next/link'
import React from 'react'
import config from "@config/pages/auth.json"

type TFormProps = {
    form_type: 'signin' | 'signup',
}
// TypeScript interfaces for Sign Up and Sign In forms

interface SocialLogin {
    label: string;
    icon: string;
}

interface FormField {
    label: string;
    type: 'text' | 'email' | 'password';
    required: boolean;
}

interface Link {
    label: string;
    url: string;
}

interface Terms {
    label: string;
    link: string;
}

interface FormConfig {
    title: string;
    description: string;
    google_login: SocialLogin;
    form: FormField[];
    terms?: Terms;
    privacy_policy?: Terms;
    login?: {
        label: string;
        link: Link;
    };
    forgot_password?: {
        label: string;
        link: Link;
    };
    signup?: {
        label: string;
        link: Link;
    };
    button: {
        label: string;
    },
    rememberMe?: boolean;
}
export default function Form({ form_type }: TFormProps) {
    const data: FormConfig = config[form_type] as FormConfig;
    return (
        <div className="min-h-[940px] bg-white py-10 lg:col-6 lg:py-[10px]">
            <div className="mx-auto w-full max-w-[480px]">

                <Link href={'/'}> <img className="mb-8 scale-75" src="/images/logo.svg" alt="" /></Link>
                <h2 className="mb-4">{data.title}</h2>
                <p>{data.description}</p>
                <div className="signin-options mt-7">
                    <Link className="btn flex btn-outline-white w-full items-center justify-center text-dark" href="#">
                        <img className="size-7 mr-4" src={data.google_login.icon} alt="Google" />
                        {data.google_login.label}
                    </Link>
                </div>
                <div className="relative my-6 text-center after:absolute after:left-0 after:top-1/2 after:z-[0] after:w-full after:border-b after:border-border after:content-['']">
                    <span className="relative z-[1] inline-block bg-white px-2">Or {data.title} With Email</span>
                </div>

                <form action="#">
                    {data.form.map((field, index) => {
                        const cls = index > 0 ? 'mt-2' : '';
                        return <div key={index} className={`form-group ${cls}`}>
                            <label htmlFor={field.label} className="form-label">{field.label}</label>
                            <input
                                type={field.type}
                                id={field.label}
                                className={`form-control`}
                                placeholder={field.label}
                            />
                        </div>

                    })}
                    {data?.terms ? <div className='mt-10 ml-2'>
                        <p className="text-start text-sm">
                            By signing up, you agree to our <a className='text-primary' href={data.terms.link}>{data.terms.link}</a> and <a className='text-primary' href={data.privacy_policy?.link}>{data.privacy_policy?.label}</a>
                        </p>
                        <div className="mt-2 text-start">
                            <input type="checkbox" id="terms" className="mr-2 text-primary border-primary focus:ring-0 rounded-sm" />
                            <label className='text-sm' htmlFor="terms">I agree to the terms and conditions</label>
                        </div>
                    </div> : <></>}
                    {form_type === 'signin' ? <div className='mt-4 flex items-center justify-between'>
                        {data.rememberMe ?
                            <div className="mt-2 text-start">
                                <input type="checkbox" id="terms" className="mr-2 text-primary border-primary focus:ring-0 rounded-sm" />
                                <label className='text-sm' htmlFor="terms">Remember me</label>
                            </div> : <></>
                        }
                        {data.forgot_password? <div className='mt-4'>
                            {data.forgot_password.label} <Link className='text-dark' href={data.forgot_password.link.url} >{data.forgot_password.link.label}</Link>
                        </div> : <></>}

                    </div> : <></>}
                    <input
                        className="btn btn-primary mt-4 block w-full"
                        type="submit"
                        value={data.button.label}
                    />

                    <p className="mt-6 text-center">
                        {data.signup ? <>{data.signup.label} <Link className='text-dark' href={data.signup.link.url} >{data.signup.link.label}</Link></> : ''}
                        {data.login ? <>{data.login.label} <Link className='text-dark' href={data.login.link.url} >{data.login.link.label}</Link></> : ''}
                    </p>
                </form>
            </div>
        </div>
    )
}
