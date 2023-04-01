import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const TextInputGroup = ({
  label, // we could have passed only props like (props) and down we could have done props.type , prop.name
  name,
  placeholder,
  value,
  type,
  onChange,
  //error
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{name}</label>
      <input
        type={type}
        name={name}
        className="form-control form-control-lg"
        /* className={classnames('form-control form-control-lg', 
        {
            'is-invalid' : error
        })}*/
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};
TextInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
};

TextInputGroup.defaultProps = {
  type: "text",
};
export default TextInputGroup;
