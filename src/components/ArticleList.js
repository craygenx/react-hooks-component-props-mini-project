import Article from "./Article";

export default function ArticleList({posts}){

    const articles = posts.map(article => {
        return <Article key={article.id} article={article}/>
    });
    return(
        <main>
            {articles}
        </main>
    )
}