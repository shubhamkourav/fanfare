import moment from 'moment';
import Link from 'next/link';
import React from 'react'

type CommentProps = {
    author: {
        name: string;
        image: string;
    };
    date: string;
    content: string;
    replies?: CommentProps[];
    isReply?: boolean;
}
export default function Comment({ author, date, content, replies, isReply=false }: CommentProps) {
    return (
        <>
            <div className={`comment flex space-x-4 ${!isReply ?'border-b border-border':''} py-8`}>
                {isReply ? <img src="/images/icons/replay-arrow.svg" alt="" />: null}
                <img
                    src={author.image}
                    className="h-[70px] w-[70px] rounded-full"
                    alt={author.name}
                />
                <div>
                    <h4 className="font-primary text-lg font-medium capitalize">
                        {author.name}
                    </h4>
                    <p className="mt-2.5">
                        {moment(date).format('MMM DD YYYY LT')}
                        <Link className="ml-4 text-primary" href="#">Replay</Link>
                    </p>
                    <p className="mt-5">
                        {content}
                    </p>
                </div>
            </div>
            {replies?.map((rep, i) => {
                return <Comment key={i} isReply={true} author={rep.author} date={rep.date} content={rep.content} replies={rep.replies} />
            })}
        </>
    )
}
