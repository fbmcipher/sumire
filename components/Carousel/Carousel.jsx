/** This component allows the user to scroll (horizontally)
 *  between its children.
 *  Focussed children are given a CSS transformation to make
 *  the current state of the carousel visible — and a prop
 *  "focussed" is passed to the child component with which
 *  it can do whatever it wants.
 */

const Carousel = ({children}) => {
    return (
        <div class="carousel">
            {children}
        </div>
    )
}

export default Carousel;