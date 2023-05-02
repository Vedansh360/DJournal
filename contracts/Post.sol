// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

contract Post {

    // define structure of article
    struct Article {
        address authorAddress;
        string authorAlias;
        string category;
        string title;
        string contentHash;
        string imageHash;
        uint256 timestamp;
    }

    // unique post Id
    uint public postId = 0;

    // mapping to store all articles
    mapping (uint => Article) public articles;

    // contract owner's address
    address payable owner;

    uint gasLimit;

    constructor() payable {
        gasLimit = 200000;

        // set contract deployer as the owner
        owner = payable(msg.sender);
    }

    // ---  MODIFIERS --- //

    modifier onlyAuthor(uint _postId) {
        require(articles[_postId].authorAddress == msg.sender);
        _;
    }

    modifier postExists(uint _postId) {
        require(_postId > 0 && _postId <= postId, "Post does not exist.");
        _;
    }

    modifier hasEnoughDeposits() {
        require(msg.sender.balance >= tx.gasprice * gasLimit, "Not enough ether to perform this operation");
        _;
    }

    //==================================

    // --- FUNCTIONS --- //

    function createPost(string memory _authorAlias, string memory _category, string memory _title, string memory _contentHash, string memory _imageHash) external hasEnoughDeposits() {

        require(bytes(_title).length > 0, "Title must not be empty.");
        
        // increment post Id to new article's post Id
        postId++;

       articles[postId] = (
        Article(msg.sender, _authorAlias, _category, _title, _contentHash, _imageHash, block.timestamp)
       );
    }

    function updatePost(uint _postId, string memory _title, string memory _contentHash) external onlyAuthor(_postId) postExists(_postId) hasEnoughDeposits() {
        
        // Update title and content of article
        articles[_postId].title = _title;
        articles[_postId].contentHash = _contentHash;
    }

    function deletePost(uint _postId) external onlyAuthor(_postId) postExists(_postId) hasEnoughDeposits() {
        delete articles[_postId]; 
    }

    function getPost(uint _postId) external postExists(_postId) view returns (Article memory) {
        return articles[_postId];
    }
    
    /*
    CAN'T RETURN MAPPING IN SOLIDITY, NEED TO FIND A WORKAROUND
    function getArticles() external view returns (Article[] memory) {
        // Return all articles
        return articles;
    }
    */

    //==================================
}