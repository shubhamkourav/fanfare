import React from 'react'

export default function CommentForm() {
    return (
        <form className="comment-form" action="#" method="POST">
            <p className="mb-4">LEAVE A REPLAY</p>
            <div className="row mb-6">
                <div className="form-group mt-8 md:col-6 lg:col-4">
                    <input type="text" placeholder="Name" />
                </div>
                <div className="form-group mt-8 md:col-6 lg:col-4">
                    <input type="text" placeholder="Email" />
                </div>
                <div className="form-group mt-8 md:col-6 lg:col-4">
                    <input type="text" placeholder="Website" />
                </div>
            </div>
            <div className="form-group mb-6">
                <textarea cols={20} rows={20}></textarea>
            </div>
            <div className="form-group relative flex pl-6">
                <input
                    className="absolute left-0 top-1"
                    type="checkbox"
                    id="save-info"
                />
                <label className="block" htmlFor="save-info"
                >Save my name, email, and website in this browser for the next
                    time I comment.</label>
            </div>
            <input
                type="Submit"
                className="btn btn-primary mt-8 min-w-[189px] cursor-pointer"
                value="Post Comment"
            />
        </form>
    )
}
