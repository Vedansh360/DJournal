
// import css file
import './styles.css';

export default function AboutPage() {

    return(
        <div className="about-page-container">
            <h1 style={{fontWeight: "bold"}}>About</h1>
            <br/>
            <p style={{color: "black"}}>
                DJournal is a decentralised news sharing and journaling app. We aim to provide a platform for<br/>
                independent journalist, news agencies and individuals to post news and other updates anonymously<br/>
                on the blockchain without worrying about threat from any government or private organisation or<br/> 
                their post being taken down due to disagreement or opposition from any party.<br/>
                <br/>
                DJournal aims to provide a solution to the problem of corrupt media and censorship through the implementation<br/>
                of blockchain technology using smart contracts and IPFS so that no individual or organisation has control over the<br/>
                data, so that anyone can safely but responsibly post any news or information they desire or need to be known.<br/>
            </p>
        </div>
    );
}