import PropTypes from 'prop-types';

export default function ResumeSection({ type }) {
    return (
        <section className={`resume-section ${type}`}>
            <h2>{type.charAt(0).toUpperCase() + type.slice(1)}</h2>
            {/* Add form fields or content specific to each section */}
        </section>
    );
}

ResumeSection.propTypes = {
    type: PropTypes.string.isRequired,
};
