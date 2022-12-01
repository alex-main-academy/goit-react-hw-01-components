import PropTypes from 'prop-types'
import css from './TransactionHistory.module.css'

const TransactionHistory = ({items}) => {
    let i = 1;
    return(
        <table className={css.transactionHistory}>
            <thead>
                <tr className={css.transactionHistoryTitle}>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(({id, type, amount, currency}) => {
                    i++;
                    return(
                        <tr key={id} className={i % 2 === 0 ? css.lightBack : css.darkBack}>
                            <td>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }))
}

export default TransactionHistory;