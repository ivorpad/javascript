import { filter } from "lodash-es";
import ListItem from "./ListItem";
import Node from "./Node";
/**
 * Represents an item within a list.
 */
class List extends Node {
	/**
	 * Represents an item within a list.
	 *
	 * @param {number}            startIndex  The index of the beginning of the list item.
	 * @param {number}            endIndex    The index of the end of the list item.
	 * @param {Array<ListItem>}   children    The sub-elements of the list item.
	 *
	 * @returns {void}
	 */
	constructor( startIndex, endIndex, children ) {
		super( "list", startIndex, endIndex );
		this.children = children;

		this._checkChildren();
	}

	/**
	 * Constrains the children of the List to ListItems. Throws a warning if any child of the List is not a ListItem.
	 *
	 * @returns {void}
	 * @private
	 */
	_checkChildren() {
		// Check if any child is not an instance of ListItem.
		const naughtyChildren = filter( this.children, function( child ) {
			return ! ( child instanceof ListItem );
		} );

		if ( naughtyChildren.length > 0 ) {
			console.warn( "Not all items of the List are of type ListItem!" );
		}
	}
}
export default List;
