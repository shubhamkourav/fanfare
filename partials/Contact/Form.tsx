import React from 'react'
import data from '@config/pages/contact.json';

type FormField = {
    id: string,
    type: string,
    label?: string,
    cols?: number,
    rows?: number,
    required?: boolean,
    disabled?: boolean,
    value?: string,
    onChange?: (event: React.FormEvent<HTMLInputElement>) => void,
    placeholder?: string,
    options?: { value: string; label: string }[],
}
export default function Form() {
    const { form } = data;

    return (
        <section className="section pt-0">
            <div className="container">
                <div className="row">
                    <div className="mb-10 text-center md:col-6 md:order-2 md:mb-0 md:pt-9">
                        <div className="contact-img relative inline-flex pl-5 pb-5">
                            <img src="/images/contact-img.png" alt="" />
                            <img
                                className="absolute bottom-0 left-0 -z-[1] h-14 w-14"
                                src="/images/shape-2.svg"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="md:col-6 md:order-1">
                        <form className="lg:max-w-[484px]" action="#" method="POST">
                            {form.map((field: FormField) => {
                                if (field.type === 'button') {
                                    return (
                                        <div key={field.id} className="form-group">
                                            <button className="btn btn-primary w-full" type={field.type}>
                                                {field.label}
                                            </button>
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div key={field.id} className="form-group mb-5">
                                            <label className="form-label" htmlFor={field.id}>
                                                {field.label}
                                            </label>
                                            {field.type === 'textarea' ? <textarea
                                                className="form-control h-[150px]"
                                                id={field.id}
                                                cols={field.cols}
                                                rows={field.rows}
                                            ></textarea> : <input
                                                className="form-control"
                                                type={field.type}
                                                id={field.id}
                                                placeholder={field.placeholder}
                                            />}
                                        </div>
                                    )
                                }
                            })}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
