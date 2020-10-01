const TweetInput = (props) => {
  const textareaRef = React.useRef(null)
  const sendTweet = React.useCallback(() => {
    if(!textareaRef.current) { return }
    if(!textareaRef.current.value) { return }

    const newTweet = {
      id: new Date().getTime(),
      icon: '🍕',
      displayName: 'ピザ食',
      accountName: 'debu',
      content: textareaRef.current.value
    }

    props.setTweets(prev => [newTweet, ...prev])
  }, [textareaRef.current, props.addTweet])

  return (
    <div>
      <div><textarea className="tweet-textarea" ref={textareaRef}></textarea></div>
      <div><button onClick={sendTweet} className="send-tweet">Tweet</button></div>
    </div>
  )
}
