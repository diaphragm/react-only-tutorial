const App = () => {
  const [tweets, setTweets] = React.useState([
    {
      id: 0,
      icon: '🌽',
      displayName: 'もろこし太郎',
      accountName: 'morokoshi',
      content: '今日も1日もろこしがうまい'
    },
    {
      id: 1,
      icon: '🦐',
      displayName: 'エビデンス',
      accountName: 'evidence',
      content: 'かにみそたべたい'
    }
  ])

  const addTweet = React.useCallback((tweet) => {
    return setTweets(prev => {
      return [tweet, ...prev]
    })
  }, [setTweets])


  return (
    <div>
      <TweetInput setTweets={setTweets} />
      <TimeLine tweets={tweets} />
    </div>
  )
}

const target = document.querySelector('#app');
ReactDOM.render(<App />, target);
