import PropTypes from 'prop-types'

import { HiOutlineSearch } from 'react-icons/hi'
export const SearchForm = ({onSubmit}) => {

const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.elements.query.value;
    onSubmit(query);
   e.target.reset();
}

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="query" />
            <button type="submit"><HiOutlineSearch/></button>
        </form>
    )
};

SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}