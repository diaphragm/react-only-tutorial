const TimeLine = (props) => {
  const tweets = props.tweets.map(tweet => (
    <Tweet
      key={tweet.id}
      icon={tweet.icon}
      displayName={tweet.displayName}
      accountName={tweet.accountName}
      content={tweet.content}
    />
  ))

  return (
    <div className="timeline">
      {tweets}
    </div>
  )
}
