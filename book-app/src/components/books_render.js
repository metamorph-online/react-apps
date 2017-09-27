//component renders books array on the index page

import React, {Component} from 'react';
import BookDescription from './description_render';
import AddToCart from '../containers/add_to_cart';
import {Link} from 'react-router';
import InfiniteScroll from 'react-infinite-scroller';


export default class RenderBooks extends Component{

	constructor(props){
		super(props);

		//slice array to display 5 elements on the page
		let onPageBooks = this.props.books.slice(0, 5);
		this.state = {books: onPageBooks, page : 1, over: true}

		console.log(this.state);
	}

	componentWillReceiveProps(nextProps) {
		let onPageBooks = nextProps.books.slice(0, 5);
	    this.setState({ books: onPageBooks });  
	}

	loadMore(){

		let pageNumber = this.state.page + 1;

		this.setState({page: pageNumber});

		let BooksNumber = pageNumber * 5;

		if(BooksNumber > this.props.books.length){

			this.setState({over: false});
		} 

		this.setState({books: this.props.books.slice(0, BooksNumber)});

		console.log(this.props.books.length);

		console.log('ding');
			
	}

	
	render(){

		return(

		<div className="books-list">
			<h3>List of available books</h3>

			<ul className="list-group">

				<InfiniteScroll
				    pageStart={0}
				    loadMore={this.loadMore.bind(this)}
				    hasMore={this.state.over}
				    loader={<div className="loader">Loading ...</div>}
				>
				{this.state.books.map((book)=>{

					return (
						<li key={book.id} className="list-group-item">
								
								<div className="cover-img"><img src={book.cover_img} alt="" className="img-responsive" /></div>

								<div className="book-info">
									<ul className="list-group">
										<li className="list-group-item active"><Link to={"book/" + book.id} className="title"><h4>Name: {book.name} </h4></Link></li>
										<li className="list-group-item"><strong>Genre:</strong> {book.genre_s}</li>
										<li className="list-group-item"><strong>Price:</strong> ${book.price}</li>
										<li className="list-group-item"><BookDescription description={book.description}></BookDescription></li>
										<li className="list-group-item"><AddToCart book={book}></AddToCart> <Link to={"book/" + book.id} className="title"><div className="btn btn-success my-inline-btns">More info...</div></Link></li>
									</ul>
								</div>
								
						</li>
					);
				})}
				</InfiniteScroll>
			</ul>
		</div>
		);
	}

}