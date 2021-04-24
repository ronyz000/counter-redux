
import Disqus from "disqus-react"

function Discq(){
    const disqusShortname = "react-rony-disqus-com"
    const disqusConfig = {
      url: "https://react-rony-disqus-com.disqus.com/embed.js",
      identifier: "article-id",
      title: "Title of Your Article"
    }

    return (
      <div>

        <h1>Forum</h1>



        <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </div>
    )
  }
  export default Discq
