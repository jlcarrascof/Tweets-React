export default function Tweet({ user, body, date, time, likes, retweets, onLike, onRetweet }) {

    <div className="border p-4 rounded-lg bg-white shadow-md">

        {/* header of tweet */}

        <div className="flex justify-between items-center border-b pb-2 mb-2">
            <span className="font-bold text-gray-800">@{user}</span>
            <span className="text-sm text-gray-500">{date} - {time}</span>
        </div>

        {/* body of tweet */}

        <div className="text-gray-700 text-base mb-4 border-b pb-4">
            {body}
        </div>

    </div>

}
