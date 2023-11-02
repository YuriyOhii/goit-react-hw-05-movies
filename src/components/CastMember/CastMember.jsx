import PropTypes from 'prop-types'

export const CastMember = ({one:{character, name, profile_path}}) => {
    return (
        <div>
            <p>{character}</p>
            <p>{name}</p>
            <p>{profile_path}</p>
        </div>
    )
};
 
CastMember.propTypes = {
    one: PropTypes.shape({

    })
}