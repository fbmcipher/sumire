/** Renders a ShoppingCartItem's price:
 *      ['GBP', 1200]
 *  as a human-readable value:
 *      £12.00
 */

const Price = ({price, currency}) => {
    const priceToDisplay = price.filter(price => price[0] == currency)[0];
    const priceSymbol = '£'; // normally would be a conditional here
    
    /* Price value is specified as an integer of pennies.
       So we need to get the amount of pounds, and amount 
       of pennies.
       This code does that. 1050 -> 10, 50 */
  
    const priceMajor = Math.floor(priceToDisplay[1] / 100);
    const priceMinor = String(priceToDisplay[1] % 100).padStart(2, '0')

    return (
        <span>
            {priceSymbol}{priceMajor}.{priceMinor}
        </span>
    )
};

export default Price;