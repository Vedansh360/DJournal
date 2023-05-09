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
            <h3>{article.title}</h3>
            <Button variant="success" className="article-list-item-button">View</Button>
            <Button variant="primary" className="article-list-item-button">Edit</Button>
            <Button variant="danger" className="article-list-item-button">Delete</Button>
        </div>
    )
}