import Layout from "../../components/Layout"

export default function News({ results }) {
    return(
      <Layout>
        <h1>Top Stories</h1>
        <ul>
          {results.map(result => {
            return(
            <li key={result.uri}>
              <a href={result.url} target="_blank" rel="noopener norefferer">{result.title}</a></li>
            
            )
          })}
        </ul>
      </Layout>
    )
}

const API_KEY = "AH4fCLlgTHroXxmqm30CTDZAVBH1QnZv"
export async function getStaticProps() {
  const URL = `https://api.nytimes.com/svc/topstories/v2/science.json?api-key=${API_KEY}`
  const response = await fetch(URL)
  const data = await response.json()
  console.log(data.results)
  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      results : data.results
    }
  }
}