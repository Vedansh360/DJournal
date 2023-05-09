import { useState } from "react";
import Button from 'react-bootstrap/Button';

export default function AuthorArticlesListItem(props) {

    const contract = props.contract;
    const id = props.articleId;

    const[article, setArticle] = useState({});

    const getPost = async() => {
        const _post = await contract.getPost(id);
        setArticle(_post);
    }
    if(contract) {
        getPost();
    }

    return (
        <div className="article-list-item-div">
            <h4>{article.title}</h4>
            <div className="article-list-item-button-container">
                <Button variant="outline-success" className="article-list-item-button">View</Button>
                <Button variant="outline-primary" className="article-list-item-button">Edit</Button>
                <Button variant="outline-danger" className="article-list-item-button">Delete</Button>
            </div>
        </div>
    )
}